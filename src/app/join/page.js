import UCRBenefits from "@/components/UCRBenefits";
import NationalBenefits from "@/components/NationalBenefits";
import React from "react";
import join from "../../../public/join.png";
import Header from "@/components/Header";
import HowToJoin from "@/components/HowToJoin";

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
