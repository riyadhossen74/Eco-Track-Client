import React, { use, useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const [showPassword, setShowPassword] =useState(false)
  const { createUser, setUser, updateUser, googleSignIn, setLoading } = use(AuthContext);
  const [nameError, setNameError] = useState("");
 const navigate = useNavigate(); 
  const location = useLocation();
  const handleSubmit = (e) => {
  e.preventDefault();

  const form = e.target;
  const name = form.name.value;
  const photo = form.photo.value;
  const email = form.email.value;
  const password = form.password.value;

  // Name Validation
  if (name.length < 4) {
    setNameError("Name should be at least 4 characters");
    return;   
  } else {
    setNameError("");
  }

  // Create Account
  createUser(email, password)
    .then((result) => {
      const user = result.user;

      // Update Profile
       updateUser({
        displayName: name,
        photoURL: photo,
      }).then(() => {
        setUser({ ...user, displayName: name, photoURL: photo });
        
        // ✅ Navigate safely (React Router v6+)
        navigate(location.state?.from || "/");
      });
    })
    .catch((error) => {
      console.error(error.code, error.message);
      alert(error.code);
    });
};


  const handleSignIn = () => {
  googleSignIn()
    .then((res) => {
      setUser(res.user);
      navigate(location.state?.from || "/");
      setLoading(false);
      alert.success("Sign in successful!");
    })
    .catch((error) => {
      console.error("Google sign-in error:", error.code);
    });
};



  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl  py-5">
        <h2 className="font-bold text-2xl text-center pt-5">
          Register your account
        </h2>
        <form onSubmit={handleSubmit} className="card-body">
          <fieldset className="fieldset">
            <label className="label">Name</label>
            <input
              type="text"
              className="input"
              placeholder="Enter your Name"
              name="name"
              required
            />
            {nameError && <p className="text-red-600 text-xs">{nameError}</p>}
            <label className="label">Photo URL</label>
            <input
              type="text"
              className="input"
              placeholder="Photo URL"
              name="photo"
              required
            />
            <label className="label">Email</label>
             <div className="relative">
                                     <label className="label">Password</label>
                                     <input
                                       type={showPassword? 'text':'password'}
                                       className="input"
                                       placeholder="Password"
                                       name="password"
                                       required
                                     />
                                     <button onClick={() => setShowPassword(!showPassword)} className="absolute bottom-3 right-6">{showPassword? <FaEye />:<FaEyeSlash />}</button>
                                   </div>
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
          
          {/* Google */}
          <button type="button" onClick={handleSignIn} className="btn bg-white text-black border-[#e5e5e5]">
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                ></path>
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                ></path>
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                ></path>
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                ></path>
              </g>
            </svg>
            Login with Google
          </button>
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
