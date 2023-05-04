import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const Resipe = ({ ar }) => {
  const [clicked, setClicked] = useState();
  const favoriteButton = () => {
    toast("Added to Favorite!");
    setClicked(!clicked);
  };

  console.log(ar);
  const { picture, rating, name, ingredients } = ar;
  return (
    <div className="">
      <div className="card w-80 h-100 bg-base-100 shadow-xl">
        <figure>
          <img src={picture} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>Ingredients: {ingredients}</p>
          <p>Ratings:{rating}</p>
          <div className="card-actions justify-center">
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
    </div>
  );
};

export default Resipe;
