import React from "react";

const notFound = () => {
  return (
    <div className="flex h-screen">
      <div className="m-auto">
        <h1 className="text-7xl font-readex text-pad-lightpurple">404</h1>

        <p className="text-3xl font-readex -indent-5 text-code-black">
          Page Not Found
        </p>
        <div className="border-2 border-pad-black relative right-4 text-center">
          Back To Home
        </div>
      </div>
    </div>
  );
};

export default notFound;
