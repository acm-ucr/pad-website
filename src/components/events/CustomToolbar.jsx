import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import filters from "@/data/filters";
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const CustomToolbar = (event) => {
  return (
    <div className="flex justify-center items-center w-full py-3 flex-col md:flex-row">
      <div className="md:w-1/3 flex gap-3 mb-2 md:mb-0">
        <p className="m-0">{monthNames[event.date.getMonth()]}</p>
        <p className="m-0">{event.date.getFullYear()}</p>
      </div>
      <Row className="w-10/12 md:w-2/3 m-0 p-0 flex justify-center md:justify-end justify-items-center items-center">
        {filters.map((filter, index) => (
          <Col
            key={index}
            xs={9}
            sm={3}
            className={`w-full ${filter.color} whitespace-nowrap text-center text-sm md:text-lg rounded-sm flex justify-center p-0 m-1`}
          >
            {filter.topic}
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default CustomToolbar;
