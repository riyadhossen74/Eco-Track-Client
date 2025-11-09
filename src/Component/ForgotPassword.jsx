import React from 'react';

const ForgotPassword = () => {
    return (
       <div className="flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl ">
        <h2 className="font-bold text-2xl text-center pt-5">
          Forgot Now!
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
            
            
            {/* {error && <p className="text-red-500 text-xs">{error}</p>} */}
            <button className="btn btn-neutral mt-4">Forgot</button>
          </fieldset>
         
        </form>
      </div>
    </div>
    );
};

export default ForgotPassword;