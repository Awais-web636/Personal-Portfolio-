import React from 'react';
import health from '../assets/health.jpg'
import travel from '../assets/travel.jpg'
import food from '../assets/food.jpg'
const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-orange-400">
      <h2 className="text-center text-4xl font-bold mb-10">My Projects</h2>
      <div className="flex flex-wrap justify-around mt-10">
        {/* Project Card 1 */}
        <div className="bg-white p-6 rounded-lg shadow-lg w-80 h-70 transition-transform transform hover:scale-105 hover:shadow-2xl m-4 cursor-pointer">
          <img src={health} alt="health" className='w-70 h-40' />
          <h3 className="text-2xl font-semibold mb-2">Health Care Website</h3>
          <p className="text-lg">Short description of the project. This project focuses on...</p>
        </div>

        {/* Project Card 2 */}
        <div className="bg-white p-6 rounded-lg shadow-lg w-80 h-70 transition-transform transform hover:scale-105 hover:shadow-2xl m-4 cursor-pointer">
          <img src={travel} alt="health" className='w-70 h-40' />
          <h3 className="text-2xl font-semibold mb-2">Traveling Website</h3>
          <p className="text-lg">Short description of the project. This project aims to...</p>
        </div>

        {/* Project Card 3 */}
        <div className="bg-white p-6 rounded-lg shadow-lg w-80 h-70 transition-transform transform hover:scale-105 hover:shadow-2xl m-4 cursor-pointer">
          <img src={food} alt="health" className='w-70 h-40' />
          <h3 className="text-2xl font-semibold mb-2">Food Website</h3>
          <p className="text-lg">Short description of the project. This project includes...</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;