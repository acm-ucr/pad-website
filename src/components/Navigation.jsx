"use client";
import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import { items } from "./data/navigation";

const Navigation = () => {
  const [selected, setSelected] = useState("");
  return (
    <Navbar
      collapseOnSelect
      expand="md"
      fixed="top"
      className="w-full m-0 md:h-[8vh] p-0"
    >
      <div className="flex px-3 py-0 font-playfair w-full m-0 !bg-black/50 min-h-full justify-between items-center">
        <Navbar.Brand className="p-0">
          <Link
            as={Link}
            eventkey="1"
            className="p-0 no-underline flex items-center gap-2"
            href="/"
          >
            <img src="LOGO.png" className="w-8 md:w-14" />
            <div className="flex flex-col items-start">
              <div className="text-white mb-0 text-lg md:text-3xl">ΦA∆</div>
              <div className="text-white text-xs md:text-sm">
                Phi Alpha Delta
              </div>
            </div>
          </Link>
        </Navbar.Brand>
        <Navbar.Collapse className="items-center md:justify-end justify-center">
          <Nav className="mb-2 w-12/12 no-underline text-2xl flex items-center">
            {items.map((item, index) => (
              <Nav.Link
                as={Link}
                key={index}
                href={item.link}
                onClick={() => {
                  setSelected(item.name);
                }}
                className={`hover:cursor-pointer mb-0 py-1 px-4 no-underline !text-white text-2xl whitespace-nowrap !font-medium hover:!text-pad-lightpurple duration-300 ${
                  selected === item.name && "!bg-white/10"
                }`}
              >
                {item.name}
              </Nav.Link>
            ))}
            <Nav.Link
              href="/join"
              className="m-2 py-1 px-4 no-underline !text-white !bg-pad-darkpurple text-2xl whitespace-nowrap !font-medium hover:!bg-pad-purple duration-300"
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
