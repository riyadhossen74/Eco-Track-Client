import React, {  useState } from "react";
import TipsCard from "./TipsCard";
import useAxios from "./useAxios";

const AllTips = () => {
  const [cards, setCards] = useState([]);

  const  axiosInstance = useAxios()

  axiosInstance.get('/recent-tips')
      .then(data =>{
        setCards(data.data)
      })
  return (
    <div className="container mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4  gap-6">
      {cards.map((tip) => (
        <TipsCard tip={tip}></TipsCard>
      ))}
    </div>
  );
};

export default AllTips;
