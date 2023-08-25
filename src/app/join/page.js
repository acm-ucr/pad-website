import UCRBenefits from "@/components/join/UCRBenefits";
import NationalBenefits from "@/components/join/NationalBenefits";
import React from "react";
import join from "../../../public/join.png";
import Header from "@/components/Header";
import HowToJoin from "@/components/join/HowToJoin";

const JoinPage = () => {
  return (
    <div className="flex flex-col items-center">
      <Header title="Join" src={join} />
      <div className="flex flex-row">
        <NationalBenefits />
        <UCRBenefits />
      </div>
      <HowToJoin />
    </div>
  );
};

export default JoinPage;
