import React from 'react';
import { FcBusinessman } from 'react-icons/fc';

const TipsCard = ({tip}) => {
    return (
        <div
          key={tip._id}
          className="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
        >
          <div className="flex justify-center items-center h-48 bg-gray-100">
            <FcBusinessman size={60} />
          </div>

          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-900">{tip.title}</h3>
            <p className="text-sm text-gray-500 mt-1">{tip.category}</p>
            <p className="mt-3 text-gray-700 text-sm">{tip.content}</p>

            <div className="mt-4 space-y-1">
              <p className="text-sm">
                <span className="font-bold">Author:</span> {tip.authorName}
              </p>
              <p className="text-sm">
                <span className="font-bold">Upvotes:</span> {tip.upvotes}
              </p>
              <p className="text-sm text-gray-400">
                {new Date(tip.createdAt).toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
    );
};

export default TipsCard;