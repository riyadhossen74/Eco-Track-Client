import React, { useEffect, useState } from "react";
import { FcBusinessman } from "react-icons/fc";
import TipsCard from "./TipsCard";
import { Link } from "react-router";


const RecentTips = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    // Replace with your API endpoint or local JSON
    fetch("http://localhost:5000/recent-tips")
      .then((res) => res.json())
      .then((data) => setCards(data))
      .catch((err) => console.error(err));
  }, []);
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
