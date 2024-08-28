import React, { useState, useEffect } from "react";
import "./styles/Carousel.css";

// Importando as imagens locais
import banner1 from "../assets/imagens/banner_atencao.png";
import banner2 from "../assets/imagens/banner_cardapio.png";
import banner3 from "../assets/imagens/banner_matricula.png";
import banner4 from "../assets/imagens/banner_atencao.png";
import banner5 from "../assets/imagens/banner_cardapio.png";
import banner6 from "../assets/imagens/banner_matricula.png";

const banners = [
  { id: 1, src: banner1, alt: "Banner 1" },
  { id: 2, src: banner2, alt: "Banner 2" },
  { id: 3, src: banner3, alt: "Banner 3" },
  { id: 4, src: banner4, alt: "Banner 4" },
  { id: 5, src: banner5, alt: "Banner 5" },
  { id: 6, src: banner6, alt: "Banner 6" },
];

const Carousel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 2500); // Altere o tempo aqui conforme necessário

    return () => clearInterval(intervalId);
  }, []);

  const displayedBanners = [
    banners[index % banners.length],
    banners[(index + 1) % banners.length],
    banners[(index + 2) % banners.length],
  ];

  return (
    <div className="carousel-container">
      {displayedBanners.map((banner) => (
        <div key={banner.id} className="carousel-item">
          <img src={banner.src} alt={banner.alt} className="carousel-image" />
        </div>
      ))}
    </div>
  );
};

export default Carousel;
