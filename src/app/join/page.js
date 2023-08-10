import UCRBenefits from "@/components/UCRBenefits";
import React from "react";
import join from "../../../public/join.png";
import Header from "@/components/Header";
import HowToJoin from "@/components/HowToJoin";

const page = () => {
  return (
    <div className="flex flex-col items-center">
      <Header title="Join" src={join} />
      <UCRBenefits />
      <HowToJoin />
    </div>
  );
};

export default page;
