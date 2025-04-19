import React from 'react';
import { useEffect } from 'react';

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
        <li>A história sem fim (Big Rush)</li>
       
      </ul>

      <h2>Favorite Artists</h2>
      <ul>
        <li>RadioHead</li>
        <li>Pusher174</li>
        <li>Dragon Boys (before phonk songs)</li>
        <li>Alice in Chains</li>
        <li>Nirvana</li>
        <li>Linkin Park</li>
        <li>Big Rush</li>
      </ul>


    </div>
  );
}

export default Music;