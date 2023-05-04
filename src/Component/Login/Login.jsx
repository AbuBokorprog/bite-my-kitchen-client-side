import React, { useContext, useState } from "react";
import { FaGoogle, FaGithub, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Login = () => {
  const { user, loginUser, googleSignIn, githubSignIn } =
    useContext(AuthContext);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  //console.log(createUser);
  const submitLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    loginUser(email, password)
      .then((loggedUser) => {
        const user = loggedUser.user;
        console.log(user);
        setSuccess("successfully logged in");
        setError();
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
        setSuccess();
      });
  };

  const GoogleLoggedIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const githubLoggedIn = () => {
    githubSignIn()
      .then((result) => {
        const user = result.user;
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="container px-20">
      <div className="hero min-h-screen my-20 rounded-xl py-10 bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={submitLogin} className="card-body">
              <p className="text-center text-error">
                <small>{error}</small>
              </p>
              <p className="text-center text-success">
                <small>{success}</small>
              </p>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <div className="mb-3">
              <p className="text-center mb-2">
                <small>or sign up using</small>
              </p>
              <div className="flex justify-center gap-4">
                <button onClick={GoogleLoggedIn} className="rounded-2xl">
                  <FaGoogle className="text-2xl text-blue-500"></FaGoogle>
                </button>
                <button onClick={githubLoggedIn} className="rounded-2xl">
                  <FaGithub className="text-2xl"></FaGithub>
                </button>
              </div>
            </div>
            <div className="text-center my-5">
              <p>Create Account</p>
              <div className="flex justify-center items-center gap-3">
                <Link to="/register">Register</Link>
                <FaArrowRight className="text-blue-500"></FaArrowRight>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
