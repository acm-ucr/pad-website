import React from "react";
import PADsvg from "./svg/PADsvg.jsx";
import Scalesvg from "./svg/Scalesvg.jsx";
import { BsDiscord } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import Image from "next/image.js";
import LOGO from "../../public/LOGO.png";

const Footer = () => {
  return (
    <div className="relative w-full bg-pad-purple h-[375px] overflow-hidden flex justify-between items-end">
      <PADsvg
        color="#674188"
        className="absolute bottom-0 right-0 scale-50 translate-x-1/4 translate-y-1/4 "
      />

      <Scalesvg color="#674188" className="w-1/4 absolute bottom-1" />
      <div className="flex items-center font-playfair relative">
        <Image
          src={LOGO}
          alt="logo"
          className="object-contain h-20 w-50 m-4 "
        />
        <div className="">
          <div className=" text-white text-sm md:text-xl lg:text-7xl ">ΦΑΔ</div>
          <div className="text-white text-sm"> Phi Alpha Delta</div>
        </div>
      </div>

      <div className="flex m-4">
        <div className="relative flex flex-col font-playfair justify-end text-end border-r-2 border-white text-white md:text-1xl pr-4 mr-6">
          <div className="">Contact us</div>
          <div className="">900 University Ave,</div>
          <div>Riverside, CA 92521</div>
        </div>

        <div className="flex flex-col relative items-end">
          <BsDiscord className="md:text-4xl text-white font-semibold" />
          <GrMail className=" md:text-4xl text-white font-semibold" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
