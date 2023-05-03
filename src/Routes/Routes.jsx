import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Component/Home/Home";
import ErrorPage from "../Component/ErrorPgae/ErrorPage";
import Recipes from "../Component/Recipes/Recipes";
import Blogs from "../Component/Blogs/Blogs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch(`http://localhost:5000/chef`),
      },
      {
        path: "/:id",
        element: <Recipes></Recipes>,
      },
      {
        path: "/blog",
        element: <Blogs></Blogs>,
      },
    ],
  },
]);

export default router;
