import React from "react";
import PADsvg from "./PADsvg.jsx";
import Scalesvg from "./Scalesvg.jsx";
import { BsDiscord } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import Image from "next/image.js";
import LOGO from "../../public/Logo.png";

const Footer = () => {
  return (
    <div className="relative w-full bg-pad-purple h-[375px] overflow-hidden flex justify-between items-end">
      <div className="absolute bottom-0 right-0 scale-50 translate-x-1/4 translate-y-1/4">
        <PADsvg color="#674188" />
      </div>

      <div className="w-1/3 absolute bottom-1">
        <Scalesvg color="#674188" />
      </div>
      <div className="flex flex-col font-playfair relative bottom-12 left-3 translate-x-3/4">
        <Image
          src={LOGO}
          alt="logo"
          className="object-contain h-20 w-50 relative right-12 translate-y-3/4 -bottom-1"
        />
        <div className=" text-white text-xl relative left-5">ΦΑΔ</div>
        <div className="text-white text-sm"> Phi Alpha Delta</div>
      </div>

      <div className="flex">
        <div className="relative bottom-8 flex flex-col font-playfair justify-end text-end border-r-2 border-white text-white md:text-1xl pr-4 mr-8">
          <div className="">Contact us</div>
          <div className="">900 University Ave,</div>
          <div>Riverside, CA 92521</div>
        </div>

        <div className="flex flex-col relative bottom-8 items-end -left-5">
          <BsDiscord className="  md:text-4xl text-white font-semibold" />
          <GrMail className=" md:text-4xl text-white font-semibold" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
