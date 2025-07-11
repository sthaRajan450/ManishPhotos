import React from "react";

const Hero = () => {
  return (
    <div
      className="w-full h-screen bg-cover bg-center bg-no-repeat flex flex-col items-center justify-end relative overflow-hidden"
      style={{ backgroundImage: `url('/images/hero.jpg')` }}
    >
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 w-11/12 max-w-3xl p-6 rounded-lg text-center mb-20">
        <h1 className="text-white text-3xl md:text-5xl font-bold uppercase mb-6 leading-snug">
          Capturing life through every frame
        </h1>
        <p className="text-white text-lg md:text-2xl uppercase tracking-wide">
          newsman &nbsp;|&nbsp; traveller &nbsp;|&nbsp; multimedia
        </p>
      </div>
    </div>
  );
};

export default Hero;
