import React, { useState } from 'react';
import EventCard from './EventCard';
import { Link } from 'react-router';
import useAxios from './useAxios';

const UpComingEvent = () => {
  const axiosInstance = useAxios()
    const [event, setEvent] = useState([]);
    const data = event.slice(0, 4)
    
      axiosInstance.get('/event')
      .then(data =>{
        setEvent(data.data)
      })
    return (
       <div>
        <h2 className="text-3xl font-bold text-center mb-10">Recent Event</h2>
        <div className="p-4 container mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          
  {data.map((event, ) => (
    <EventCard key={event._id } event={event} />
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