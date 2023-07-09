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
            <div className="absolute -left-4 top-0 scale-75 rotate-90">
              <Boxessvg color="#E7DBDF" />
            </div>
            <div className="absolute top-0 -right-4 scale-75">
              <Boxessvg color="#E7DBDF" />
            </div>
            <div className="absolute -bottom-4 -left-4 scale-75">
              <Boxessvg color="#E7DBDF" />
            </div>
            <div className="absolute -bottom-4 -right-4 scale-75 rotate-90">
              <Boxessvg color="#E7DBDF" />
            </div>
          </div>
          <div className="absolute bottom-24 -right-10 h-96">
            {/* text information */}
            <h1
              className="font-playfair text-white text-6xl bottom-4 relative right-52 underline 
          underline-offset-8"
            >
              Phi Alpha Delta
            </h1>

            <h2 className=" font-playfair text-white text-3xl relative left-30">
              professional law and fraternity at UCR
            </h2>

            <h2 className="font-playfair text-white text-xl relative right-44">
              advancing intergrity, compassion, and courage through service to
              <ul>the student, the school, the profession and the community</ul>
            </h2>
            {/* Join Now box */}
            <div
              className="box-content h-0 w-56  
                 bg-[#745091] p-4 left-72 top-5 relative"
            >
              <div
                className="w-full h-0 right-6 bottom-6 relative
                  border-t-[24px] border-t-transparent
                  border-l-[24px] border-l-[#C3ACD0]
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
