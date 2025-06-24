import React from 'react';
import Demetrius from '../images/xbox-demetrious-johnson.gif';
import Thom from '../images/thom-yorke-normal.gif'; // Importando a imagem Thom, se necessário

function Home() {
    return (
        <div id='home' className='page-content' >

            <div className='neon-text'>
                <h2>Hi, I'm Empty, welcome</h2>
                <p>Instagram is lame, so I *tried* to make a personal blog with a 2010s style...</p>
                <p>Here, you’ll get to know me a little better&#128568;</p>
            </div>
            <br />
            <img
                src="/images/im-cringe.gif"  // Caminho a partir da pasta public
                alt="GIF retrô"
                style={{ width: "400px", marginTop: "20px", marginBottom: "20px" }} // Estilo opcional
            />
            <br />
            <div className="simple-list">
            
                <h3>Some things I like that make me happy</h3>
                <ul>
                    <li>Philophosy</li>
                    <li>UFC</li>
                    <li>Edits</li>
                    <li>IA's</li>
                    <li>PS Vita</li>
                    <li>Kindle</li>
                    <li>Spotfy</li>
                    <li>Brazilian Jiu-Jitsu</li>
                    <li>Lain</li>
                    <li>Counter Strike</li>
                    <li>Anime</li>

                </ul>
            </div>
            <br />
            <img src={Thom} alt="Header Gif" style={{ width: '400px', height: 'auto' }} />
            <br/>
            <div id='find-me' className='post-it'>
                <h2>places to find me:</h2>
                <ul>
                    <li><a href="https://github.com/Empty7k" target="_blank" rel="noopener noreferrer">Github</a></li>
                    <li><a href="https://www.skoob.com.br/usuario/9332058" target="_blank" rel="noopener noreferrer">Skoob</a></li>
                    <li><a href="https://letterboxd.com/Empty7k/" target="_blank" rel="noopener noreferrer">LetterBoxd</a></li>
                    <li><a href="https://anilist.co/user/dalex/" target="_blank" rel="noopener noreferrer">Anilist</a></li>
                    <li><a href="https://www.instagram.com/odavid_alex/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Home;    