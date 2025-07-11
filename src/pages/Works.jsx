import React, { useState } from "react";
import { motion } from "motion/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const images = [
  // "/images/childrens.JPG",
  // "/images/city.jpg",
  "/images/dailylife1.jpg",
  // "/images/dailylife2.jpg",
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
  // "Children's Joy",
  // "Urban Landscape",
  "Daily Life Moment 1",
  // "Daily Life Moment 2",
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
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const goLeft = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goRight = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full h-screen overflow-hidden bg-black relative">
      {/* Image Slider */}
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0, x: direction === 1 ? 100 : -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full h-full flex items-center justify-center relative"
      >
        {/* Image */}
        <img
          src={images[currentIndex]}
          alt={`img-${currentIndex}`}
          className="w-full h-full object-cover"
          loading="lazy"
        />

        {/* Dark overlay */}
        {/* <div className="absolute inset-0 bg-black bg-opacity-30 z-20"></div>  */}

        <motion.div
          key={`caption-${currentIndex}`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="absolute bottom-10 left-10 text-white z-30"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
            {captions[currentIndex]}
          </h2>

          <button
            className="px-6 py-3 text-lg md:text-xl bg-gradient-to-r from-black/80 to-black/60 text-white rounded-full shadow-lg hover:scale-105 transition-all duration-300 hover:from-black hover:to-black"
            // onClick={() => alert(`Exploring: ${captions[currentIndex]}`)}
          >
            Explore More
          </button>
        </motion.div>
      </motion.div>

      {/* Navigation Buttons at bottom-right */}
      <div className="absolute bottom-8 right-8 z-30 flex gap-4">
        <button
          onClick={goLeft}
          className="text-white text-2xl   shadow-lg transition-all duration-300 hover:scale-110 hover:bg-white/20"
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={goRight}
          className="text-white text-2xl   shadow-lg transition-all duration-300 hover:scale-110 hover:bg-white/20"
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Works;
