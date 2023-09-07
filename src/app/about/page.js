import Title from "@/components/Title";
import CoreValueCards from "@/components/about/CoreValueCards";
import about from "../../../public/headers/about.png";
import Header from "@/components/Header";
import Picture from "@/components/about/Picture";
import PAD3 from "../../../public/images/PAD3.png";
import PAD4 from "../../../public/images/PAD4.png";
import PictureCarousel from "@/components/about/PictureCarousel";
import landing from "../../../public/headers/landing.png";

const AboutPage = () => {
  return (
    <>
      <Header title="About Us" src={about} />
      <CoreValueCards />
      <div className="w-10/12 flex flex-col items-center my-12">
        <Title title="Who We Are" />
        <p className="textsm md:text-lg w-11/12 md:w-9/12 font-playfair my-2 md:my-5">
          Phi Alpha Delta is the only Pre Law Fraternity at the University of
          California, Riverside. The purpose of this organization is to provide
          an effective and cohesive forum to promote principles for professional
          advancement of its members; stress the principles of liberty and equal
          justice under law for all citizens; stimulate excellence in
          scholarship; provide forum for the interchange between members of this
          chapter and the other members of Phi Alpha Delta to develop a strong
          understanding of professional fraternalism among its members.
        </p>
        <Picture picture={PAD3} />
        <Title title="Our Mission" />
        <p className="textsm md:text-lg w-11/12 md:w-9/12 font-playfair my-2 md:my-5">
          Our main events strive to promote the ideals of brotherhood in
          addition to professional advancements. We host an annual Lawyer
          Banquet in the Fall, which allows new and active members exposure to
          speak and network with lawyers. In Winter, we have winter retreat (a
          small trip we take to bond with one another)! Then, we have Spring
          formals and Alumni Networking in the Spring! These main events are
          hosted in conjunction to smaller events that help to provide students
          with career opportunities and professional development. The difference
          between Phi Alpha Delta and other pre-law organizations is our
          preeminent role in creating strong networks and relationships; we have
          a mentor mentee program, similar to a big/little program that
          establishes lifelong relationships with other students who are
          entering the legal profession as well. This dynamic may help to
          provide employment and internship opportunities, in addition to advice
          in every aspect. Many mentor mentee relationships help towards
          assimilating into university life and into the legal community in
          terms of law school or gap year opportunities. With this in mind, Phi
          Alpha Delta is the perfect place to begin learning about law! By
          providing members with events and resources, as well as individual
          experiences, Phi Alpha Delta is a diversified organization that
          provides opportunities in every aspect!
        </p>
        <Picture picture={PAD4} />
        <Title title="Activities and Socials" />
        <div className="w-full md:w-2/3">
          <PictureCarousel />
        </div>
        <Title title="DECLARATION OF PURPOSE" />
        <p className="text-sm md:text-lg font-playfair my-2 md:my-5 w-11/12 md:w-9/12">
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
    </>
  );
};

export default AboutPage;
