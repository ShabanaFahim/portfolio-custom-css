import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 flex items-center justify-between py-4">
        {/* Logo */}
        <div className="text-2xl font-bold">Shabana Faheem</div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8 text-lg font-medium">
          <a href="#hero" className="hover:text-blue-400">
            Home
          </a>
          <a href="#about" className="hover:text-blue-400">
            About
          </a>
          <a href="#projects" className="hover:text-blue-400">
            Projects
          </a>
          <a href="#skills" className="hover:text-blue-400">
            Skills
          </a>
          <a href="#contact" className="hover:text-blue-400">
            Contact
          </a>
        </div>

        {/* Menu Icon for Mobile */}
        <div className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? (
            <AiOutlineClose size={30} />
          ) : (
            <AiOutlineMenu size={30} />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-700 text-lg font-medium py-4">
          <a
            href="#hero"
            className="block py-2 px-4 hover:bg-gray-600"
            onClick={toggleMenu}
          >
            Home
          </a>
          <a
            href="#about"
            className="block py-2 px-4 hover:bg-gray-600"
            onClick={toggleMenu}
          >
            About
          </a>
          <a
            href="#projects"
            className="block py-2 px-4 hover:bg-gray-600"
            onClick={toggleMenu}
          >
            Projects
          </a>
          <a
            href="#skills"
            className="block py-2 px-4 hover:bg-gray-600"
            onClick={toggleMenu}
          >
            Skills
          </a>
          <a
            href="#contact"
            className="block py-2 px-4 hover:bg-gray-600"
            onClick={toggleMenu}
          >
            Contact
          </a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
