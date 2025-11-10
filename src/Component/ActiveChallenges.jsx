
import { FcBusinessman } from 'react-icons/fc';
import { IoIosTrendingUp } from 'react-icons/io';

const ActiveChallenges = () => {
     
    return (
       <div className="flex justify-between container mx-auto gap-6">
  <div className="flex flex-col justify-center items-center p-10 w-full space-y-2 shadow-2xl border border-gray-300 rounded-2xl 
                  transition-all duration-300 ease-in-out hover:shadow-3xl hover:scale-105 hover:border-green-500 cursor-pointer">
    <img className="w-[50px]" src="/Eco_track.png" alt="" />
    <span>0</span>
    <p>Active Challenges</p>
  </div>

  <div className="flex flex-col justify-center items-center p-10 w-full space-y-2 shadow-2xl border border-gray-300 rounded-2xl
                  transition-all duration-300 ease-in-out hover:shadow-3xl hover:scale-105 hover:border-green-500 cursor-pointer">
    <FcBusinessman size={50} />
    <span>0</span>
    <p>Total Participants</p>
  </div>

  <div className="flex flex-col justify-center items-center p-10 w-full space-y-2 shadow-2xl border border-gray-300 rounded-2xl
                  transition-all duration-300 ease-in-out hover:shadow-3xl hover:scale-105 hover:border-green-500 cursor-pointer">
    <IoIosTrendingUp size={50} />
    <span>0</span>
    <p>CO<sub>2</sub> Save</p>
  </div>
</div>


    );
};

export default ActiveChallenges;