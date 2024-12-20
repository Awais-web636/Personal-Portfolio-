import React from 'react';
import Slider from 'react-slick';
import JohnDoe from '../assets/John Doe.jpeg';
import JaneSmith from '../assets/Jane Smith.jpeg';
import AliceJohnson from '../assets/Alice Johnson.jpeg';
import BobBrown from '../assets/BobBrown.jpeg';
import CharlieDavis from '../assets/CharlieDavis.jpeg';
import EmilyClark from '../assets/EmilyClark.jpeg';

const testimonials = [
  {
    name: "John Doe",
    feedback: "This service was fantastic! Highly recommend.",
    position: "CEO, Company A",
    image: JohnDoe,
  },
  {
    name: "Jane Smith",
    feedback: "A wonderful experience from start to finish.",
    position: "CTO, Company B",
    image: JaneSmith,
  },
  {
    name: "Alice Johnson",
    feedback: "Professional and efficient. Will work with them again.",
    position: "Designer, Company C",
    image: AliceJohnson,
  },
  {
    name: "Bob Brown",
    feedback: "Exceeded my expectations in every way.",
    position: "Manager, Company D",
    image: BobBrown,
  },
  {
    name: "Charlie Davis",
    feedback: "A reliable partner for our projects.",
    position: "Developer, Company E",
    image: CharlieDavis,
  },
  {
    name: "Emily Clark",
    feedback: "Fantastic results and great communication.",
    position: "Marketing, Company F",
    image: EmilyClark,
  },
];
// npm install react-slick slick-carousel
const Testimonial = () => {
  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: "0px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "0px",
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "0px",
          dots: true,
        },
      },
    ],
  };

  return (
    <div id="testimonial" className="bg-gradient-to-r from-orange-600 to-yellow-500 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-8">Testimonials</h2>
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="px-4" // Add horizontal padding for spacing between cards
            >
              <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 h-64 flex flex-col justify-between cursor-pointer">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-gray-500">{testimonial.position}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.feedback}"</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;
