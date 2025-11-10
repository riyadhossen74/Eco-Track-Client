import React, { useEffect, useState } from 'react';
import EventCard from './EventCard';
import { Link } from 'react-router';

const UpComingEvent = () => {
    const [event, setEvent] = useState([]);
    const data = event.slice(0, 3)
    
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
  {data.map((event, index) => (
    <EventCard key={event._id || index} event={event} />
  ))}

  </div>
  {/* All event button */}
        <div
               tabindex="0"
               role="button"
               className="user-profile  container mx-auto my-5"
             >
               <Link to="/all-event" class="user-profile-inner">
                 <p>All Event</p>
               </Link>
               <div></div>
             </div>

       </div>
    );
};

export default UpComingEvent;