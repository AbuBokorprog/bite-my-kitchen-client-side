import React from "react";
import { Link } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="container px-20 rounded-xl">
      <div className="navbar py-4 bg-orange-300">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <Link to="/">Home</Link>
              <Link to="/blog">Blog</Link>
            </ul>
          </div>
          <Link className="btn btn-ghost normal-case text-xl">
            Bite My Kitchen
          </Link>
        </div>
        <div className="navbar-center lg:flex justify-around items-center">
          <div>
            <Link className="mx-5 text-black" to="/">
              Home
            </Link>
            <Link className="mx-5 text-black" to="/blog">
              Blog
            </Link>
          </div>
        </div>
        <div className="navbar-end">
          <Link className="mr-5">
            <FaUserAlt />
          </Link>
          <Link
            to="/login"
            className="btn text-black bg-gradient-to-r from-red-200 via-purple-200 to-pink-200"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
