import React, {  useState } from "react";
import { FcBusinessman } from "react-icons/fc";
import TipsCard from "./TipsCard";
import { Link } from "react-router";
import useAxios from "./useAxios";


const RecentTips = () => {
  const [cards, setCards] = useState([]);
const  axiosInstance = useAxios()

  axiosInstance.get('/recent-tips')
      .then(data =>{
        setCards(data.data)
      })
  const data = cards.slice(0, 4);
  return (
   <div>
      <h2 className="text-3xl font-bold text-center mb-10">Recent Tips</h2>

      <div className="container mx-auto p-6 grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-6">
        {data.map((tip) => (
          <TipsCard key={tip._id} tip={tip} />
        ))}
      </div>

      {/* All Tips button */}
       <div
              tabindex="0"
              role="button"
              className="user-profile  container mx-auto my-5"
            >
              <Link to="/tips" class="user-profile-inner">
                <p>All Tips</p>
              </Link>
              <div></div>
            </div>
    </div>
    
  );
};

export default RecentTips;
