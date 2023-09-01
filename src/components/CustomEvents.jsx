import React from "react";

const CustomEvent = ({ event }) => {
  return (
    <div className={`font-playfair p-1 ${event.color} text-sm`}>
      <p className="inline whitespace-nowrap">
        &nbsp; &nbsp; &nbsp; &nbsp;
        {new Date(event.start).toLocaleTimeString(navigator.language, {
          hour: "2-digit",
          minute: "2-digit",
        })}
        &nbsp;
        {event.summary}
      </p>
    </div>
  );
};

export default CustomEvent;
