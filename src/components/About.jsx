import React from "react";
import { motion } from "motion/react";

const About = () => {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center p-4 md:p-12"
      style={{ backgroundImage: `url('/images/childrens.JPG')` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Animated content box */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-3xl bg-black/70 backdrop-blur-lg p-6 md:p-10 rounded-xl space-y-6 text-center"
      >
        <h1 className="text-3xl md:text-5xl font-bold text-white tracking-wide">
          About
        </h1>
        <p className="text-sm md:text-lg leading-relaxed text-gray-200">
          I’m a multimedia journalist and documentary filmmaker from Nepal,
          passionate about telling real stories through images and film. My work
          has been featured in both national and international media  but more
          than recognition, what drives me is the chance to connect people to
          Nepal in all its complexity, beauty, and contradiction. Whether I’m
          filming a festival, following a political movement, or documenting a
          day in someone’s life, I approach every story with empathy and honesty.
          Through my lens, I aim to amplify voices that often go unheard, and to
          preserve moments that might otherwise be forgotten.
        </p>
      </motion.div>
    </div>
  );
};

export default About;
