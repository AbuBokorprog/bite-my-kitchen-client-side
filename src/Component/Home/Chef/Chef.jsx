import React from "react";
import { Link } from "react-router-dom";

const Chef = ({ c }) => {
  //console.log(c);
  const { picture, name, experience, likes, id, numRecipes } = c;
  return (
    <div className="container">
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img className="h-80" src={picture} alt="chef" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>Experience: {experience}</p>
          <p>Numbers of recipes: {numRecipes}</p>
          <p>Likes: {likes}</p>
          <div className="card-actions justify-end">
            <Link className="mx-auto" to={`/recipes/${id}`}>
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
