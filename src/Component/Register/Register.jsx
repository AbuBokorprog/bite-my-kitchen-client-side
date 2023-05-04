import React, { useContext, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Register = () => {
  const { user, createUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  //console.log(createUser);
  const submitRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const displayName = form.displayName;
    const Photo = form.image.value;
    createUser(email, password, displayName, Photo)
      .then((loggedUser) => {
        const user = loggedUser.user;
        console.log(user);
        setSuccess("successfully registered");
        setError();
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
        setSuccess();
      });
  };

  return (
    <div className="container px-20">
      <div className="hero min-h-screen my-20 rounded-xl py-10 bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center">
            <h1 className="text-5xl font-bold">Register!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={submitRegister} className="card-body">
              <p className="text-center text-error">
                <small>{error}</small>
              </p>
              <p className="text-center text-success">
                <small>{success}</small>
              </p>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
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
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input
                  type="file"
                  name="image"
                  placeholder="image"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
            <div className="text-center my-5">
              <p>Already Created Account</p>
              <div className="flex justify-center items-center gap-3">
                <Link to="/login">Login</Link>
                <FaArrowLeft className="text-blue-500"></FaArrowLeft>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
