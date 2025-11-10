import React from 'react';

import { useLoaderData } from 'react-router';
import Card from './Card';

const AllChallenges = () => {
    const challenges = useLoaderData()
    return (
         <div className="container mx-auto px-4 py-12">
     

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {challenges.map((data) => (
         <Card data={data}></Card>
        ))}
       
      </div>
        
    </div>
    );
};

export default AllChallenges;