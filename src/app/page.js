import Landing from "@/components/Landing";
import AboutSection from "@/components/AboutSection";
import CourValuesSection from "@/components/CourValuesSection";
import DeclarationOfPurpose from "@/components/DeclarationOfPurpose";
import CoreValueTitle from "@/components/CoreValueTitle";
const Home = () => {
  return (
    <div className="w-screen flex flex-col min-h-screen overflow-hidden">
      <Landing />
      <AboutSection />
      <CourValuesSection />
      <DeclarationOfPurpose />
      <CoreValueTitle />
    </div>
  );
};

export default Home;
