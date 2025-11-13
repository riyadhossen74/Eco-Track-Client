import React from 'react';
import { Link } from 'react-router';

const Card = ({data}) => {
    return (
       <div
  key={data._id}
  className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
>
 
  <div className="relative">
    <img
      src={data.imageUrl}
      alt={data.title}
      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
    />

    {/* gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
  </div>

  <div className="p-6 relative z-10 ">
    <h3 className="text-xl font-semibold group-hover:text-blue-600 transition-colors duration-200">
      {data.title}
    </h3>
    <p className="text-sm text-gray-500 mt-1">{data.category}</p>

    <p className="mt-3 text-gray-700 text-sm line-clamp-3">
      {data.description}
    </p>

    <div className="mt-4 space-y-1">
      <p className="text-sm">
        <span className="font-bold">Duration:</span> {data.duration} days
      </p>
      <p className="text-sm">
        <span className="font-bold">Impact:</span> {data.impactMetric}
      </p>
    </div>

    {/* Buttons */}
    <div className="flex gap-3 mt-6">
      

      <Link to={`/challenges/${data._id}`} className="flex-1 px-4 py-2 rounded-md border border-gray-300 text-center text-gray-800 hover:bg-green-400 transition">
        Details
      </Link>
    </div>
  </div>
</div>

    );
};

export default Card;