import React from "react";
import Scalesvg from "./Scalesvg";

const DeclarationOfPurpose = () => {
  return (
    <div className=" w-8/12 relative flex justify-start !bg-pad-darkpurple overflow-hidden">
      <div className=" w-3/4  bg-[url(/PAD1.png)] bg-no-repeat"></div>
      <div className=" scale-90 translate-x-20 translate-y-7">
        <Scalesvg color="#745091"></Scalesvg>
      </div>
      <div className="font-playfair bottom-14 -right-12 w-1/2 absolute !text-pad-beige text-xl">
        The purpose of this Fraternity shall be to form a <br></br> strong bond
        uniting students and teachers of the law<br></br>with members of the
        Bench and Bar in a fraternal<br></br>
        fellowship designed to advance the ideals of liberty <br></br> and equal
        justice under the law; to stimulate excellence <br></br> in scholarship;
        to inspire the virtues of compassion <br></br>
        and courage; to foster integrity and professional <br></br> competence;
        to promote the welfare of its <br></br> members; and to encourage their
        moral, intellectual, <br></br>
        and cultural advancement; so that each member may <br></br> enjoy a life
        time of honorable professional and <br></br> public service.
      </div>
      <div className="font-playfair py-1 text-center text-2xl h-12 w-4/12 translate-y-8 border-t-2 border-l-2 border-b-2 top-0 right-0 border-spacing-96 absolute !text-pad-beige border-pad-beige">
        DECLARATION OF PURPOSE
      </div>
    </div>
  );
};

export default DeclarationOfPurpose;

/*
The purpose of this Fraternity shall be to form a <br></br> strong bond
            uniting students and teachers of the law<br></br>with members of the Bench and Bar in a fraternal<br></br>       
            fellowship designed to advance the ideals of liberty <br></br> and equal justice
            under the law; to stimulate excellence <br></br> in scholarship; to inspire the virtues of compassion <br></br>
            and courage; to foster integrity and professional <br></br> competence; to promote the welfare
            of its <br></br> members; and to encourage their moral, intellectual, <br></br>
            and cultural advancement; so that each member may <br></br> enjoy a life time
            of honorable professional and <br></br> public service.
*/
