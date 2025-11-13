import React, {  useState } from 'react';
import EventCard from './EventCard';

import useAxios from './useAxios';

const AllEvent = () => {
    const [event, setEvent] = useState([]);
    const axiosInstance = useAxios()
  
      axiosInstance.get('/event')
      .then(data =>{
        setEvent(data.data)
      })
        
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