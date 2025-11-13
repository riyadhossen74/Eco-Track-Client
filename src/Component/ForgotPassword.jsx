// import React, { use, useRef } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Link } from "react-router";

const ForgotPassword = () => {
  // const { sendPassResetEmailFunc, setLoading } = use(AuthContext);
  // const emailRef = useRef(null);

  // const handleForgetPassword = () => {
  //
  //   const email = emailRef.current.value;
  //   sendPassResetEmailFunc(email)
  //     .then((res) => {
  //       setLoading(false);
  //       alert("Check your email to reset password");
  //     })
  //     .catch((e) => {
  //       alert(e.message);
  //     });
  // };
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl ">
        <h2 className="font-bold text-2xl text-center pt-5">Forgot Now!</h2>
        <form className="card-body">
          <fieldset className="fieldset">
            <label  className="label">
              Email
            </label>
            <input
              type="email"
              className="input"
              placeholder="Email"
              name="email"
              // ref={emailRef}
              required
            />

            <button
            type="button"
              // onClick={handleForgetPassword}
              className="btn btn-neutral mt-4"
            >
              Forgot
            </button>
          </fieldset>
          <Link to='/login' className="text-center text-sm text-green-300 hover:text-green-700">Back to Login</Link>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
