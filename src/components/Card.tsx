import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
type Props = {
  detail: {
    img: string;
    breed: string;
    origin: string;
    meta: {
      coat: string;
      weight: string;
      height: {
        bitches: string;
        dogs: string;
      };
    };
  };
};

const Card = ({ detail }: Props) => {
  const navigate = useNavigate();
  
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg flex flex-col items-center justify-center h-400px p-4 bg-white hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out">
      <p className="mb-4 text-blue-500 font-bold text-xl">{detail.breed}</p>

      <img src={detail.img} alt="/" className="w-full h-64 object-cover" />
      <div className="flex flex-col items-center justify-center mt-3">
        <p className="mb-4 text-lg">Coat: {detail.meta.coat}</p>

        <p className="mb-4 text-lg">Weight: {detail.meta.weight}</p>
        <p className="mb-4 text-lg">Origin: {detail.origin}</p>
      </div>
      <button onClick={() => navigate("/shop")} className="mb-2 py-2 px-4 rounded-full bg-blue-500 text-white hover:bg-blue-700">
        <ArrowBackIcon /> Go Back
      </button>
    </div>
  );
};

export default Card;
