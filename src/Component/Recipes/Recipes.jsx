import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Recipe from "../Recipe/Recipe";

const Recipes = () => {
  const id = useParams();
  // const [data, setData] = useState([]);
  const data = useLoaderData();
  console.log(data);
  //const recipe = data.find((d) => d.id == id);
  //console.log(recipe.recipes);
  const { picture, name, experience, description, likes, numRecipes } = data;
  return (
    <div className="container px-20">
      <div className="my-20 bg-green-400 rounded-xl">
        <div className="card h-80  lg:card-side  shadow-2xl">
          <img className="w-96 rounded-xl" src={picture} alt="Album" />
          <div className="card-body w-80">
            <h2 className="card-title">{name}</h2>
            <p>Description: {description}</p>
            <p>Experience: {experience}</p>
            <p>Recipes: {numRecipes}</p>
            <p>Likes: {likes}</p>
          </div>
        </div>
      </div>
      <h2 className="text-4xl text-center font-semibold">This is recipes</h2>
      <div className="grid grid-cols-3 mx-16 gap-5 ">
        {data.recipes.map((r) => (
          <Recipe r={r} key={r.id}></Recipe>
        ))}
      </div>
    </div>
  );
};

export default Recipes;
