import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-orange-600 to-yellow-500 p-4 fixed top-0 w-full z-10">
      <nav className="flex justify-around items-center">
        <h1 className="text-white text-2xl">Awais</h1>
        <ul className="flex space-x-5">
          <li>
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="text-white hover:underline transition duration-200 cursor-pointer"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="services"
              smooth={true}
              duration={500}
              className="text-white hover:underline transition duration-200 cursor-pointer"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="text-white hover:underline transition duration-200 cursor-pointer"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="experience"
              smooth={true}
              duration={500}
              className="text-white hover:underline transition duration-200 cursor-pointer"
            >
              Experience
            </Link>
          </li>
          <li>
            <Link
              to="testimonial"
              smooth={true}
              duration={500}
              className="text-white hover:underline transition duration-200 cursor-pointer"
            >
              Testimonial
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="text-white hover:underline transition duration-200 cursor-pointer"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;