import React from "react";

const HowItIsWork = () => {
  return (
    <>
      <h2 className="text-center text-4xl mt-15 text-black">How It IS Work</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 justify-between max-w-6xl mx-auto  mt-10 shadow-2xl p-10 ">
        <div className="flex flex-col space-y-2 py-3 items-center justify-center  p-2 md:w-[335px] text-center border hover:border-green-700 hover:rounded-md my-5">
          <p className="bg-green-700 rounded-full py-5 px-7 text-white">1</p>
          <h2 className="text-2xl">Find a Challenge</h2>
          <p>
            Browse and select a sustainability challenge that resonates with you
          </p>
        </div>
        <div className="flex flex-col space-y-2 py-3 items-center justify-center  p-2 md:w-[335px] text-center border hover:border-green-700 hover:rounded-md my-5">
          <p className="bg-green-700 rounded-full py-5 px-7 text-white">2</p>
          <h2 className="text-2xl">Join & Track</h2>
          <p>Sign up for the challenge and log your progress throughout</p>
        </div>
        <div className="flex flex-col space-y-2 py-3 items-center justify-center  p-2 md:w-[335px] text-center border hover:border-green-700 hover:rounded-md my-5">
          <p className="bg-green-700 rounded-full py-5 px-7 text-white">3</p>
          <h2 className="text-2xl">Share Achievements</h2>
          <p>
            Update your status and celebrate the collective community impact
          </p>
        </div>
      </div>
    </>
  );
};

export default HowItIsWork;
