import React, { useState } from "react";

import { Link, useLoaderData } from "react-router";
import Card from "./Card";

const AllChallenges = () => {
  const challenges = useLoaderData(); 
  const [selectedCategory, setSelectedCategory] = useState("");

  
  const filteredChallenges = selectedCategory
    ? challenges.filter((item) => item.category === selectedCategory)
    : challenges;
  return (
    <>
    <title>All Challenges</title>
      <div className="grid md:grid-cols-5 gap-3  my-5 container mx-auto md:sticky md:top-19 z-50  shadow-lg">
        <input
          type="text"
          className="input col-span-3 w-full hidden md:block  bg-transparent"
          placeholder="Search"
        />
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="grid grid-cols-3 gap-2 border hover:border-blue-500 rounded-md"
        >
          <option value="">All Category</option>
          {[...new Set(challenges.map((item) => item.category))].map(
            (category) => (
              <option key={category} value={category}>
                {category}
              </option>
            )
          )}
        </select>
        <Link
          to="/create-challenges"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg shadow-sm text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-300 "
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 4v16m8-8H4"
            ></path>
          </svg>
          create Challenges
        </Link>
      </div>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredChallenges.map((data) => (
            <Card data={data}></Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default AllChallenges;
