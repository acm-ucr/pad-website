import EventDescription from "./EventDescription";
import Title from "../Title";

const EventDescriptions = ({ events }) => {
  return (
    <div className="w-full flex-col flex">
      <Title title="Upcoming Events" />
      <div className="self-center w-9/12">
        {events.length > 0 ? (
          events.map((event, index) => (
            <EventDescription key={index} event={event} index={index} />
          ))
        ) : (
          <p className="font-playfair text-lg w-full text-center font-bold text-pad-purple">
            no events
          </p>
        )}
      </div>
    </div>
  );
};

export default EventDescriptions;
