import React, { useState } from 'react';
import { Link } from "react-router-dom";

import Estrela from '../assets/imagens/Icon_Star.png'
import Call from '../assets/imagens/Icon_Call.png'
import Time from '../assets/imagens/Icon_Time.png'

import './styles/HamburgerMenu.css';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Ícone para abrir o menu */}
      {!isOpen && (
        <div className="hamburger-icon" onClick={toggleMenu}>
          ☰ {/* Ícone de menu */}
        </div>
      )}

      {/* Menu lateral */}
      {isOpen && (
        <nav className="menu">
          <ul>
          <div className="close-icon" onClick={toggleMenu}>
            <div className="Title_close-icon">
              <span>☰</span><h1>Categorias</h1> 
            </div>
            <hr />
          </div>
              <li><Link to="/NoticiasPopulares" className='Links'><img src={Estrela} alt="" className='Icons_Menu'/><h1>Populares</h1></Link></li>
              <li><Link to="/NoticiasNovidade" className='Links'><img src={Call} alt="" className='Icons_Menu'/><h1>Novidades</h1></Link></li>
              <li><Link to="/NoticiasRecente" className='Links'><img src={Time} alt="" className='Icons_Menu'/><h1>Recentes</h1></Link></li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default HamburgerMenu;