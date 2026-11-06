import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import HeaderGif from '../images/favorites-speech-bubble.gif';
import Animes from '../images/animes.gif';
import Games from '../images/games.gif';
import Series from '../images/series.gif';
import Youtube from '../images/youtube.gif';
import Manga from '../images/manga.gif';
import './Favorites.css';

const directories = [
  {
    id: 'anime', label: 'ANIME', image: Animes, alt: 'Animes',
    entries: [
      { name: 'Naruto' }, { name: 'Hunter x Hunter' }, { name: 'Code Geass' },
      { name: 'Saiki Kusuo' }, { name: '91 Days' }, { name: 'Shigatsu wa kimi no Uso' },
      { name: 'One Punch Man' }, { name: 'Cyberpunk: Edgerunners' },
    ],
  },
  {
    id: 'games', label: 'GAMES', image: Games, alt: 'Games',
    entries: [
      { name: 'Need for Speed Underground 1' }, { name: 'Celeste' }, { name: 'GTA San Andreas' },
      { name: 'Dungeon Hunter 5 (RIP)' }, { name: "peter jackson's king kong the official game of the movie (PS2)" },
      { name: 'Stardew Valley' }, { name: 'CS:GO (RIP)' }, { name: "Hellblade: Senua's Sacrifice" },
    ],
  },
  {
    id: 'series', label: 'SERIES', image: Series, alt: 'Series',
    entries: [
      { name: 'Breaking Bad' }, { name: 'Better Call Soul' }, { name: 'Cobra Kai', route: '/cobrakai' },
      { name: 'Bojack Horseman' }, { name: 'Rick and Morty' }, { name: 'The Big Bang Theory' }, { name: 'The Office' },
    ],
  },
  {
    id: 'youtube', label: 'YOUTUBE', image: Youtube, alt: 'youtubes',
    entries: [
      { name: 'Ludoviajante', href: 'https://www.youtube.com/@ludoviajante' },
      { name: 'EsterNaMente', href: 'https://www.youtube.com/@esternamente' },
      { name: 'Dyllan Johnny', href: 'https://www.youtube.com/@dyllanjohnny' },
      { name: 'orochidois', href: 'https://www.youtube.com/@orochidois1692' },
      { name: 'Broxada Sinistra', href: 'https://www.youtube.com/@BroxadaSinistra' },
      { name: 'Baka Gaijin', href: 'https://www.youtube.com/@BakaGaijinn' },
      { name: 'jvscholz', href: 'https://www.youtube.com/@jvscholz/videos' },
    ],
  },
  {
    id: 'manga', label: 'MANGA', image: Manga, alt: 'manga',
    entries: [
      { name: 'Oyasumi Punpun' }, { name: 'Shingeki no Kyojin' }, { name: 'ReLife' },
      { name: 'The Beginning After the End' }, { name: 'Solanin' },
    ],
  },
];

function Directory({ directory }) {
  return (
    <section className="favorites-directory" id={directory.id} aria-labelledby={`${directory.id}-title`}>
      <div className="favorites-titlebar">
        <h2 id={`${directory.id}-title`}>DIR: /{directory.label}_ARCHIVE</h2>
        <span aria-hidden="true">[−] [□] [×]</span>
      </div>
      <div className="favorites-directory-body">
        <div className="favorites-directory-header">
          <img src={directory.image} alt={directory.alt} />
          <p>TYPE: {directory.label} <span>|</span> STATUS: ARCHIVED <span>|</span> LAST UPDATED: 2026</p>
        </div>
        <ul className="favorites-entries">
          {directory.entries.map((entry, index) => (
            <li key={entry.name}>
              <span className="favorites-entry-number" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
              <span className="favorites-entry-name">
                {entry.href ? <a href={entry.href} target="_blank" rel="noopener noreferrer">{entry.name}</a> : entry.name}
              </span>
              {entry.route && <Link className="favorites-open" to={entry.route}>[ OPEN_SHRINE.EXE ↗ ]<span className="favorites-sr-only"> Cobra Kai</span></Link>}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Favorites() {
  useEffect(() => {
    const favicon = document.querySelector("link[rel='icon']");
    if (favicon) favicon.href = 'images/favicon-lainhaha.ico';
  }, []);

  useEffect(() => {
    document.title = "Empty's Brain | Favorites";
  }, []);

  return (
    <div id="favorites" className="favorites-archive">
      <div className="favorites-intro">
        <div>
          <p className="favorites-path">PERSONAL_DATABASE / INDEX</p>
          <h1>Empty's favorites</h1>
          <p>some of my favorite things, without order and maybe missing something because my memory is not the best</p>
        </div>
        <img src={HeaderGif} alt="Header Gif" />
      </div>

      <nav className="favorites-index" aria-label="Favorites directories">
        <span>PERSONAL_DATABASE/</span>
        {directories.map((directory) => <a key={directory.id} href={`#${directory.id}`}>[{directory.id}/]</a>)}
      </nav>

      <div className="favorites-directories">
        {directories.map((directory) => <Directory key={directory.id} directory={directory} />)}
      </div>
    </div>
  );
}

export default Favorites;
