import React from "react";

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

const EventDescription = () => {
  return (
    <div className="h-screen w-full">
      {Events.map((event, index) => {
        return (
          <div key={index}>
            <div className="mx-4 translate-x-32 font-playfair w-fit text-pad-black text-3xl font-bold ">
              {event.title}
            </div>
            <div className="flex flex-row h-full w-full ">
              <div className="translate-x-32 h-2.5 w-2.5 rotate-45 bg-pad-purple" />
              <div className="translate-x-32 translate-y-1 h-0.5 w-36 bg-pad-purple" />
            </div>

            <div className="flex px-36 flex-row font-playfair font-bold text-pad-lightpurple text-xl">
              {event.date}
              <div className=" pl-2 pr-4">{event.time}</div>
              {event.location}
            </div>

            <div className=" py-3 font-playfair translate-x-56 text-left text-pad-black text-2xl w-3/4">
              {event.description}
            </div>

            <div
              className={
                "w-40 ml-auto  -translate-x-60 mr-5 font-playfair text-center text-lg  " +
                (event.type == "Social"
                  ? "text-white bg-pad-purple"
                  : event.type == "General Meeting"
                  ? "text-black bg-pad-textshadow"
                  : "bg-pad-lightpurple text-black")
              }
            >
              {event.type}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default EventDescription;
