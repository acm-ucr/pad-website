import EventDescription from "./EventDescription";
import Title from "../Title";

const EventDescriptions = ({ events }) => {
  return (
    <div className="w-full flex-col flex">
      <Title title="Upcoming Events" />
      <div className="self-center w-9/12">
        {events.map((event, index) => {
          return <EventDescription key={index} event={event} />;
        })}
      </div>
    </div>
  );
};

export default EventDescriptions;
