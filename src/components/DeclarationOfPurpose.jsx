import React from "react";
import Scalesvg from "./Scalesvg";
import PAD1 from "../../public/PAD1.png";
import Image from "next/image";
const DeclarationOfPurpose = () => {
  return (
    <div className="items-stretch w-full relative flex flex-col md:flex-row justify-between !overflow-clip my-5">
      <Image src={PAD1} className="w-full md:w-1/2 h-full object-cover " />
      <div className="relative bg-pad-darkpurple flex flex-col w-full md:w-1/2 justify-between py-10">
        <Scalesvg
          color="#745091"
          className="absolute top-1/2 -translate-y-1/2 right-0"
        />
        <div className="relative font-playfair py-1 text-center text-md md:text-2xl w-4/5 border-t-2 border-l-2 border-b-2 text-pad-beige border-pad-beige self-end mb-10">
          DECLARATION OF PURPOSE
        </div>
        <div className="relative font-playfair w-3/4 text-pad-beige text-md md:text-xl justify-self-end self-center">
          The purpose of this Fraternity shall be to form a strong bond uniting
          students and teachers of the lawwith members of the Bench and Bar in a
          fraternal fellowship designed to advance the ideals of liberty and
          equal justice under the law; to stimulate excellence in scholarship;
          to inspire the virtues of compassion and courage; to foster integrity
          and professional competence; to promote the welfare of its members;
          and to encourage their moral, intellectual, and cultural advancement;
          so that each member may enjoy a life time of honorable professional
          and public service.
        </div>
      </div>
    </div>
  );
};

export default DeclarationOfPurpose;
