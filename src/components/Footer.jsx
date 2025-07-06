import React, { useEffect, useState } from "react";
import { AiFillInstagram } from "react-icons/ai";
import { IoIosMail } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-gray-900 text-white pt-6 pb-2 px-4">
      <div className="flex flex-col gap-4 items-start md:items-center md:flex-row justify-between max-w-4xl mx-auto">
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

      <div className="mt-6 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Manish Photos. All rights reserved.
      </div>

      {showTopBtn && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition"
          aria-label="Scroll to top"
        >
          <FaArrowUp />
        </button>
      )}
    </footer>
  );
};

export default Footer;
