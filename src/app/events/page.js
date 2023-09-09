"use client";
import Header from "@/components/Header";
import EventDescriptions from "@/components/events/EventDescriptions";
import CalendarEvent from "@/components/events/Calendar";
import { useState, useEffect } from "react";
import axios from "axios";
import event from "../../../public/headers/events.png";

const EvnetsPage = () => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://www.googleapis.com/calendar/v3/calendars/${process.env.NEXT_PUBLIC_CALENDAR_ID}/events?key=${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY}&singleEvents=true&orderBy=starttime`
      )
      .then((result) =>
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
        )
      );
  }, []);
  return (
    <>
      <Header title="Events" src={event} />
      <div className="w-10/12">
        <CalendarEvent events={events} />
        <EventDescriptions events={events} />
      </div>
    </>
  );
};

export default EvnetsPage;
