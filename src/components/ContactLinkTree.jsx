"use client";

import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { FaInstagram, FaTiktok } from "react-icons/fa";
import { PiLinkBold } from "react-icons/pi";

const Socials = [
  {
    path: "https://www.instagram.com/ucrphialphadelta/",
    title: "Instagram",
    image: <FaInstagram className="text-6xl -rotate-45"></FaInstagram>,
  },
  {
    path: "https://www.google.com/",
    title: "Tiktok",
    image: <FaTiktok className="text-6xl -rotate-45"></FaTiktok>,
  },
  {
    path: "https://www.google.com/",
    title: "Links",
    image: <PiLinkBold className="text-6xl rotate-45"></PiLinkBold>,
  },
];

const ContactLinkTree = () => {
  return (
    <div className="flex flex-row -translate-y-48 h-screen w-3/4 m-auto  items-center justify-center">
      <div className="bg-white h-5/6 w-full">
        <div className="font-playfair text-8xl text-pad-lightpurple font-bold translate-x-20 translate-y-20">
          Email Us
        </div>
        <div className="text-3xl font-normal font-playfair translate-x-36 translate-y-72">
          <a
            href="mailto:membership@ucrpad.org"
            className="text-decoration-none text-pad-purple hover:text-pad-darkpurple"
          >
            membership@ucrpad.org
          </a>
        </div>
        <div className="text-3xl font-playfair translate-x-36 translate-y-80">
          <a
            href="mailto:president@ucrpad.org"
            className="text-decoration-none text-pad-purple hover:text-pad-darkpurple"
          >
            president@ucrpad.org
          </a>
        </div>
        <Row className="justify-between flex-nowrap mx-auto w-8/12 my-5 py-1 translate-y-96">
          {Socials.map((link, index) => {
            return (
              <Col key={index} xs="3" className="flex justify-center">
                <div className="border-3 border-pad-darkpurple py-2 px-2 rotate-45 ">
                  <a
                    href={link.path}
                    rel="noreferrer"
                    target="_blank"
                    title={link.title}
                    className="text-pad-purple hover:text-pad-darkpurple"
                  >
                    {link.image}
                  </a>
                </div>
              </Col>
            );
          })}
        </Row>
      </div>

      <div className="bg-pad-purple h-5/6 w-full"></div>
    </div>
  );
};

export default ContactLinkTree;
