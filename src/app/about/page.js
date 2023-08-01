import React from "react";
import Title from "@/components/Title";
import CoreValueCards from "@/components/CoreValueCards";
import about from "../../../public/about.png";
import Header from "@/components/Header";

const page = () => {
  return (
    <div className="w-full">
      <Header title="About" src={about} />
      <CoreValueCards />
      <Title />
    </div>
  );
};

export default page;
