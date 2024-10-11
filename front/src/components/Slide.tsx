import React from 'react';
import { Link } from 'react-router-dom';

//CSS
import '../components/styles/Slide.css';

//Dependencias API npm install react-responsive-carousel
import { Carousel } from 'react-responsive-carousel';

// Importa o componente Carousel da biblioteca react-responsive-carousel
import 'react-responsive-carousel/lib/styles/carousel.min.css';

// Declaração do componente funcional Carousel_home, que recebe as propriedades 'images' e 'interval'
const Slide = ({ images, interval = 2300 }) => {
  return (
      <Carousel
        autoPlay
        infiniteLoop
        interval={interval}
        showArrows
        showStatus
        showIndicators
        showThumbs
        stopOnHover
        swipeable
      >
        {images.map((image, index) => (
          <div className="image-wrapper">
    <div className=""><Link to="/Cadastro" className="area_para_clicar"></Link></div>
    <img src={image} alt={`Slide ${index}`} className="carousel-image" />
    
</div>
        ))}
      </Carousel>
  );
};

export default Slide;