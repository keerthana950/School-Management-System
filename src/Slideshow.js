// // Slideshow.js
import React, { useState, useEffect } from 'react';
import './Slideshow.css';

const slides = [
  {
    image: "https://christujayanthi.ac.in/wp-content/uploads/2015/08/school_building.jpg",
    title: "Inspiring Minds, Transforming Lives",
  },
  {
    image: "https://vlkarchitects.com/assets/insights_img/Braswell_HighSchool_Lab.jpg",
    title: "Experimental Learning",
  },
  {
    image: "https://corsivacdncontent.blob.core.windows.net/thecage/kallang/kl-indoor-cricket-4.jpg",
    title: "Extracurricular Activities",
  }
];

const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slideshow-container">
      <img src={slides[currentSlide].image} alt="Slide" className="slide-image" />
      <div className="slide-content">
        <h2>{slides[currentSlide].title}</h2>
        <p>{slides[currentSlide].description}</p>
      </div>
    </div>
  );
};

export default Slideshow;
