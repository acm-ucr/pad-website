"use client";

import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
const items = [
  {
    name: "About",
    link: "about",
  },
  {
    name: "Events",
    link: "events",
  },
  {
    name: "Board",
    link: "board",
  },
  {
    name: "Contacts",
    link: "contacts",
  },
];
const Navigation = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="md"
      fixed="top"
      className="w-full m-0 h-[8vh] p-0"
    >
      <div className="flex px-3 py-0 font-playfair w-full m-0 !bg-black/50 min-h-full justify-between">
        <Navbar.Brand className="p-0">
          <Link
            eventkey="1"
            className="p-0 no-underline flex items-center"
            href="/"
          >
            <img src="LOGO.png" className=" w-14" />
            <div className="flex flex-col items-start">
              <div className="!text-white mb-0 text-3xl">ΦA∆</div>
              <div className="!text-white text-xs">Phi Alpha Delta</div>
            </div>
          </Link>
        </Navbar.Brand>
        <Navbar.Collapse className="items-center md:justify-end justify-center">
          <Nav className="mb-2 w-12/12 no-underline ml-auto text-2xl">
            {items.map((item, index) => (
              <Nav.Link
                key={index}
                eventkey="6"
                href={item.link}
                className="mb-0 py-1 px-4 no-underline ml-auto !text-white text-2xl whitespace-nowrap w-full text-center !font-medium hover: hover:cursor-pointer"
              >
                {item.name}
              </Nav.Link>
            ))}
            <Nav.Link
              eventkey="5"
              href="/join"
              className="mt-1 pt-0 pb-1 px-3 no-underline ml-auto !text-white !bg-pad-darkpurple text-2xl whitespace-nowrap w-full text-center !font-medium hover: hover:cursor-pointer"
            >
              Join
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Toggle
          className="list-unstyled !text-transparent border-0"
          aria-controls="basic-navbar-nav"
        >
          <FaBars className=" text-white text-xl" />
        </Navbar.Toggle>
      </div>
    </Navbar>
  );
};

export default Navigation;
