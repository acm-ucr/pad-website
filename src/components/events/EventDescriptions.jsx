import EventDescription from "./EventDescription";
import Title from "../Title";

const EventDescriptions = ({ events }) => {
  return (
    <div className="w-full flex-col flex">
      <Title title="Upcoming Events" />
      <div className="self-center w-9/12">
        {events.map((event, index) => (
          <EventDescription key={index} event={event} index={index} />
        ))}
      </div>
    </div>
  );
};

export default EventDescriptions;
