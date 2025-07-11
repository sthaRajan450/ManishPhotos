import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { to: "#home", name: "Home" },
    { to: "#about", name: "About" },
    { to: "#works", name: "Works" },
    { to: "#featured", name: "Featured" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur bg-black/30 shadow-md">
      <div className="max-w-screen-xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center space-x-2">
          <span className="text-3xl font-extrabold font-Comfoter text-white tracking-wider">
            Manish<span className="text-blue-400">Photos</span>
          </span>
        </a>

        {/* Hamburger menu for mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-blue-400"
          aria-controls="navbar-default"
          aria-expanded={menuOpen}
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Desktop Menu */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6 items-center text-lg font-medium">
            {links.map((link, index) => (
              <li key={index}>
                <a
                  href={link.to}
                  className="relative px-2 py-1 text-white hover:text-blue-300 group"
                >
                  {link.name}
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black/80 px-4 pb-4">
          <ul className="flex flex-col space-y-4 text-lg font-medium">
            {links.map((link, index) => (
              <li key={index}>
                <a
                  href={link.to}
                  onClick={() => setMenuOpen(false)}
                  className="block px-2 py-1 text-white hover:text-blue-300"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
