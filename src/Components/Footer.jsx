import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-orange-600 to-yellow-500 h-screen pt-12 pb-6">
      <div className="container mx-auto px-4">
        {/* Essential Information */}
        <div className="flex flex-wrap justify-center mb-4">
          <div className="w-full md:w-1/2 xl:w-1/3 p-6">
            <h5 className="uppercase text-gray-600 mb-2">About Me</h5>
            <p className="text-gray-600 text-sm">
              I'm a passionate frontend web developer with a strong focus on building responsive, scalable, and maintainable applications.
            </p>
          </div>

          <div className="w-full md:w-1/2 xl:w-1/3 p-6">
            <h5 className="uppercase text-gray-600 mb-2">Get in Touch</h5>
            <p className="text-gray-600 text-sm">
              Feel free to reach out to me for any questions, collaborations, or just to say hi!
            </p>
            <a href="mailto:awais@example.com" className="text-orange-600 hover:text-orange-800">
              muhammadawais1820@gmail.com
            </a>
          </div>

          <div className="w-full md:w-1/2 xl:w-1/3 p-6">
            <h5 className="uppercase text-gray-600 mb-2">Follow Me</h5>
            <ul className="list-none mb-0">
              <li className="mb-2">
                <a href="https://twitter.com/awais" className="text-orange-600 hover:text-orange-800">
                  Twitter
                </a>
              </li>
              <li className="mb-2">
                <a href="https://github.com/Awais-web636" className="text-orange-600 hover:text-orange-800">
                  GitHub
                </a>
              </li>
              <li className="mb-2">
                <a href="https://www.linkedin.com/in/muhammad-awais-577958316/" className="text-orange-600 hover:text-orange-800">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Notice */}
        <p className="text-gray-600 text-sm text-center">
          &copy; 2024 Awais. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;