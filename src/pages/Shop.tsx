import React from "react";
import "../styles/Shop.css";


import Dog from "../components/Dog";

import ReactPaginate from "react-paginate";
import Input from "../components/Input";
import useFetch from "../components/useFetch";

type Props = {
  origin: string;
  img: string;
  breed: string;
  selected: number;
};

const Shop = () => {
  const { dogs, loading, err, pageNum, query, setPageNum, setQuery } = useFetch(
    "https://dog-breeds2.p.rapidapi.com/dog_breeds"
  );

  const dogsPerPage = 6;
  const pagesVisited = pageNum * dogsPerPage;

  const displayDogs = dogs
    .filter((dog: Props) => dog.breed.toLowerCase().includes(query))
    .slice(pagesVisited, pagesVisited + dogsPerPage)
    .map((dog: Props, key) => {
      return (
        <Dog key={key} origin={dog.origin} img={dog.img} breed={dog.breed} />
      );
    });

  const pageCount = Math.ceil(dogs.length / dogsPerPage);
  const changePage = ({ selected }: Props) => {
    setPageNum(selected);
  };

  return (
    <div className=" bg-gray-100  ">
      <Input
        type="text"
        placeholder="Search dogs..."
        onChange={(e) => setQuery(e.target.value)}
      />
      <form>
        <select name="" id="">
          <option value="" selected disabled></option>
          <option value="husky">husky</option>
          <option value="">husky</option>
        </select>
      </form>

      <div className=" h-auto md:h-[80vh] place-items-center justify-center md:grid-cols-3 items-center grid grid-cols-1 md:flex">
        {displayDogs}

        {err && <h2>{err}</h2>}
        {loading ? <div className="loader"></div> : null}
      </div>
      <div className="flex  justify-center md:items-center md:w-full  ">
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
