import React from 'react';
import Pic from '../assets/pic.jpg';

const Hero = () => {
  return (
    <section id="home" className="flex h-screen justify-between bg-gradient-to-r from-orange-400 to-orange-600">
      {/* Left Side: Content */}
      <div className="w-1/2 flex items-center justify-center px-8">
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Hello, I'm Awais</h1>
          <p className="text-xl mb-6">A Passionate Frontend Web Developer</p>
          <a href="#contact">
            <button className="mt-4 bg-orange-700 text-white px-6 py-3 rounded-lg shadow-lg transition duration-300 ease-in-out hover:bg-orange-800 hover:shadow-xl">
              Hire Me
            </button>
          </a>
        </div>
      </div>

      {/* Right Side: Image */}
      <div className="w-1/4 flex items-center justify-center">
        <img
          src={Pic}
          alt="Awais"
          className="w-[70%] rounded-lg shadow-lg h-auto object-cover transition-transform duration-500 ease-in-out transform hover:scale-105"
        />
      </div>
    </section>
  );
};

export default Hero;