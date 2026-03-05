import React from "react";

const Hero = ({ search }) => {
  return (
    <div>
      <h1 className="text-3xl text-black border-2 border-black hover:border-amber-500 transition-all duration-300 p-5">
        Hello {search}
      </h1>
    </div>
  );
};

export default Hero;
