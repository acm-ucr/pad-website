import UCRBenefits from "@/components/UCRBenefits";
import React from "react";
import join from "../../../public/join.png";
import Header from "@/components/Header";

const join = () => {
  return (
    <div>
      <Header title="Join" src={join} />
      <UCRBenefits />
    </div>
  );
};

export default page;
