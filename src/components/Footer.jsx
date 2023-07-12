import React from "react";
import PADsvg from "./PADsvg.jsx";
import Scalesvg from "./Scalesvg.jsx";
import { BsDiscord } from "react-icons/bs";
import { GrMail } from "react-icons/gr";

const Footer = () => {
  return (
    <div className="relative bottom-0 w-full h-full bg-[#745091]">
      <div className="scale-50  w-1/3  absolute translate-y-3/4 right-5">
        <PADsvg color="#674188" />
      </div>

      <div className="scale-50  w-1/3 absolute -translate-x-1/4 ">
        <Scalesvg color="#674188" />
      </div>

      <div className=" flex flex-col justify-end relative font-teko text-end  text-white font-semibold md:text-1xl pr-10 mr-10 h-[375px] ">
        <div className="">Contact us</div>
        <div className="">900 University Ave,</div>
        <div>Riverside, CA 92521</div>
      </div>

      <div className="flex flex-col relative items-end -translate-y-2/3 bottom-5 right-7">
        <BsDiscord className="  md:text-4xl text-white font-semibold" />
        <GrMail className=" md:text-4xl text-white font-semibold" />
      </div>

      <div className="flex flex-col -translate-y-2/3 relative left-6 h-[170px]">
        <div className="text-white font-semibold text-sm"> Phi Alpha Delta</div>
      </div>
    </div>
  );
};

export default Footer;
