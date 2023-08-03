"use client";
import React from "react";
import Title from "@/components/Title";
import CoreValueCards from "@/components/CoreValueCards";
import about from "../../../public/about.png";
import Header from "@/components/Header";
import PictureCarousel from "@/components/PictureCarousel";

const page = () => {
  return (
    <div>
      <Header title="About" src={about} />
      <CoreValueCards />
      <Title />
      <PictureCarousel />
    </div>
  );
};

export default page;
