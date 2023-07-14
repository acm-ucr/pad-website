import React from "react";
import Link from "next/link";
import Boxessvg from "./Boxessvg";

const Landing = () => {
  return (
    <div>
      <div className=" relative h-full">
        {/* image/color gradient */}
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
            {/* boxes */}
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
            {/* text information */}
            <h1 className="font-playfair font-bold text-white text-6xl bottom-4 relative right-56 underline decoration-[3px] underline-offset-[15px]  ">
              Phi Alpha Delta
            </h1>
            <p className="w-4 h-4 bg-white rounded-full absolute top-[47px] left-[204px]"></p>
            <h2 className=" font-playfair text-white text-3xl relative -left-14">
              professional law and fraternity at UCR
            </h2>

            <h2 className="font-playfair text-white text-lg relative right-44">
              advancing intergrity, compassion, and courage through service to
              <ul>the student, the school, the profession and the community</ul>
            </h2>
            {/* Join Now box */}
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
      </div>
    </div>
  );
};

export default Landing;
