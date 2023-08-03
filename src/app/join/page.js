import UCRBenefits from "@/components/UCRBenefits";
import React from "react";
import join from "../../../public/join.png";
import Header from "@/components/Header";
import HowToJoin from "@/components/HowToJoin";

const page = () => {
  return (
    <div>
      <Header title="Join" src={join} />
      <HowToJoin />
      <UCRBenefits />
    </div>
  );
};

export default page;
