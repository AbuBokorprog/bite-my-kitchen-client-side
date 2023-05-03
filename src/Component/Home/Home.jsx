import React from "react";
import Banner from "./Banner/Banner";
import { useLoaderData } from "react-router-dom";
import Chef from "./Chef/Chef";

const Home = () => {
  const chef = useLoaderData();
  //console.log(chef);
  return (
    <div className="container">
      <Banner></Banner>
      <div>
        <div className="my-10">
          <h2 className="text-3xl font-semibold text-center">Our Best Chefs</h2>
        </div>
        <div className="grid grid-cols-3 mx-5 gap-10 ">
          {chef.map((c) => (
            <Chef c={c} key={c.id}></Chef>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
