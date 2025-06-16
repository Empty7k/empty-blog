import React from 'react';
import { useEffect } from 'react';
import SpotfyLogo from '../images/spotify-logo.gif';

function Music() {
  useEffect(() => {
    const favicon = document.querySelector("link[rel='icon']");
    if (favicon) favicon.href = "images/favicon-thom.ico"; // Caminho do novo favicon
  }, []);

  useEffect(() => {
    document.title = "Empty's Brain | Music";
  }, []);
  return (
    <div id='music' className='page-content'>


      <h1>Musics</h1>

      <p>My music taste changes a lot, so don’t take this too seriously</p>

      <h2>Favorites </h2>
      <ul>
        <li>RadioHead</li>
        <li>Pusher174</li>
        <li>Dragon Boys (before phonk songs)</li>
        <li>Alice in Chains</li>
        <li>Nirvana</li>
        <li>Linkin Park</li>
        <li>Big Rush</li>
        <li>Raul Seixas</li>
        <li>Deftones</li>
        <li>Facção Central</li>
        <li>Duzz</li>
      </ul>

      <h2>Favorite Albums</h2>
      <ul>
        <li>In Rainbows (RadioHead)</li>
        <li>The Bends (RadioHead)</li>
        <li>OK Computer (RadioHead)</li>
        <li>Cérebro Dormente (Pusher174)</li>
        <li>Missão suicida (Pusher 174)</li>
        <li>Acústico Duzz (Duzz)</li>
        <li>Kalledy (Link do Zap)</li>
        <li>Meteora (Linkin Park)</li>

      </ul>

      If you want, you can go to my Spotify by clicking the logo
      <br />
      <a href="https://open.spotify.com/user/31lzvkfpkjx7tyjpaygeubzk2vrm?si=aacd095e305d425d" target="_blank" rel="noopener noreferrer"><img src={SpotfyLogo} alt="Header Gif" style={{ width: '150px', height: 'auto' }} /></a>


    </div>
  );
}

export default Music;