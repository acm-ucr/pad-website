import React from "react";
import events from "../../../public/events.png";
import Header from "@/components/Header";
import EventDescriptions from "@/components/EventDescriptions";

const EvnetsPage = () => {
  return (
    <div>
      <Header title="Events" src={events} />
      <EventDescriptions />
    </div>
  );
};

export default EvnetsPage;
