import PADsvg from "./svg/PADsvg.jsx";
import Scalesvg from "./svg/Scalesvg.jsx";
import Image from "next/image.js";
import LOGO from "../../public/LOGO.png";
import Link from "next/link.js";
import { Socials } from "@/data/links.js";

const Footer = () => {
  return (
    <div className="relative w-full bg-pad-purple h-[375px] overflow-hidden flex justify-between items-end p-3">
      <PADsvg
        color="#674188"
        className="absolute hidden md:block bottom-0 right-0 w-1/3"
      />

      <Scalesvg color="#674188" className="w-2/3 md:w-1/4 absolute bottom-1" />
      <div className="flex items-center font-playfair relative gap-3">
        <div className="bg-white rounded-full h-25 w-25 md:w-40 md:h-40">
          <Image
            src={LOGO}
            alt="logo"
            className="object-contain w-full h-full"
          />
        </div>
        <div className="">
          <div className="whitespace-nowrap text-white text-sm md:text-xl lg:text-7xl">
            ΦΑΔ
          </div>
          <div className="whitespace-nowrap text-white text-sm">
            Phi Alpha Delta
          </div>
        </div>
      </div>

      <div className="flex">
        <div className="relative flex flex-col font-playfair justify-end text-end border-r-2 border-white text-white md:text-1xl pr-4 mr-2 md:mr-6">
          <div className="whitespace-nowrap">Contact us</div>
          <div className="whitespace-nowrap">900 University Ave,</div>
          <div className="whitespace-nowrap">Riverside, CA 92521</div>
        </div>

        <div className="flex flex-col relative items-end">
          {Socials.map((social, index) => (
            <Link
              key={index}
              href={social.path}
              className="text-4xl text-white hover:scale-110 duration-300 m-1"
            >
              {social.image}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
