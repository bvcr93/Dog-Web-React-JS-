import React from "react";
import "../styles/Shop.css";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Dog from "./Dog";

const Shop = () => {
  const [dogs, setDogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState();

  // useEffect(() => {
  //   const options = {
  //     method: "GET",
  //     url: "https://dog-breeds2.p.rapidapi.com/dog_breeds",
  //     headers: {
  //       "X-RapidAPI-Key": "6a2c45b0c7msh9003a768797bbe7p19e221jsna0f7ed43603d",
  //       "X-RapidAPI-Host": "dog-breeds2.p.rapidapi.com",
  //     },
  //   };

  //   axios
  //     .request(options)
  //     .then(function (response) {
  //       console.log(response);
  //       setDogs(response.data);
  //     })
  //     .catch(function (error) {
  //       console.error(error);
  //     });
  // }, []);
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "6a2c45b0c7msh9003a768797bbe7p19e221jsna0f7ed43603d",
        "X-RapidAPI-Host": "dog-breeds2.p.rapidapi.com",
      },
    };

    fetch("https://dog-breeds2.p.rapidapi.com/dog_breeds", options)
      .then((response) => {
        if (!response.ok) {
          throw Error("could not fetch the data");
        }
        return response.json();
      })
      .then((response) => {
        console.log(response);
        setDogs(response);
        setLoading(false);
        setErr(null);
      })

      .catch((err) => {
        setLoading(false);
        setErr(err.message);
      });
  }, []);

  return (
    <div className="shop-header">
      {dogs
        .map((dog, key) => (
          <Dog
            id={key}
            key={key}
            origin={dog.origin}
            img={dog.img}
            breed={dog.breed}
          />
        ))
        .slice(20, 25, dogs.length)}
      {err && <h2>{err}</h2>}
      {loading ? <div className="loader"></div> : null}
    </div>
  );
};

export default Shop;
