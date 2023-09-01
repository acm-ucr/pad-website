import React from "react";
import Filter from "./Filter.jsx";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Filters from "./Filters.jsx";

const CustomToolbar = (event) => {
  return (
    <div className="flex justify-center items-center">
      <Row className="w-full">
        <Col
          xs={4}
          className="p-0 m-0 flex justify-start items-center text-xl font-playfair relative top-12 "
        >
          <FaArrowLeft
            onClick={() => event.onNavigate("PREV")}
            size={30}
            className="text-pad-purple hover:cursor-pointer"
          />
          <div className="text-center text-5xl p-1">
            {event.date.getMonth() + 1 < 10
              ? `0${event.date.getMonth() + 1}`
              : event.date.getMonth() + 1}
            <br className="m-0" />
            {event.date.getFullYear() % 100}
          </div>
          <FaArrowRight
            onClick={() => event.onNavigate("NEXT")}
            size={30}
            className="text-pad-purple hover:cursor-pointer"
          />
        </Col>
        <Col
          xs={12}
          className="px-0 w-full flex justify-end items-end mb-8 pb-0 "
        >
          <Row className="w-full m-0 p-0 flex justify-end gap-3 justify-items-center items-center ">
            {Filters.map((filter, index) => {
              return (
                <Col key={index} xs={5} sm={5} lg={2} className="m-0 p-0">
                  <Filter topic={filter.topic} color={filter.color} />
                </Col>
              );
            })}
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default CustomToolbar;
