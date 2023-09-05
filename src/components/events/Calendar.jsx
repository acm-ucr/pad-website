"use client";
import React, { useEffect, useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import CustomToolbar from "./CustomToolbar.jsx";
import CustomEvent from "./CustomEvents.jsx";
import axios from "axios";
import Modal from "./Modal.jsx";

const localizer = momentLocalizer(moment);

const CalendarEvent = () => {
  const [events, setEvents] = useState([]);
  const [modalEvent, setModalEvent] = useState(null);
  console.log(events);
  useEffect(() => {
    axios
      .get(
        `https://www.googleapis.com/calendar/v3/calendars/${process.env.NEXT_PUBLIC_CALENDAR_ID}/events?key=${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY}&singleEvents=true&orderBy=starttime`
      )
      .then((result) => {
        setEvents(
          result.data.items.map((event) => ({
            ...event,
            start: new Date(event.start.dateTime),
            end: new Date(event.end.dateTime),
            color: event.description?.startsWith("General Meeting")
              ? "bg-pad-textshadow text-black"
              : event.description?.startsWith("Social")
              ? "bg-pad-purple text-white"
              : "bg-pad-lightpurple text-black",
          }))
        );
      });
  }, []);

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
            onSelectEvent={(event) => {
              setModalEvent(event);
            }}
            dayPropGetter={(event) => {
              const bg =
                new Date(event).toLocaleDateString() ==
                new Date().toLocaleDateString()
                  ? "!bg-opacity-40 !bg-pad-textshadow"
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
        <Modal event={modalEvent} setState={setModalEvent} />
      </div>
    </section>
  );
};

export default CalendarEvent;
