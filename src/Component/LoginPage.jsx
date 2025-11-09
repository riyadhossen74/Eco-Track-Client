import React from 'react';
import { Link } from 'react-router';

const LoginPage = () => {
    return (
         <div className="flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl ">
        <h2 className="font-bold text-2xl text-center pt-5">
          Login your account
        </h2>
        <form
        //  onSubmit={handleLogin} 
        className="card-body">
          <fieldset className="fieldset">
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
            <div>
              <Link to='/forgot' className="link link-hover">Forgot password?</Link>
            </div>
            {/* {error && <p className="text-red-500 text-xs">{error}</p>} */}
            <button className="btn btn-neutral mt-4">Login</button>
          </fieldset>
          <p className="text-center">
            Dont’t Have An Account ?
            <Link className="text-blue-700" to="/register">
              {" "}
              Register
            </Link>{" "}
          </p>
        </form>
      </div>
    </div>
    );
};

export default LoginPage;