import UCRBenefits from "@/components/join/UCRBenefits";
import NationalBenefits from "@/components/join/NationalBenefits";
import join from "../../../public/join.png";
import Header from "@/components/Header";
import HowToJoin from "@/components/join/HowToJoin";

const JoinPage = () => {
  return (
    <div className="flex flex-col items-center">
      <Header title="Join" src={join} />
      <div className="flex flex-row space-x-32 mt-10 mb-10">
        <NationalBenefits />
        <div className="h-80 w-px mt-3 bg-gray-500"></div>
        <UCRBenefits />
      </div>
      <HowToJoin />
    </div>
  );
};

export default JoinPage;
