"use client";

import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Socials } from "../data/links";

const ContactLinkTree = () => {
  return (
    <div className="bg-white w-1/2 h-full p-5 flex flex-col justify-between">
      <div className="font-playfair text-5xl text-pad-lightpurple font-bold w-full">
        Email Us
      </div>
      <div className="flex flex-col mt-14">
        <a
          href="mailto:membership@ucrpad.org"
          className="text-xl font-playfair text-pad-purple hover:scale-105 no-underline duration-300"
        >
          membership@ucrpad.org
        </a>
        <a
          href="mailto:president@ucrpad.org"
          className="text-xl font-playfair text-pad-purple hover:scale-105 no-underline duration-300"
        >
          president@ucrpad.org
        </a>
      </div>
      <Row className="flex w-full justify-evenly">
        {Socials.map((link, index) => {
          return (
            <Col key={index} xs="3" className="flex justify-center">
              <div className="border-3 border-pad-darkpurple py-2 px-2 rotate-45">
                <a
                  href={link.path}
                  rel="noreferrer"
                  target="_blank"
                  title={link.title}
                  className="text-pad-purple hover:text-pad-lightpurple no-underline duration-300"
                >
                  {link.image}
                </a>
              </div>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default ContactLinkTree;
