import Col from "react-bootstrap/Col";
import Image from "next/image";

const Board = ({ member }) => {
  return (
    <Col sm={6} md={3} className="p-4 flex items-center justify-center ">
      <div className="relative">
        <Image src={member.image} alt="Board Member" />
        <div className="absolute -bottom-10 -left-2 h-fit">
          <div className="flex">
            <p className="text-pad-beige font-bold font-playfair px-2 bg-pad-purple h-8 m-0 w-48">
              {member.position}
            </p>
            <div className="w-0 h-0 border-l-[0px] border-l-transparent border-t-[32px] border-t-pad-purple border-r-[40px] border-r-transparent"></div>
          </div>
          <div className="flex">
            <p className="text-pad-purple font-bold font-playfair p-1 bg-pad-lightpurple w-48 h-8 shadow">
              {member.name}
            </p>
            <div className="w-0 h-0 border-l-[0px] border-l-transparen border-b-[32px] border-b-pad-lightpurple border-r-[40px] border-r-transparent"></div>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default Board;
