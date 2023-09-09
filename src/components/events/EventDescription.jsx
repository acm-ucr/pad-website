const EventDescription = ({ event }) => {
  return (
    <div className="w-full flex-col flex my-5">
      <div className="md:-translate-x-5 font-playfair text-pad-black text-xl md:text-2xl font-bold self-start">
        {event.summary}
      </div>
      <div className="flex flex-row w-full -translate-x-2 md:-translate-x-10">
        <div className="h-2.5 w-2.5 rotate-45 bg-pad-purple" />
        <div className="translate-y-1 h-0.5 w-36 bg-pad-purple" />
      </div>

      <div className="flex flex-row font-playfair text-pad-lightpurple text-base">
        <p className="m-0">{event.start.toLocaleDateString()}</p>
        <p className="m-0 pl-2 pr-3">
          {event.start.toLocaleTimeString().split(":")[0]}&nbsp;to&nbsp;
          {event.end.toLocaleTimeString().split(":")[0]}&nbsp;
          {event.end.toLocaleTimeString().split(":")[2].split(" ")[1]}
        </p>
        <p className="m-0 font-bold">{event.location}</p>
      </div>

      <div className="py-3 font-playfair text-left text-pad-black text-sm md:text-lg w-full">
        {event.description}
      </div>

      <div
        className={
          "w-40 font-playfair text-center text-sm md:text-lg self-end " +
          (event.description?.startsWith("Social")
            ? "text-white bg-pad-purple"
            : event.description.startsWith("General Meeting")
            ? "text-black bg-pad-textshadow"
            : "bg-pad-lightpurple text-black")
        }
      >
        {event.description.split(":")[0]}
      </div>
    </div>
  );
};

export default EventDescription;
