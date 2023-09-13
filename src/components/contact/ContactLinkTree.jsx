"use client";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Socials } from "@/data/links";
import Link from "next/link";

const ContactLinkTree = () => {
  return (
    <div className="bg-white w-full md:w-2/3 h-full p-5 flex flex-col justify-between">
      <div className="font-playfair text-2xl md:text-5xl text-pad-lightpurple font-bold w-full">
        Email Us
      </div>
      <div className="flex flex-col mt-14">
        <Link
          href="mailto:membership@ucrpad.org"
          className="text-base md:text-xl font-playfair text-pad-purple hover:scale-105 no-underline duration-300"
        >
          membership@ucrpad.org
        </Link>
        <Link
          href="mailto:president@ucrpad.org"
          className="text-base md:text-xl font-playfair text-pad-purple hover:scale-105 no-underline duration-300"
        >
          president@ucrpad.org
        </Link>
      </div>
      <Row className="flex w-full justify-evenly">
        {Socials.map((link, index) => (
          <Col key={index} xs="3" className="flex justify-center">
            <Link
              href={link.path}
              rel="noreferrer"
              target="_blank"
              title={link.title}
              className="text-pad-purple hover:text-pad-lightpurple no-underline duration-300 border-3 border-pad-darkpurple p-2 rotate-45"
            >
              <div className="text-2xl md:text-4xl -rotate-45">
                {link.image}
              </div>
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ContactLinkTree;
