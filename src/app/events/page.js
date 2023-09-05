import events from "../../../public/events.png";
import Header from "@/components/Header";
import EventDescriptions from "@/components/events/EventDescriptions";
import CalendarEvent from "@/components/events/Calendar";
const EvnetsPage = () => {
  return (
    <div className="w-10/12">
      <Header title="Events" src={events} />
      <EventDescriptions />
      <CalendarEvent />
    </div>
  );
};

export default EvnetsPage;
