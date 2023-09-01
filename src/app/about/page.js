"use client";
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
    <div className="w-full flex flex-col items-center">
      <Header title="About" src={about} />
      <CoreValueCards />
      <Title title="Who We Are" />
      <p className=" font-playfair text-4xl w-fit h-60 mt-5">
        We are the preeminent law fraternity promoting the bonds of fraternalism
        and
        <br /> we are the leader in the devolopment advancement of professional
        ideals.
      </p>
      <Picture picture={PAD3} />
      <span className="mt-44" />
      <Title title="Our Mission" />
      <p className=" font-playfair text-4xl w-fit h-60 mt-5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt
      </p>
      <Picture picture={PAD4} />
      <span className="mt-44" />
      <Title title="Activities and Socials" />
      <span className="mt-44" />
      <PictureCarousel />
      <span className="-mt-48" />
      <Title title="DECLARATION OF PURPOSE" />
      <p className=" font-playfair text-4xl w-fit h-60 mb-60 mt-5">
        The purpose of this Fraternity shall be to form a strong bond uniting
        students
        <br /> and teachers of the lawwith members of the Bench and Bar in a
        fraternal
        <br /> fellowship designed to advance the ideals of liberty and equal
        justice under
        <br /> the law; to stimulate excellence in scholarship; to inspire the
        virtues of
        <br /> compassion and courage; to foster integrity and professional
        competence; to
        <br /> promote the welfare of its members; and to encourage their moral,
        <br /> intellectual, and cultural advancement; so that each member may
        enjoy a<br /> life time of honorable professional and public service.
      </p>
      <Picture picture={landing} />
      <span className="mt-52" />
    </div>
  );
};

export default AboutPage;
