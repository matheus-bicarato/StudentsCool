// src/Carousel.js
import React, { useState, useEffect } from 'react';
import './styles/Carousel.css';

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 3000); // Muda a cada 3 segundos

    return () => clearInterval(intervalId); // Limpa o intervalo ao desmontar
  }, [items.length]);

  return (
    <div className="carousel">
      <div className="carousel-wrapper" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {items.map((item, index) => (
          <div className="carousel-item" key={index}>
            <img src={item} alt={`Slide ${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
