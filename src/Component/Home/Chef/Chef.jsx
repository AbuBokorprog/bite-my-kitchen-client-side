import React from "react";
import { Link } from "react-router-dom";

const Chef = ({ c }) => {
  //console.log(c);
  const { picture, name, experience, likes, id, numRecipes } = c;
  return (
    <div className="container">
      <div className="card w-11/12 mx-auto bg-base-100 shadow-xl">
        <figure>
          <img className="h-80 rounded-xl" src={picture} alt="chef" />
        </figure>
        <div className="card-body">
          <h2 className="card-title mt-4">{name}</h2>
          <p>Experience: {experience}</p>
          <p>Numbers of recipes: {numRecipes}</p>
          <p>Likes: {likes}</p>
          <div className="card-actions my-3 justify-end">
            <Link className="mx-auto" to={`/:${id}`}>
              <button className="btn btn-primary text-center">
                View Recipes
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chef;
