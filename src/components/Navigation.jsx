"use client";

import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Link from "next/link";

const Navigation = () => {
  return (
    <Navbar
      collapseOnSelect
      className=" py-0 font-playfair w-12/12 px-3 m-0 h-[8vh] border-b-3 bg-cover"
      style={{
        backgroundImage: `linear-gradient( to right, transparent, #674188), url("landing.png")`,
        boxShadow: `0px 70px 5px rgba(0, 0, 0, 0.65) inset`,
      }}
    >
      <div className="mb-1 w-14">
        <img src="LOGO.png"></img>
      </div>
      <div className="!text-white ml-2 mb-0 text-3xl">
        ΦA∆
        <div className="!text-white text-xs mr-12 mb-2 ">Phi Alpha Delta</div>
      </div>
      <Navbar.Brand className="p-0">
        <Link eventkey="1" className="p-0" href="/"></Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        <Nav className="mb-2 w-12/12 no-underline ml-auto text-2xl">
          <Nav.Link
            eventkey="6"
            href="/"
            className="mb-0 py-1 px-4 no-underline ml-auto !text-white text-2xl whitespace-nowrap w-full text-center !font-medium hover: hover:cursor-pointer"
          >
            About
          </Nav.Link>
          <Nav.Link
            eventkey="2"
            href="/about"
            className="mb-0 py-1 px-4 no-underline ml-auto !text-white text-2xl whitespace-nowrap w-full text-center !font-medium hover: hover:cursor-pointer"
          >
            Events
          </Nav.Link>
          <Nav.Link
            eventkey="3"
            href="/board"
            className="mb-0 py-1 px-4 no-underline ml-auto !text-white text-2xl whitespace-nowrap w-full text-center !font-medium hover: hover:cursor-pointer"
          >
            Board
          </Nav.Link>
          <Nav.Link
            eventkey="4"
            href="/events"
            className="mb-0 py-1 px-4 no-underline ml-auto !text-white text-2xl whitespace-nowrap w-full text-center !font-medium hover: hover:cursor-pointer"
          >
            Contacts
          </Nav.Link>
          <Nav.Link
            eventkey="5"
            href="/join"
            className="mt-1 pt-0 pb-1 px-3 no-underline ml-auto !text-white !bg-pad-darkpurple text-2xl whitespace-nowrap w-full text-center !font-medium hover: hover:cursor-pointer"
          >
            Join
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
