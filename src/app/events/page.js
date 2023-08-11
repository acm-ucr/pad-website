import React from "react";
import events from "../../../public/events.png";
import Header from "@/components/Header";
import EventDescription from "@/components/EventDescription";

const join = () => {
  return (
    <div>
      <Header title="Events" src={events} />
      <EventDescription />
    </div>
  );
};

export default join;
