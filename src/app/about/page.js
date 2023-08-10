import React from "react";
import Title from "@/components/Title";
import CoreValueCards from "@/components/CoreValueCards";
import about from "../../../public/about.png";
import Header from "@/components/Header";

const page = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <Header title="About" src={about} />
      <CoreValueCards />
      <Title title="Who We Are" />
    </div>
  );
};

export default page;
