import React from "react";
import PADsvg from "./PADsvg.jsx";
import Boxessvg from "./Boxessvg";
import triangle from "../../public/triangle.svg";
import Image from "next/image.js";
import Link from "next/link.js";

const AboutSection = () => {
  return (
    <div className="w-full relative flex font-playfair h-[800px] items-center">
      <div className="rotate-90 origin-bottom-left top-0 left-0 absolute -translate-y-full">
        <PADsvg color="#E7DBDF" />
      </div>
      <div className="absolute top-5 right-5">
        <Boxessvg color="#E7DBDF" />
      </div>
      <div className="ml-[30%] w-full mt-24">
        <p className="text-4xl text-pad-lightpurple font-bold ml-8 ">
          About Us
        </p>
        <div className="text-5xl font-bold border-l-8 border-pad-lightpurple p-3">
          <p>Welcome to Phi Alpha Delta</p>
          <p className="text-2xl w-2/3">
            We are the preeminent law fraternity promoting the bonds of
            fraternalism and we are theleader in the devolopment advancement of
            professional ideals.
          </p>
        </div>

        <div className="w-full flex justify-end">
          <Link
            className="bg-pad-purple h-12 flex items-center no-underline justify-start mr-48"
            href="/about"
          >
            <Image src={triangle} className="h-full m-0" />
            <p className="px-16 m-0 font-bold text-pad-beige text-3xl">
              Learn More
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
