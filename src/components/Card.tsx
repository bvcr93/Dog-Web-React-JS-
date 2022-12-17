import React from 'react'
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from 'react-router-dom';
type Props = {
    detail: any
}

const Card = ({ detail }: Props) => {
    const navigate = useNavigate();
    return (
        <div className='max-w-sm rounded overflow-hidden shadow-lg flex flex-col items-center justify-center h-[400px]'>
            <p className="mb-4 text-blue-500 font-bold"> {detail.breed}</p>

            <img src={detail.img} alt="/" />
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
    )
}

export default Card