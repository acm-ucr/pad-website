import React from "react";

const notFound = () => {
  return (
    <div className="flex flex-col h-screen w-full items-center justify-center">
      <p className="text-9xl font-playfair text-pad-lightpurple">404</p>

      <p className="text-3xl font-playfair text-black m-1">Page Not Found</p>
      <div className="w-10 h-1 !bg-pad-darkpurple mb-2" />
      <a
        href="/"
        className="border-[1px] border-pad-black text-center font-playfair px-4 py-1 m-2 text-pad-black no-underline hover:text-pad-purple hover:border-pad-purple"
      >
        Back To Home
      </a>
    </div>
  );
};

export default notFound;
