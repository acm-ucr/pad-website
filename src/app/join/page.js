import UCRBenefits from "@/components/join/UCRBenefits";
import NationalBenefits from "@/components/join/NationalBenefits";
import join from "../../../public/headers/join.png";
import Header from "@/components/Header";
import HowToJoin from "@/components/join/HowToJoin";
import Title from "@/components/Title";
import Picture from "@/components/about/Picture";
import pic from "../../../public/images/Initiation/B8FCA0C7-CE95-4AF7-882B-4B6C8A5F177E_1_105_c.jpg";

const JoinPage = () => {
  return (
    <>
      <Header title="Join" src={join} />
      <div className="flex md:flex-row flex-col mb-10 w-11/12 justify-evenly items-center mt-20">
        <NationalBenefits />
        <div className="h-80 w-[1px] mt-3 bg-pad-purple hidden md:block" />
        <UCRBenefits />
      </div>
      <Picture picture={pic} />
      <div className="w-10/12 my-5">
        <Title title="How to Join the Fraternity" />
      </div>
      <HowToJoin />
    </>
  );
};

export default JoinPage;
