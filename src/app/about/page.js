"use client";
import Title from "@/components/Title";
import CoreValueCards from "@/components/about/CoreValueCards";
import about from "../../../public/about.png";
import Header from "@/components/Header";
import PictureCarousel from "@/components/about/PictureCarousel";
import Picture from "@/components/about/Picture";
import PAD3 from "../../../public/PAD3.png";

const AboutPage = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <Header title="About" src={about} />
      <CoreValueCards />
      <Title title="Who We Are" />
      <Picture picture={PAD3} />
      <PictureCarousel />
    </div>
  );
};

export default AboutPage;
