import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/Details.css";

const Details = () => {
  const { id } = useParams();

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

    fetch(
      "https://dog-breeds2.p.rapidapi.com/dog_breeds/breed/Aidi" ,
      options
    )
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

      <h3>dog details  {id}</h3>

      {details.map((detail, key) => (
        <div key={key}>
          {detail.breed}
          <img src={detail.img} />
          <p>{detail.meta.coat}</p>
        </div>
      ))}
      {loading ? <div className="loader"></div> : null}
    </div>
  );
};

export default Details;
