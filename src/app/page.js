import Landing from "@/components/home/Landing";
import AboutSection from "@/components/home/AboutSection";
import CourValuesSection from "@/components/home/CourValuesSection";
import DeclarationOfPurpose from "@/components/home/DeclarationOfPurpose";

const Home = () => {
  return (
    <div className="w-full flex flex-col min-h-screen overflow-hidden">
      <Landing />
      <AboutSection />
      <CourValuesSection />
      <DeclarationOfPurpose />
    </div>
  );
};

export default Home;
