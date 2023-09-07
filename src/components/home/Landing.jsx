import Link from "next/link";
import Boxessvg from "../svg/Boxessvg";
import landing from "../../../public/headers/landing.png";
import Image from "next/image";
import triangle from "../../../public/triangle.svg";

const Landing = () => {
  return (
    <div className="w-full relative flex h-[50vh] md:h-screen">
      <Image src={landing} className="w-full" alt="landing" />
      <div className="absolute bg-gradient-to-r from-[#331B48]/30 to-[#331B48] w-full h-full flex items-center justify-end">
        <Boxessvg
          color="#F7EFE5"
          className="absolute -top-5 md:top-10 left-2 md:left-5 rotate-90 w-1/12"
        />
        <Boxessvg
          color="#F7EFE5"
          className="absolute -top-5 md:top-10 right-2 md:right-5 w-1/12"
        />
        <Boxessvg
          color="#F7EFE5"
          className="absolute  -bottom-14 md:bottom-5 left-2 md:left-5 w-1/12"
        />
        <Boxessvg
          color="#F7EFE5"
          className="absolute -bottom-14 md:bottom-5 right-2 md:right-5 rotate-90 w-1/12"
        />
        <div className="flex flex-col w-3/4 lg:w-1/2">
          <p className="animate-fade-up animate-delay-[100ms] animate-once my-3 md:my-8 font-playfair font-bold text-white text-2xl md:text-5xl underline decoration-[3px] underline-offset-[15px] self-start">
            Phi Alpha Delta
          </p>
          <p className="animate-fade-up animate-delay-[300ms] animate-once  font-playfair text-white text-base md:text-3xl self-end pr-4 md:pr-8 my-1">
            professional law and fraternity at UCR
          </p>

          <p className="animate-fade-up animate-delay-[600ms] animate-once font-playfair text-white text-xs md:text-lg self-start text-right md:my-2 pr-6 md:pr-12">
            advancing intergrity, compassion, and courage through service to the
            student, the school, the profession and the community
          </p>
          <Link
            href="/join"
            className="mt-3 items-center animate-fade-up animate-delay-[800ms] relative box-content w-1/2 flex bg-pad-darkpurple no-underline self-end"
          >
            <Image
              src={triangle}
              className="h-full w-auto m-0"
              alt="triangle"
            />
            <p className="m-0 pl-6 md:pl-20 py-1 md:py-2 font-source text-white text-base md:text-2xl whitespace-nowrap no-underline hover:scale-110 duration-300">
              Join Us
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;
