import React from "react";
import { useLoaderData } from "react-router-dom";
import Resipe from "./Resipe/Resipe";

const AllRecipes = () => {
  const allRecipes = useLoaderData();
  //console.log(allRecipes);
  return (
    <div className="container px-20">
      <div className="mt-16 mb-5 text-center">
        <h3 className="text-4xl font-semibold">All Recipes</h3>
      </div>
      <div className="grid grid-cols-3 mb-16 gap-5">
        {allRecipes.map((ar) => (
          <Resipe ar={ar} key={ar.id}></Resipe>
        ))}
      </div>
    </div>
  );
};

export default AllRecipes;
