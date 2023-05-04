import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import ActiveLink from "../../ActiveLink/ActiveLink";

const Navbar = () => {
  const { user, loader, logOut } = useContext(AuthContext);
  console.log(user);
  let pt = "";
  let n = "";
  if (user) {
    pt = user.photoURL;
    n = user.displayName;
  }
  console.log(n);

  const logOutUser = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container px-20 rounded-xl">
      {loader ? (
        <div className="radial-progress" style={{ "--value": 100 }}>
          100%
        </div>
      ) : (
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
                <NavLink to="/">Home</NavLink>
                <NavLink to="/blog">Blog</NavLink>
                <NavLink to="/recipes">Recipes</NavLink>
                <NavLink to="/about">About</NavLink>
              </ul>
            </div>
            <Link className="btn btn-ghost normal-case text-xl">
              Bite My Kitchen
            </Link>
          </div>
          <div className="navbar-center lg:flex justify-around items-center">
            <div className="mx-5">
              <ActiveLink to="/" className="mx-5 text-black">
                Home
              </ActiveLink>
            </div>
            <div className="mx-5">
              <ActiveLink className="mx-5 text-black" to="/blog">
                Blog
              </ActiveLink>
            </div>
            <div className="mx-5">
              <ActiveLink className="mx-5 text-black" to="/recipes">
                Recipes
              </ActiveLink>
            </div>
            <div className="mx-5">
              <ActiveLink className="mx-5 text-black" to="/about">
                About
              </ActiveLink>
            </div>
          </div>
          <div className="navbar-end">
            {user ? (
              <img
                className={`w-10 rounded-3xl mr-4`}
                src={pt}
                alt=""
                title={n}
              />
            ) : (
              <Link className="mr-5">
                <FaUserAlt />
              </Link>
            )}
            {user ? (
              <Link
                onClick={logOutUser}
                className="btn text-black bg-gradient-to-r from-red-200 via-purple-200 to-pink-200"
              >
                LogOut
              </Link>
            ) : (
              <Link
                to="/login"
                className="btn text-black bg-gradient-to-r from-red-200 via-purple-200 to-pink-200"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
