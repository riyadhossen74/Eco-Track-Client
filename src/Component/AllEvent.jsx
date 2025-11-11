import React, { useEffect, useState } from 'react';
import EventCard from './EventCard';
import { Link } from 'react-router';

const AllEvent = () => {
    const [event, setEvent] = useState([]);
    console.log('all event', event)
      
        
          useEffect(() => {
            // Replace with your API endpoint or local JSON
            fetch("http://localhost:5000/event")
              .then((res) => res.json())
              .then((data) => setEvent(data))
              .catch((err) => console.error(err));
          }, []);
    return (
         <div>
        <div className="p-4 container mx-auto grid md:grid-cols-3 gap-5">
  {event.map((event, ) => (
    <EventCard key={event._id } event={event} />
  ))}

  </div>
  

       </div>
    );
};

export default AllEvent;