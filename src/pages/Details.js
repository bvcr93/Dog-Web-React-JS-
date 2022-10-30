import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/Details.css";

const Details = () => {
  const { id } = useParams();

  const [details, setDetails] = useState([]);
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
      "https://dog-breeds2.p.rapidapi.com/dog_breeds/breed/Cretan%20Hound",
      options
    )
      .then((response) => response.json())

      .then((response) => setDetails(response))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="details">
      <h3>dog details {id}</h3>

      {details.map((detail, key) => (
        <div key={key}>
          {detail.breed}
          <img src={detail.img} />
        </div>
      ))}
    </div>
  );
};

export default Details;
