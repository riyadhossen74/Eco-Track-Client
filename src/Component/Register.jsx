import React from "react";
import { Link } from "react-router";

const Register = () => {
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl  py-5">
        <h2 className="font-bold text-2xl text-center pt-5">
          Register your account
        </h2>
        <form
          // onSubmit={handleSubmit}
          className="card-body"
        >
          <fieldset className="fieldset">
            <label className="label">Name</label>
            <input
              type="text"
              className="input"
              placeholder="Enter your Name"
              name="name"
              required
            />
            {/* {nameError && <p className="text-red-600 text-xs">{nameError}</p>} */}
            <label className="label">Photo URL</label>
            <input
              type="text"
              className="input"
              placeholder="Photo URL"
              name="photo"
              required
            />
            <label className="label">Email</label>
            <input
              type="email"
              className="input"
              placeholder="Email"
              name="email"
              required
            />
            <label className="label">Password</label>
            <input
              type="password"
              className="input"
              placeholder="Password"
              name="password"
              required
            />

            <button className="btn btn-neutral mt-4">Register</button>
          </fieldset>
          <p className="text-center">
            Already Have A Account ?
            <Link className="text-blue-700" to="/login">
              {" "}
              Login
            </Link>{" "}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
