
import React from 'react';
import { Link } from 'react-router';

const Error = () => {
    return (
         <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-indigo-200 px-4">
      <div className="text-center">
        <h1 className="text-6xl font-extrabold text-red-500 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
          Oops! Page not found
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          The page you are looking for doesn’t exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-block bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-6 rounded-lg shadow-md transition-colors duration-300"
        >
          Go Home
        </Link>
      </div>
    </div>
    );
};

export default Error;