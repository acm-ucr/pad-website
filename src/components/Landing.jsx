import React from "react";
import Link from "next/link";
import Boxessvg from "./Boxessvg";
import landing from "../../public/landing.png";
import Image from "next/image";

const Landing = () => {
  return (
    <div className="w-full relative flex h-[50vh] md:h-screen">
      <Image src={landing} className="w-full" />
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
          <p className="my-3 md:my-8 font-playfair font-bold text-white text-3xl md:text-6xl underline decoration-[3px] underline-offset-[15px] self-start">
            Phi Alpha Delta
          </p>
          <p className="font-playfair text-white text-base md:text-3xl self-end pr-4 md:pr-8 my-1">
            professional law and fraternity at UCR
          </p>

          <p className="font-playfair text-white text-xs md:text-lg self-start text-right md:my-2 pr-6 md:pr-12">
            advancing intergrity, compassion, and courage through service to the
            student, the school, the profession and the community
          </p>
          <Link
            href="/join"
            className="relative box-content w-1/2 flex bg-pad-darkpurple no-underline self-end"
          >
            <div
              className="w-fit h-0 absolute left-0
              border-t-[16px] md:border-t-[24px] border-t-transparent
              border-l-[16px]    md:border-l-[24px] border-l-pad-lightpurple
              border-b-[16px]    md:border-b-[24px] border-b-transparent"
            />
            <p className="m-0 pl-20 py-1 md:py-2 font-source text-white text-base md:text-2xl whitespace-nowrap">
              Join Us
            </p>
          </Link>
        </div>
      </div>
      {/* <div className=" relative h-full">
        <div className="h-[100vh] w-full ">
          <div
            className="w-full h-full object-fit"
            style={{
              backgroundImage:
                " linear-gradient( to right, transparent, #674188), url('landing.png')",
              backgroundSize: "cover",
            }}
          ></div>
          <div>
            <div className="absolute -left-10 -top-4 scale-50 rotate-90">
              <Boxessvg color="#E7DBDF" />
            </div>
            <div className="absolute -top-4 -right-10 scale-50">
              <Boxessvg color="#E7DBDF" />
            </div>
            <div className="absolute -bottom-9 -left-10 scale-50">
              <Boxessvg color="#E7DBDF" />
            </div>
            <div className="absolute -bottom-9 -right-10 scale-50 rotate-90">
              <Boxessvg color="#E7DBDF" />
            </div>
          </div>
          <div className="absolute bottom-24 -right-10 h-96">
            <h1 className="font-playfair font-bold text-white text-6xl bottom-4 relative right-56 underline decoration-[3px] underline-offset-[15px]  ">
              Phi Alpha Delta
            </h1>
            <p className="w-4 h-4 bg-white rounded-full absolute top-[47px] left-[204px]"></p>
            <p className=" font-playfair text-white text-3xl relative -left-14">
              professional law and fraternity at UCR
            </p>

            <p className="font-playfair text-white text-lg relative right-44">
              advancing intergrity, compassion, and courage through service to
              <ul>the student, the school, the profession and the community</ul>
            </p>
            <div
              className="box-content h-0 w-64  
                 bg-pad-purple p-4 left-48 top-5 relative"
            >
              <div
                className="w-full h-0 right-6 bottom-6 relative
                  border-t-[24px] border-t-transparent
                  border-l-[24px] border-l-pad-lightpurple
                  border-b-[24px] border-b-transparent"
              >
                <Link
                  href="/join"
                  className="font-source text-white text-2xl bottom-4 left-6 relative"
                >
                  <button>Join Us</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Landing;
