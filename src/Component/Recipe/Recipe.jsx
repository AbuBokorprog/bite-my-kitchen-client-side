import React, { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { FaHeart } from "react-icons/fa";

const Recipe = ({ r }) => {
  //console.log(r);
  const [clicked, setClicked] = useState();
  const { picture, rating, method, name, ingredients } = r;
  const favoriteButton = () => {
    toast("Added to Favorite!");
    setClicked(!clicked);
  };
  return (
    <div className="container my-20">
      <div className="card w-11/12 h-full mx-auto bg-base-100 shadow-xl">
        <figure>
          <img className=" rounded-xl" src={picture} alt="recipe" />
        </figure>
        <div className="card-body">
          <h2 className="card-title mt-4">{name}</h2>
          <p>Ingredients: {ingredients}</p>
          <p>
            Method:
            <span>
              <small>{method}</small>
            </span>
          </p>
          <p>Ratings: {rating}</p>
          <div className="text-center ">
            <button
              onClick={favoriteButton}
              className={` bg-red-400 px-6 rounded-xl  ${
                clicked ? "btn-disabled" : "none"
              }`}
            >
              Favorite
            </button>
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
