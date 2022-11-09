import { Link } from "react-router-dom";
import "../styles/Dog.css";


const Dog = ({ img, breed, origin, id }) => {
  return (
    <div className="dog-container bg-white w-[300px] rounded overflow-hidden shadow-lg m-5 h-[60%]">
      <div className="dog-cart ">
        <img className="dog-img w-[100%] h-[230px]" src={img} />
        
        <div className="flex flex-col items-center justify-center">
        <h3 className="text-blue-500 text-lg my-3 font-bold"> {breed}</h3>
        <p className="  font-sans text-md text-gray-800 text-center"> {origin}</p>

        <Link to={`/details/${id}`}>
          <button className="adopt-btn bg-transparent hover:bg-blue-500 text-blue-500 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded m-5">READ MORE</button>
        </Link>
        </div>
      </div>
     
    </div>
  );
};

export default Dog;
