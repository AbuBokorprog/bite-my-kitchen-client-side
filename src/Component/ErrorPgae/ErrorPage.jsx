import React from "react";
import image from "../..//assets/6333074.jpg";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <img className="h-96 mx-auto mt-16" src={image} alt="" />
      <div className="text-center">
        <button className="btn bg-red-400 ">
          <Link className="text-white" to="/">
            Go Back Home
          </Link>
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
