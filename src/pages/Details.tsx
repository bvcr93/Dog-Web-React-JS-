/* eslint-disable @typescript-eslint/no-redeclare */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/Details.css";

import Card from "../components/Card";

interface Details {
  meta: {
    coat: string;
    height: {
      bitches: string
      dogs: string
    }
    weight: string;
  };
  breed: string;
  img: string;
  origin: string;
 
}

const Details = () => {
  const { id } = useParams();

  const [details, setDetails] = useState<Details[] >([]);
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
  }, [id]);

  return (
    <div className="details h-[90vh] flex items-center justify-center">
      {err && <h2>{err}</h2>}

      {details.map((detail, key) => (
        <Card key={key} detail={detail} />
      ))}
      {loading ? <div className="loader"></div> : null}
    </div>
  );
};

export default Details;
