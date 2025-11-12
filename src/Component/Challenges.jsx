import React from "react";
import { Link } from "react-router";
import Card from "./Card";

const Challenges = ({ firstThree }) => {
  return (
    
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-10">
        {" "}
        Active Challenges
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {firstThree.map((data) => (
          <Card data={data}></Card>
        ))}
      </div>
      <div
        tabindex="0"
        role="button"
        className="user-profile  container mx-auto my-5"
      >
        <Link to="/challenges" class="user-profile-inner">
          <p>All Challenges</p>
        </Link>
        <div></div>
      </div>
    </div>
  );
};

export default Challenges;
