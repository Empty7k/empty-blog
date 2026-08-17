import React from 'react';
import { Link } from 'react-router-dom';
import HeaderGif from '../images/lain-serial-experiments-lain.gif'; // Importando a imagem

function Header() {
  return (
    <header>
      <img src={HeaderGif} alt="Header Gif" style={{ width: '100px', height: 'auto' }} />
      <h1>Empty's brain</h1>
      
      <div className="ticker-wrap">
        <div className="ticker-content">
          WELCOME TO MY BRAIN // NEW UPDATES COMMING SOON // ENJOY THE AESTHETICS //
        </div>
      </div>

      <nav className="glossy-nav">
        <Link to="/" className="glossy-btn">Home</Link>
        <Link to="/favorites" className="glossy-btn">Empty's favorites</Link>
        <Link to="/music" className="glossy-btn">Music playlist</Link>
        <Link to="/library" className="glossy-btn">The empty library</Link>
        <Link to="/gallery" className="glossy-btn">Empty's Gallery</Link>
      </nav>
    </header>
  );
}

export default Header;