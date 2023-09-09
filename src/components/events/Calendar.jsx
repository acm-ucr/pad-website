"use client";
import { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import CustomToolbar from "./CustomToolbar.jsx";
import CustomEvent from "./CustomEvents.jsx";
import Modal from "./Modal.jsx";

const localizer = momentLocalizer(moment);

const CalendarEvent = ({ events }) => {
  const [event, setevent] = useState(null);

  return (
    <section className="w-full flex justify-center items-center flex-col mt-[2vh] text-xl">
      <div className="w-10/12 flex justify-center items-center text-xl">
        <div className="h-[110vh] w-full relative text-xl mb-24">
          <Calendar
            className="font-playfair w-full m-0 p-0 text-2xl"
            events={events}
            localizer={localizer}
            defaultView="month"
            views={["month"]}
            components={{
              event: CustomEvent,
              toolbar: CustomToolbar,
            }}
            eventPropGetter={() => {
              return {
                className: `p-0 !active:ring-0 !focus:outline-0 !bg-transparent`,
              };
            }}
            onSelectEvent={(event) => setevent(event)}
            dayPropGetter={(event) => {
              return {
                className: `${
                  new Date(event).toLocaleDateString() ==
                  new Date().toLocaleDateString()
                    ? "!bg-opacity-40 !bg-pad-textshadow"
                    : "!bg-transparent"
                }`,
                style: {
                  margin: 0,
                  padding: 0,
                },
              };
            }}
          />
        </div>
        {event && <Modal event={event} setEvent={setEvent} />}
      </div>
    </section>
  );
};

export default CalendarEvent;
