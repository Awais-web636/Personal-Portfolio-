import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Hero from './Components/Hero';
import Services from './Components/Services';
import Projects from './Components/Projects';
import Experience from './Components/Experience';
import Testimonial from './Components/Testimonial';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Contact from './Components/Contact';
import Footer from './Components/Footer';
const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Hero />} />
        <Route path='/services' element={<Services />} />
      </Routes>
      <Services/>
      <Projects/>
      <Experience/>
      <Testimonial/>
      <Contact/>
      <Footer/>
    </Router>
  );
}

export default App;