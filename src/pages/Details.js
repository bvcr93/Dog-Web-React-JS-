import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/Details.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";


// interface Details {
//   meta: string
//   breed: string
//   img: string

//   origin: string 
// }

const Details = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);
// const {dogs, loadingState ,error} = useFetch(`https://dog-breeds2.p.rapidapi.com/dog_breeds/breed/${id}`)
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
  }, [id]);

  return (
    <div className="details h-[90vh] flex items-center justify-center">
      {err && <h2>{err}</h2>}

      {details.map((detail, key) => (
        <div
          className="max-w-sm rounded overflow-hidden shadow-lg flex flex-col items-center justify-center h-[400px]"
          key={key}
        >
          <p className="mb-4 text-blue-500 font-bold"> {detail.breed}</p>

          <img src={detail.img} alt="/"/>
          <div className="flex flex-col items-center justify-center mt-3">
            <p className="mb-4 ">Coat: {detail.meta.coat}</p>
            <p className="mb-4 ">Height: {detail.meta.height}</p>
            <p className="mb-4 ">Weight: {detail.meta.weight}</p>
            <p className="mb-4 ">Origin: {detail.origin}</p>
          </div>
          <button onClick={() => navigate("/shop")} className="mb-2">
            <ArrowBackIcon />
          </button>
        </div>
      ))}
      {loading ? <div className="loader"></div> : null}
    </div>
  );
};

export default Details;
