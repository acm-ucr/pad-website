import React from "react";
import EventDescription from "./EventDescription";
import Title from "./Title";

const Events = [
  {
    title: "Event Name",
    description:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare. Hendrerit parturient habitant pharetra rutrum gravida porttitor eros feugiat. Mollis elit sodales taciti duis praesent id. Consequat urna vitae morbi nunc congue.",
    location: "Room 123",
    type: "General Meeting",
    time: "12:00 pm - 2:00 pm",
    date: "3.23.2023",
  },
  {
    title: "Event Name",
    description:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare. Hendrerit parturient habitant pharetra rutrum gravida porttitor eros feugiat. Mollis elit sodales taciti duis praesent id. Consequat urna vitae morbi nunc congue.",
    location: "Room 123",
    type: "Social",
    time: "12:00 pm - 2:00 pm",
    date: "3.23.2023",
  },
  {
    title: "Event Name",
    description:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare. Hendrerit parturient habitant pharetra rutrum gravida porttitor eros feugiat. Mollis elit sodales taciti duis praesent id. Consequat urna vitae morbi nunc congue.",
    location: "Room 123",
    type: "Other Meeting",
    time: "12:00 pm - 2:00 pm",
    date: "3.23.2023",
  },
  {
    title: "Event Name",
    description:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare. Hendrerit parturient habitant pharetra rutrum gravida porttitor eros feugiat. Mollis elit sodales taciti duis praesent id. Consequat urna vitae morbi nunc congue.",
    location: "Room 123",
    type: "Social",
    time: "12:00 pm - 2:00 pm",
    date: "3.23.2023",
  },
];

const EventDescriptions = () => {
  return (
    <div className="w-full flex-col flex">
      <Title title="Upcoming Events" />
      <div className="self-center w-9/12">
        {Events.map((event, index) => {
          return <EventDescription key={index} event={event} />;
        })}
      </div>
    </div>
  );
};

export default EventDescriptions;
