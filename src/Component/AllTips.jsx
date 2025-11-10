import React, { useEffect, useState } from "react";
import TipsCard from "./TipsCard";

const AllTips = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    // Replace with your API endpoint or local JSON
    fetch("http://localhost:5000/recent-tips")
      .then((res) => res.json())
      .then((data) => setCards(data))
      .catch((err) => console.error(err));
  }, []);
  return (
    <div className="container mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-6">
      {cards.map((tip) => (
        <TipsCard tip={tip}></TipsCard>
      ))}
    </div>
  );
};

export default AllTips;
