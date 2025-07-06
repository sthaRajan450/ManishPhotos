import React from "react";

const Hero = () => {
  return (
    <div
      className="w-full h-screen bg-cover bg-center bg-no-repeat flex items-end justify-center"
      style={{ backgroundImage: `url('/images/hero.jpg')` }}
    >
      <div className="w-11/12 md:w-1/2 p-6 rounded-lg mx-4">
        <h1 className="text-white w-full text-3xl font-bold uppercase text-center mb-4">
          capturing life through every frame
        </h1>
        <p className="text-white text-2xl uppercase text-center">
          newsman&nbsp;|&nbsp;traveller&nbsp;|&nbsp;multimedia
        </p>
      </div>
    </div>
  );
};

export default Hero;
