import React from "react";
import PADsvg from "./PADsvg.jsx";
import Boxessvg from "./Boxessvg";

const AboutSection = () => {
  return (
    <div className="my-24">
      <div className="absolute scale-75  rotate-90 top-12 bottom-14 -left-16 ">
        <PADsvg color="#E7DBDF" />
      </div>

      <div className="flex items-center justify-center -ml-16 mr-12 -m-10 mt-7  text-xl text-violet-200 ">
        <p className="-ml-6">About Us</p>
      </div>

      <div className="flex items-center justify-center ml-14 -mr-4 mt-8  text-2xl font-bold">
        <p>Welcome to Phi Alpha Delta</p>
      </div>

      <div className="flex items-center justify-center ml-14 -mr-12">
        <p className="ml-6 -mr-20">
          We are the preeminent law fraternity promoting the bonds of <br />
          fraternalism and we are theleader in the devolopment
          <br />
          advancement of professional ideals.
        </p>
      </div>

      <div className="w-full flex justify-center text-white ml-16 ">
        <button className="bg-purple-700 ml-20 -mr-20 left-20 relative py-1.5 px-12 rounded">
          Learn More
        </button>
      </div>
      <div className="flex justify-center -ml-14 mr-8 -mt-14 ">
        <div className="-left-20 relative h-[15vh] w-2 bg-[#C3ACD0] -mt-14 -top-14"></div>
      </div>
      <div className="absolute top-0 right-0">
        <Boxessvg color="#E7DBDF" />
      </div>
    </div>
  );
};

export default AboutSection;
