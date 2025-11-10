import React from 'react';

const EventCard = ({event}) => {
    return (
        <div
          key={event._id}
          className="border p-4 rounded shadow hover:shadow-lg transition"
        >
          <h2 className="text-xl font-bold">{event.title}</h2>
          <p className="text-gray-600">{event.description}</p>
          <p>
            <strong>Date:</strong>{" "}
            {new Date(event.date).toLocaleString("en-US", {
              dateStyle: "medium",
              timeStyle: "short",
            })}
          </p>
          <p>
            <strong>Location:</strong> {event.location}
          </p>
          <p>
            <strong>Organizer:</strong> {event.organizer}
          </p>
          <p>
            <strong>Participants:</strong> {event.currentParticipants}/
            {event.maxParticipants}
          </p>
        </div>
    );
};

export default EventCard;