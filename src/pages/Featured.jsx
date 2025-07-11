import React from "react";

const workedLogos = [
  {
    src: "/worked/kathmandupress.png",
    alt: "Kathmandu Press",
    link: "https://kathmandupress.com/author/734",
  },
  {
    src: "/worked/nepallive.png",
    alt: "Nepal Live",
    link: "https://www.nepallivetoday.com/author/manish-aryal/",
  },
  {
    src: "/worked/neapllivetoday.webp",
    alt: "Nepal Live Today",
    link: "https://www.nepallivetoday.com/",
  },
  {
    src: "/worked/npl.png",
    alt: "NPL Logo",
    link: "https://www.nepalphotolibrary.com/",
  },
];

const featuredLogos = [
  {
    src: "/featured/ratopati.png",
    alt: "Ratopati",
    link:
      "https://www.ratopati.com/search?query=%e0%a4%ae%e0%a4%a8%e0%a4%bf%e0%a4%b7+%e0%a4%85%e0%a4%b0%e0%a5%8d%e0%a4%af%e0%a4%be%e0%a4%b2",
  },
  {
    src: "/featured/setopati.svg",
    alt: "Setopati",
    link: "https://www.setopati.com/byline/%e0%a4%ae%e0%a4%a8%e0%a4%bf%e0%a4%b7%20%e0%a4%85%e0%a4%b0%e0%a5%8d%e0%a4%af%e0%a4%be%e0%a4%b2",
  },
  { src: "/featured/ronb.jpg", alt: "RONB" },
];

const Services = () => {
  const renderLogos = (logos) =>
    logos.map(({ src, alt, link }, idx) =>
      link ? (
        <a
          key={idx}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="transition duration-300 hover:scale-105"
        >
          <img
            src={src}
            alt={alt}
            className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 object-contain"
          />
        </a>
      ) : (
        <img
          key={idx}
          src={src}
          alt={alt}
          className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 object-contain transition duration-300 hover:scale-105"
        />
      )
    );

  return (
    <div className="w-full min-h-screen bg-white text-black flex flex-col items-center pt-20 justify-center p-6 space-y-16">
      {/* Previously Worked Section */}
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">
          Previously Worked
        </h1>
        <div className="flex flex-wrap justify-center gap-6 sm:gap-10 md:gap-12 max-w-5xl mx-auto mb-8">
          {renderLogos(workedLogos)}
        </div>
        <button
          className="px-5 py-3 text-base md:text-lg bg-black text-white rounded-full shadow-md hover:scale-105 transition duration-300"
        >
          See More
        </button>
      </div>

      {/* Featured In Section */}
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Work Featured In</h1>
        <div className="flex flex-wrap justify-center gap-6 sm:gap-10 md:gap-12 max-w-5xl mx-auto mb-8">
          {renderLogos(featuredLogos)}
        </div>
        <button
          className="px-5 py-3 text-base md:text-lg bg-black text-white rounded-full shadow-md hover:scale-105 transition duration-300"
        >
          See More
        </button>
      </div>
    </div>
  );
};

export default Services;
