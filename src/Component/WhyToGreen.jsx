import React from "react";
import { GiSelfLove } from "react-icons/gi";
import { IoIosTrendingUp } from "react-icons/io";

const WhyToGreen = () => {
  return (
    <>
     <h2 className="text-center text-4xl my-15 text-black">Why To Green</h2> 
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between max-w-6xl mx-auto  my-10">
       
      <div className="flex flex-col space-y-2 py-3 items-center justify-center  p-2 w-[300px] text-center bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl my-5">
        <img className="w-[50px] r" src="/Eco_track.png" alt="" />
        <h2 className="text-2xl">save Energy</h2>
        <p>Reduce your carbon footprint and contribute to a healthier planet</p>
      </div>
      <div className="flex flex-col space-y-2 py-3 items-center justify-center  p-2 w-[300px] text-center bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl my-5">
        <IoIosTrendingUp size={50} />
        <h2 className="text-2xl">Reduce Waste</h2>
        <p>RMake mindful choices that minimize environmental impact</p>
      </div>
      <div className="flex flex-col space-y-2 py-3 items-center justify-center  p-2 w-[300px] text-center bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl my-5">
        <GiSelfLove size={50} />
        <h2 className="text-2xl">Improve Health</h2>
        <p>Create a cleaner environment for you and future generations</p>
      </div>
    </div>
    </>
  );
};

export default WhyToGreen;
