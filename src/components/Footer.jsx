import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { IoIosMail } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    if (window.fullpage_api) {
      window.fullpage_api.moveTo("home");
    }
  };

  return (
    <footer className="h-screen flex flex-col justify-center items-center bg-gray-900 text-white px-6">
      <div className="max-w-4xl w-full flex flex-col gap-6 md:flex-row md:items-center justify-between">
        <a
          href="https://www.instagram.com/manishphotos_/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-pink-400 transition"
        >
          <AiFillInstagram size={24} />
          <span>@manishphotos_</span>
        </a>

        <a
          href="mailto:manisharphotos@gmail.com"
          className="flex items-center gap-2 hover:text-blue-400 transition"
        >
          <IoIosMail size={24} />
          <span>manisharphotos@gmail.com</span>
        </a>

        <a
          href="https://wa.me/9779847068567"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-green-400 transition"
        >
          <IoLogoWhatsapp size={24} />
          <span>+977 9847068567</span>
        </a>
      </div>

      <div className="mt-8 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Manish Photos. All rights reserved.
      </div>

      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className="mt-8 p-3 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition"
        aria-label="Scroll to top"
      >
        <FaArrowUp />
      </button>
    </footer>
  );
};

export default Footer;
