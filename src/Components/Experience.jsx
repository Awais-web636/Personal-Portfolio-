import React from 'react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-100">
      <h2 className="text-center text-4xl font-bold mb-10">My Experience</h2>
      <div className="flex justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg w-96 transition-transform transform  hover:scale-105 cursor-pointer">
          <ul className="list-disc list-inside">
            <li className="mb-4">Frontend Web Development (May 2024 - Aug 2024): Building small projects to gain experience.</li>
            <li className="mb-4">Frontend Web Development (Aug 2024 - Oct 2024): Building small projects to gain experience.</li>
            <li className="mb-4">Frontend Web Development (Sep 2024 - Oct 2024): Building small projects to gain experience.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;