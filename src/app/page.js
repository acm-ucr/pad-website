import Landing from "@/components/Landing";
import AboutSection from "@/components/AboutSection";
import CourValuesSection from "@/components/CourValuesSection";
import DeclarationOfPurpose from "@/components/DeclarationOfPurpose";
import events from "../../public/events.png";
import Header from "@/components/Header";

const Home = () => {
  return (
    <div className="w-screen flex flex-col min-h-screen overflow-hidden">
      <Header title="Events" src={events} />
      <Landing />
      <AboutSection />
      <CourValuesSection />
      <DeclarationOfPurpose />
    </div>
  );
};

export default Home;
