import React from "react";
import "../styles/Shop.css";

import { useEffect } from "react";
import { useState } from "react";
import Dog from "../components/Dog";

import ReactPaginate from "react-paginate";

const Shop = () => {
  const [dogs, setDogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState();
  const [pageNum, setPageNum] = useState(0);
  const [query, setQuery] = useState("");
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
        'X-RapidAPI-Key': '6a2c45b0c7msh9003a768797bbe7p19e221jsna0f7ed43603d',
        'X-RapidAPI-Host': 'dog-breeds2.p.rapidapi.com'
      },
    };

    fetch('https://dog-breeds2.p.rapidapi.com/dog_breeds', options)
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

  const dogsPerPage = 6;
  const pagesVisited = pageNum * dogsPerPage;

  const displayDogs = dogs
    .filter((dog) => dog.breed.toLowerCase().includes(query))
    .slice(pagesVisited, pagesVisited + dogsPerPage)
    .map((dog, key) => {
      return (
        <Dog
          id={key}
          key={key}
          origin={dog.origin}
          img ={dog.img}
          breed={dog.breed}
        />
      );
    });

  const pageCount = Math.ceil(dogs.length / dogsPerPage);
  const changePage = ({ selected }) => {
    setPageNum(selected);
  };

  return (
    <div className=" bg-gray-100  w-full flex flex-col ">
      <input
        className="w-[300px] m-auto mt-10 p-2"
        type="text"
        placeholder="Search for dog..."
        onChange={(e) => setQuery(e.target.value)}
      />

      <div className=" shop-header flex h-[80vh] justify-center items-center grid-cols-1">
        {displayDogs}

        {err && <h2>{err}</h2>}
        {loading ? <div className="loader"></div> : null}
      </div>
      <div className="flex  justify-center items-center">
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"paginationBttns"}
          previousLinkClassName={"previousBttn"}
          nextLinkClassName={"nextBttn"}
          disabledClassName={"paginationDisabled"}
          activeClassName={"paginationActive"}
        />
      </div>
    </div>
  );
};

export default Shop;
