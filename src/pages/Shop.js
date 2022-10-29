import React from "react";
import "../styles/Shop.css";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Dog from "./Dog";

const Shop = () => {
  const [dogs, setDogs] = useState([]);
  const [loading, setLoading] = useState(true);

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
      .then((response) => response.json())
      .then((response) => {
        console.log(response)
        setDogs(response);
        setLoading(false);
      })

      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="shop-header">
      {dogs
        .map((dog, key) => (
          <Dog key={key} origin={dog.origin} img={dog.img} breed={dog.breed} />
        ))
        .slice(20, 25, dogs.length)}

      {loading ? <div className="loader"></div> : null}
    </div>
  );
};

export default Shop;
