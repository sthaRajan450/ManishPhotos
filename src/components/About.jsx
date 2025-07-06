import React from "react";
import { motion } from "motion/react";

const images = [
  "/images/childrens.JPG",
  "/images/city.jpg",
  "/images/dailylife1.jpg",
  "/images/dailylife2.jpg",
  "/images/drone.JPG",
  "/images/landscape.jpg",
  "/images/lgbtqi.JPG",
  "/images/lifestyle1.jpg",
  "/images/lifestyle2.jpg",
  "/images/monk.jpg",
  "/images/person.jpg",
  "/images/protest1.jpg",
  "/images/protest2.jpg",
  "/images/protest3.jpg",
];

const About = () => {
  return (
    <div className="w-full h-screen flex flex-col md:flex-row bg-gray-700 overflow-hidden">
      {/* Text side */}
      <div className="w-full md:w-1/2 bg-black text-white flex items-center justify-center p-6 md:p-12">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 md:mb-10">
            About
          </h1>
          <p className="text-base md:text-lg leading-relaxed">
            Multimedia journalist and documentary maker, renowned for capturing
            the cultural, political, religious, and everyday life of Nepal.
            <br />
            <br />
            My work has been featured in prominent national and international
            media outlets, as well as in various publications. Driven by a
            strong sense of storytelling, I use my lens to document Nepal’s
            diverse landscapes and the complexities of its society.
          </p>
        </div>
      </div>

      {/* Images side */}
      <div className="w-full md:w-1/2 overflow-hidden ">
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: "-50%" }}
          transition={{
            duration: 30,
            ease: "linear",
            repeat: Infinity,
          }}
          className="flex flex-wrap"
          style={{ willChange: "transform", transform: "translateZ(0)" }} // add these
        >
          {images.map((src, index) => (
            <img
              key={index}
              className="w-1/2 object-cover"
              src={src}
              alt={`img-${index}`}
              loading="lazy"
              style={{ aspectRatio: "4 / 3" }}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default About;
