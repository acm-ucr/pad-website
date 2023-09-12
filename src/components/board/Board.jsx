import Col from "react-bootstrap/Col";
import Image from "next/image";

const Board = ({ member, index }) => {
  return (
    <Col
      sm={member.width * 2}
      md={member.width}
      className={`${`animate-fade-right animate-once animate-delay-[${index}00ms] animate-delay-${index}00`} p-4 flex items-center justify-center`}
    >
      <div className="w-[200px] h-[300px] relative">
        <Image
          src={member.image}
          alt="Board Member"
          className="w-full h-full object-cover"
        />
        <div className="absolute -bottom-10 -left-2 h-fit">
          <div className="flex">
            <p className="whitespace-nowrap text-pad-beige font-bold font-playfair px-2 bg-pad-purple h-8 m-0 min-w-full">
              {member.position}
            </p>
            <div className="w-0 h-0 border-l-[0px] border-l-transparent border-t-[32px] border-t-pad-purple border-r-[40px] border-r-transparent" />
          </div>
          <div className="flex">
            <p className="whitespace-nowrap text-pad-purple font-bold font-playfair p-1 bg-pad-lightpurple min-w-full h-8 shadow">
              {member.name}
            </p>
            <div className="w-0 h-0 border-l-[0px] border-l-transparen border-b-[32px] border-b-pad-lightpurple border-r-[40px] border-r-transparent" />
          </div>
        </div>
      </div>
    </Col>
  );
};

export default Board;
