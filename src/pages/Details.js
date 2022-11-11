import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/Details.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Details = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "6a2c45b0c7msh9003a768797bbe7p19e221jsna0f7ed43603d",
        "X-RapidAPI-Host": "dog-breeds2.p.rapidapi.com",
      },
    };

    fetch(`https://dog-breeds2.p.rapidapi.com/dog_breeds/breed/${id}`, options)
      .then((response) => {
        if (!response.ok) {
          throw Error("could not fetch the data");
        }
        return response.json();
      })

      .then((response) => {
        setDetails(response);
        setLoading(false);
      })
      .catch((err) => {
        setErr(err.message);
      });
  }, []);

  return (
    <div className="details">
      {err && <h2>{err}</h2>}

      {details.map((detail, key) => (
        <div
          className="max-w-sm rounded overflow-hidden shadow-lg flex flex-col items-center justify-center h-[400px]"
          key={key}
        >
          {detail.breed}
          <img src={detail.img} />
          <p>Coat: {detail.meta.coat}</p>
          <p>Height: {detail.meta.height}</p>
          <p>Weight: {detail.meta.weight}</p>
          <p>Origin: {detail.origin}</p>

          <button onClick={() => navigate("/shop")} className="mt-12">
            <ArrowBackIcon />
          </button>
        </div>
      ))}
      {loading ? <div className="loader"></div> : null}
    </div>
  );
};

export default Details;
