import React from "react";
import PADsvg from "./PADsvg.jsx";
import Boxessvg from "./svg/Boxessvg.jsx";
import triangle from "../../public/triangle.svg";
import Image from "next/image.js";
import Link from "next/link.js";

const AboutSection = () => {
  return (
    <div className="w-full relative flex font-playfair h-[600px] md:h-[700px] items-center flex-col">
      <PADsvg
        color="#E7DBDF"
        className="rotate-90 origin-bottom-left top-10 -left-20 md:left-0 absolute -translate-y-full w-1/2"
      />
      <Boxessvg color="#E7DBDF" className="w-1/6 self-end md:mr-5 h-fit mt-2" />
      <div className="w-3/4 self-end">
        <p className="text-xl md:text-4xl text-pad-lightpurple font-bold ml-8 my-0 md:my-2">
          About Us
        </p>
        <div className="text-2xl md:text-5xl font-bold border-l-8 border-pad-lightpurple py-3 pl-3">
          <p>Welcome to Phi Alpha Delta</p>
          <p className="text-base md:text-2xl w-2/3">
            We are the preeminent law fraternity promoting the bonds of
            fraternalism and we are theleader in the devolopment advancement of
            professional ideals.
          </p>
        </div>

        <div className="w-full flex justify-end">
          <Link
            className="bg-pad-purple h-8 md:h-12 flex items-center no-underline justify-start mr-10 md:mr-48 hover:scale-105 hover:cursor-pointer hover:ease-in-out hover:duration-500"
            href="/about"
          >
            <Image src={triangle} className="h-full m-0" />
            <p className="px-8 md:px-16 m-0 font-bold text-pad-beige text-lg md:text-3xl whitespace-nowrap">
              Learn More
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
