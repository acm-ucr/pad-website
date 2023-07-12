import React from "react";
import PADsvg from "./PADsvg.jsx";
import Scalesvg from "./Scalesvg.jsx";
import { BsDiscord } from "react-icons/bs";
import { GrMail } from "react-icons/gr";

const Footer = () => {
  return (
    <div className="relative w-full bg-pad-purple h-[375px] overflow-hidden flex justify-between items-end">
      <div className="absolute bottom-0 right-0 scale-50 translate-x-1/4 translate-y-1/4">
        <PADsvg color="#674188" />
      </div>

      <div className="w-1/3 absolute bottom-1">
        <Scalesvg color="#674188" />
      </div>
      <div className="flex flex-col relative">
        <div className="text-white font-semibold text-sm"> Phi Alpha Delta</div>
      </div>
      <div className="flex">
        <div className="relative flex flex-col justify-end text-end border-r-2 border-white text-white md:text-1xl pr-10 mr-10">
          <div className="">Contact us</div>
          <div className="">900 University Ave,</div>
          <div>Riverside, CA 92521</div>
        </div>

        <div className="flex flex-col relative items-end ">
          <BsDiscord className="  md:text-4xl text-white font-semibold" />
          <GrMail className=" md:text-4xl text-white font-semibold" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
