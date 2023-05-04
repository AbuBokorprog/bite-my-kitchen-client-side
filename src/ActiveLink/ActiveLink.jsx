import React from "react";
import { NavLink } from "react-router-dom";

const ActiveLink = ({ to, children }) => {
  return (
    <div className="flex items-center text-black">
      <NavLink
        to={to}
        className={({ isActive }) => (isActive ? "text-red-500" : "")}
      >
        {children}
      </NavLink>
    </div>
  );
};

export default ActiveLink;
