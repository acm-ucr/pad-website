import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import CustomToolbar from "./CustomToolbar.jsx";
import CustomEvent from "./CustomEvents.jsx";
import { useContext } from "react";
import EventsContext from "./EventsContext.jsx";

const localizer = momentLocalizer(moment);

const CalendarEvent = () => {
  const events = useContext(EventsContext);

  return (
    <section className="w-full flex justify-center items-center flex-col mt-[2vh] text-xl">
      <div className="w-10/12 flex justify-center items-center text-xl">
        <div className="h-[110vh] w-full relative text-xl mb-24">
          <Calendar
            className={`font-playfair w-full m-0 p-0 text-2xl  `}
            showAllEvents={true}
            events={events}
            localizer={localizer}
            defaultView="month"
            views={["month"]}
            components={{
              event: CustomEvent,
              toolbar: CustomToolbar,
            }}
            eventPropGetter={(event) => {
              return {
                className: `!${event.color} p-0 !active:ring-0 !focus:outline-0 !bg-pad-purple !text-lg !rounded-none !mt-1 `,
              };
            }}
            dayPropGetter={(event) => {
              const bg =
                new Date(event).toLocaleDateString() ==
                new Date().toLocaleDateString()
                  ? "!bg-opacity-90 !bg-pad-lightpurple"
                  : "!bg-transparent";
              return {
                className: `${bg}`,
                style: {
                  margin: 0,
                  padding: 0,
                },
              };
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default CalendarEvent;
