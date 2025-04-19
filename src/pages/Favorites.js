import React from 'react';
import { useEffect } from 'react';
import HeaderGif from '../images/favorites-speech-bubble.gif';

function Favorites() {
    useEffect(() => {
        const favicon = document.querySelector("link[rel='icon']");
        if (favicon) favicon.href = "images/favicon-lainhaha.ico"; // Caminho do novo favicon
      }, []);

    useEffect(() => {
        document.title = "Empty's Brain | Favorites";
    }, []);
    return (
        <div id='favorites' className='page-content'>
            <img src={HeaderGif} alt="Header Gif" style={{ width: '400px', height: 'auto' }} />
            <p>some of my favorite things, without order and maybe missing something because my memory is not the best</p>

            <h2>Animes</h2>
            <ul>
                <li>Naruto</li>
                <li>Hunter x Hunter</li>
                <li>Code Geass</li>
                <li>Saiki Kusuo</li>
                <li>91 Days</li>
                <li>Shigatsu wa kimi no Uso</li>
                <li>One Punch Man</li>
                <li>Cyberpunk: Edgerunners</li>
            </ul>

            <h2>Games</h2>
            <ul>
                <li>Need for Speed Underground 1</li>
                <li>Celeste</li>
                <li>GTA San Andreas</li>
                <li>Dungeon Hunter 5 (RIP)</li>
                <li>peter jackson's king kong the official game of the movie (PS2)</li>
                <li>Stardew Valley</li>
                <li>CS:GO (RIP)</li>
                <li>Hellblade: Senua's Sacrifice</li>
            </ul>

            <h2>Series</h2>
            <ul>
                <li>Breaking Bad</li>
                <li>Better Call Soul</li>
                <li><a href='/cobrakai'>Cobra Kai</a></li>
                <li>Bojack Horseman</li>
                <li>Rick and Morty</li>
                <li>The Big Bang Theory</li>
                <li>The Office</li>
            </ul>

            <h2>Youtube Channels</h2>
            <ul>
                <li><a href="https://www.youtube.com/@ludoviajante" target="_blank" rel="noopener noreferrer">Ludoviajante</a></li>
                <li><a href="https://www.youtube.com/@esternamente" target="_blank" rel="noopener noreferrer">EsterNaMente</a></li>
                <li><a href="https://www.youtube.com/@dyllanjohnny" target="_blank" rel="noopener noreferrer">Dyllan Johnny</a></li>
                <li><a href="https://www.youtube.com/@orochidois1692" target="_blank" rel="noopener noreferrer">orochidois</a></li>
                <li><a href="https://www.youtube.com/@BroxadaSinistra" target="_blank" rel="noopener noreferrer">Broxada Sinistra</a></li>
                <li><a href="https://www.youtube.com/@BakaGaijinn" target="_blank" rel="noopener noreferrer">Baka Gaijin</a></li>
                <li><a href="https://www.youtube.com/@jvscholz/videos" target="_blank" rel="noopener noreferrer">jvscholz</a></li>
            </ul>

            <h2>Mangás</h2>
            <ul>
                <li>Oyasumi Punpun</li>
                <li>Shingeki no Kyojin</li>
                <li>ReLife</li>
                <li>The Beginning After the End</li>
                <li>Solanin</li>
            </ul>

        </div>
    );
}

export default Favorites;