import React from "react";
import Navbar from "../../Shared/Navbar/Navbar";
import Footer from "../../Shared/Footer/Footer";
import { Outlet, useNavigation } from "react-router-dom";

const Main = () => {
  const navigation = useNavigation();
  return (
    <div>
      <Navbar></Navbar>
      <div className="text-center">
        {navigation.state === "loading" && (
          <div className="radial-progress" style={{ "--value": 100 }}>
            100%
          </div>
        )}
      </div>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
