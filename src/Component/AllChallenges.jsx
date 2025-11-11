import React from "react";

import { Link, useLoaderData } from "react-router";
import Card from "./Card";

const AllChallenges = () => {
  const challenges = useLoaderData();
  return (
    <>
      <div className="grid grid-cols-5 gap-3  my-5 container mx-auto">
        <input
          type="text"
          className="input col-span-3 w-full "
          placeholder="Search"
        />
        <select className="grid grid-cols-3 gap-2 border hover:border-blue-500 rounded-md">
          <option value="">Select Category</option>
          <option value="Energy">Energy Conservation</option>
          <option value="Water">Water Conservation</option>
          <option value="Transport">Sustainable Transport</option>
        </select>
        <Link to='/create-challenges'
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg shadow-sm text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-300 "
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
            </svg>
            create Challenges
          </Link>
      </div>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {challenges.map((data) => (
            <Card data={data}></Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default AllChallenges;
