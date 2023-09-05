import UCRBenefits from "@/components/join/UCRBenefits";
import NationalBenefits from "@/components/join/NationalBenefits";
import join from "../../../public/join.png";
import Header from "@/components/Header";
import HowToJoin from "@/components/join/HowToJoin";
import Title from "@/components/Title";

const JoinPage = () => {
  return (
    <div className="flex flex-col items-center w-full">
      <Header title="Join" src={join} />
      <div className="flex md:flex-row flex-col mt-10 mb-10 w-11/12 justify-evenly items-center mt-20">
        <NationalBenefits />
        <div className="h-80 w-[1px] mt-3 bg-pad-purple hidden md:block" />
        <UCRBenefits />
      </div>
      <div className="w-10/12 my-5">
        <Title
          title="How to Join the Fraternity
"
        />
      </div>
      <HowToJoin />
    </div>
  );
};

export default JoinPage;
