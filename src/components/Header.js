import React from 'react';
import HeaderGif from '../images/lain-serial-experiments-lain.gif'; // Importando a imagem

function Header() {
  return (
    <header>
      <img src={HeaderGif} alt="Header Gif" style={{ width: '100px', height: 'auto' }} />
      <h1>Empty's brain</h1>
      <hr className='divider'/>
      <nav>
        <a href="/">Home</a> | 
        <a href="/favorites">Empty's favorites</a> |
        <a href="/music">Music playlist</a> |
      </nav>
      <hr className='divider'/>
    </header>
  );
}

export default Header;