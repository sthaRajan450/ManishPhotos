import React, { useState } from "react";
import { motion } from "motion/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const images = [
  "/images/dailylife1.jpg",
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

const captions = [
  "Daily Life Moment 1",
  "Drone Shot of Nepal",
  "Mountain Landscape",
  "LGBTQI+ Event",
  "Lifestyle Portrait 1",
  "Lifestyle Portrait 2",
  "Monk in Solitude",
  "Portrait of a Stranger",
  "Protest Scene 1",
  "Protest Scene 2",
  "Protest Scene 3",
];

const Works = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const goLeft = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goRight = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full h-screen relative overflow-hidden bg-black">
      {/* Image Transition */}
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0, x: direction === 1 ? 100 : -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="w-full h-full flex items-center justify-center relative"
      >
        {/* Background Image */}
        <img
          src={images[currentIndex]}
          alt={`img-${currentIndex}`}
          className="w-full h-full object-cover"
          loading="lazy"
        />

        {/* Optional dark overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Caption & Button */}
        <motion.div
          key={`caption-${currentIndex}`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="absolute bottom-10 left-6 md:left-12 text-white z-30"
        >
          <h2 className="text-3xl md:text-6xl font-bold mb-6 drop-shadow-xl">
            {captions[currentIndex]}
          </h2>
          <button
            className="px-6 py-3 text-lg md:text-xl rounded-full bg-white text-black font-medium hover:bg-gray-200 transition-all duration-300"
          >
            Explore More
          </button>
        </motion.div>
      </motion.div>

      {/* Navigation Buttons */}
      <div className="absolute bottom-6 right-6 z-30 flex gap-3">
        <button
          onClick={goLeft}
          className="text-white text-2xl p-3 rounded-full bg-black/50 hover:bg-black/70 transition-all duration-300"
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={goRight}
          className="text-white text-2xl p-3 rounded-full bg-black/50 hover:bg-black/70 transition-all duration-300"
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Works;
