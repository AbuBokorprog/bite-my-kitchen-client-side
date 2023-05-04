import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Component/Home/Home";
import ErrorPage from "../Component/ErrorPgae/ErrorPage";
import Recipes from "../Component/Recipes/Recipes";
import Blogs from "../Component/Blogs/Blogs";
import Login from "../Component/Login/Login";
import Register from "../Component/Register/Register";
import AllRecipes from "../Component/AllRecipes/AllRecipes";
import About from "../Component/About/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
          fetch(
            `https://bite-my-kitchen-jgkjx6xmk-abubokorprog.vercel.app/chef`
          ),
      },
      {
        path: "/recipes",
        element: <AllRecipes></AllRecipes>,
        loader: () =>
          fetch(
            `https://bite-my-kitchen-jgkjx6xmk-abubokorprog.vercel.app/recipes`
          ),
      },
      {
        path: "/:id",
        element: <Recipes></Recipes>,
        loader: ({ params }) =>
          fetch(
            `https://bite-my-kitchen-jgkjx6xmk-abubokorprog.vercel.app/chef/${params.id}`
          ),
      },
      {
        path: "/blog",
        element: <Blogs></Blogs>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
