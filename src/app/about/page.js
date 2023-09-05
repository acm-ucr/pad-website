import Title from "@/components/Title";
import CoreValueCards from "@/components/about/CoreValueCards";
import about from "../../../public/about.png";
import Header from "@/components/Header";
import Picture from "@/components/about/Picture";
import PAD3 from "../../../public/PAD3.png";
import PAD4 from "../../../public/PAD4.png";
import PictureCarousel from "@/components/about/PictureCarousel";
import landing from "../../../public/landing.png";

const AboutPage = () => {
  return (
    <div className="flex flex-col items-center overflow-hidden">
      <Header title="About Us" src={about} />
      <CoreValueCards />
      <div className="w-10/12 flex flex-col items-center my-12">
        <Title title="Who We Are" />
        <p className="textsm md:text-lg w-9/12 font-playfair my-2 md:my-5">
          We are the preeminent law fraternity promoting the bonds of
          fraternalism and we are the leader in the devolopment advancement of
          professional ideals.
        </p>
        <Picture picture={PAD3} />

        <Title title="Our Mission" />
        <p className="textsm md:text-lg w-9/12 font-playfair my-2 md:my-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt Lorem ipsum dolor
          sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt
        </p>
        <Picture picture={PAD4} />
        <Title title="Activities and Socials" />
        <div className="w-full md:w-2/3">
          <PictureCarousel />
        </div>
        <Title title="DECLARATION OF PURPOSE" />
        <p className="textsm md:text-lg font-playfair my-2 md:my-5 ">
          The purpose of this Fraternity shall be to form a strong bond uniting
          students and teachers of the lawwith members of the Bench and Bar in a
          fraternal fellowship designed to advance the ideals of liberty and
          equal justice under the law; to stimulate excellence in scholarship;
          to inspire the virtues of compassion and courage; to foster integrity
          and professional competence; to promote the welfare of its members;
          and to encourage their moral, intellectual, and cultural advancement;
          so that each member may enjoy a<br /> life time of honorable
          professional and public service.
        </p>
        <Picture picture={landing} />
      </div>
    </div>
  );
};

export default AboutPage;
