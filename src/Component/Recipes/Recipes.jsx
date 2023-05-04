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
  //const recipesData = recipe.recipes;
  return (
    <div className="container px-20">
      <h2>This is recipes</h2>
      <div className="grid grid-cols-3 mx-16 gap-5 ">
        {data.recipes.map((r) => (
          <Recipe r={r} key={r.id}></Recipe>
        ))}
      </div>
    </div>
  );
};

export default Recipes;
