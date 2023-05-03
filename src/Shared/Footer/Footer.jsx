import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="container px-20 ">
      <div className=" bg-orange-200 rounded-xl py-16 text-center">
        <div className="flex gap-3 font-medium justify-center items-center">
          <p>Dhaka, Mirpur-2</p>
          <p>0378-3432</p>
          <p>bitemykitchen@gmail.com</p>
        </div>
        <div>
          <p className="text-xl my-3">Open: 09:00 AM - 01:00 PM</p>
        </div>
        <div className="flex gap-5 my-5 justify-center items-center ">
          <Link className="text-black">Instagram</Link>
          <Link className="text-black">Facebook</Link>
          <Link className="text-black">Twitter</Link>
        </div>
        <div>
          <p>
            <small>@copyright-2023</small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
