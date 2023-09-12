import Col from "react-bootstrap/Col";
const CoreValueCard = ({ icon, text, index }) => {
  return (
    <Col
      className={`${`animate-fade-right animate-once animate-delay-[${index}00ms] animate-delay-${index}00`} p-0 group border-0`}
      xs={3}
      md
    >
      <div className="aspect-[3/5] group-even:bg-pad-purple group-odd:bg-pad-darkpurple flex flex-col items-center w-full justify-center">
        {icon}
        <div className="h-[2px] w-16 bg-pad-beige my-4 md:my-8" />
        <p className="text-xs md:text-xl text-pad-beige font-playfair font-bold">
          {text}
        </p>
      </div>
    </Col>
  );
};

export default CoreValueCard;
