import React from 'react';
import { FaPaintBrush, FaCode, FaSearch } from 'react-icons/fa'; // Importing icons from react-icons

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-100">
      <h2 className="text-center text-4xl font-bold mb-10 text-gray-800">My Services</h2>
      <div className="flex flex-wrap justify-center mt-10">
        {/* Web Design Service */}
        <div className="bg-white p-8 rounded-lg shadow-lg w-80 h-80 transition-transform transform hover:scale-105 hover:shadow-2xl cursor-pointer mb-6 mx-4">
          <div className="flex items-center justify-center mb-4 text-orange-600">
            <FaPaintBrush className="w-12 h-12" />
          </div>
          <h3 className="text-2xl font-semibold mb-4 text-center">Web Design</h3>
          <p className="text-lg text-gray-600 text-center">
            Creating beautiful and functional websites that engage users and drive conversions.
          </p>
        </div>

        {/* Web Development Service */}
        <div className="bg-white p-8 rounded-lg shadow-lg w-80 h-80 transition-transform transform hover:scale-105 hover:shadow-2xl cursor-pointer mb-6 mx-4">
          <div className="flex items-center justify-center mb-4 text-orange-600">
            <FaCode className="w-12 h-12" />
          </div>
          <h3 className="text-2xl font-semibold mb-4 text-center">Web Development</h3>
          <p className="text-lg text-gray-600 text-center">
            Building responsive and scalable web applications tailored to your business needs.
          </p>
        </div>

        {/* SEO Optimization Service */}
        <div className="bg-white p-8 rounded-lg shadow-lg w-80 h-80 transition-transform transform hover:scale-105 hover:shadow-2xl cursor-pointer mb-6 mx-4">
          <div className="flex items-center justify-center mb-4 text-orange-600">
            <FaSearch className="w-12 h-12" />
          </div>
          <h3 className="text-2xl font-semibold mb-4 text-center">SEO Optimization</h3>
          <p className="text-lg text-gray-600 text-center">
            Improving website visibility on search engines to attract more organic traffic.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;