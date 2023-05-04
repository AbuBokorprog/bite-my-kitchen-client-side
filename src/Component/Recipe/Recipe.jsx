import React from "react";

const Recipe = ({ r }) => {
  //console.log(r);
  const { picture, rating, method, name, ingredients } = r;
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
          <div className="card-actions my-3 justify-end"></div>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
