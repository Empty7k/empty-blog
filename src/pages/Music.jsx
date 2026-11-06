import React, { useEffect } from 'react';
import SpotifyLogo from '../images/spotify-logo.gif';
import './Music.css';

const artists = [
  'RadioHead', 'Pusher174', 'Dragon Boys (before phonk songs)', 'Alice in Chains',
  'Nirvana', 'Linkin Park', 'Big Rush', 'Raul Seixas', 'Deftones',
  'Facção Central', 'Duzz', 'Link do Zap',
];

const albums = [
  ['In Rainbows', 'RadioHead'], ['The Bends', 'RadioHead'], ['OK Computer', 'RadioHead'],
  ['Cérebro Dormente', 'Pusher174'], ['Missão suicida', 'Pusher 174'], ['Acústico Duzz', 'Duzz'],
  ['Kalledy', 'Link do Zap'], ['Meteora', 'Linkin Park'],
];

function WindowTitle({ children }) {
  return <div className="audio-titlebar"><span>{children}</span><span aria-hidden="true">[−] [□] [×]</span></div>;
}

function Music() {
  useEffect(() => {
    const favicon = document.querySelector("link[rel='icon']");
    if (favicon) favicon.href = 'images/favicon-thom.ico';
  }, []);

  useEffect(() => {
    document.title = "Empty's Brain | Music";
  }, []);

  return (
    <div id="music" className="audio-archive">
      <div className="audio-intro">
        <p className="audio-path">AUDIO_ARCHIVE.LOG / INDEX</p>
        <h1>Musics</h1>
        <p>My music taste changes a lot, so don’t take this too seriously</p>
      </div>

      <div className="audio-layout">
        <section className="audio-window" aria-labelledby="audio-artists-title">
          <WindowTitle><span id="audio-artists-title">FAVORITES / ARTIST_INDEX.LOG</span></WindowTitle>
          <div className="audio-window-body">
            <div className="audio-list-heading"><span>Favorites</span><span>TYPE: ARTIST</span></div>
            <ol className="audio-playlist">
              {artists.map((artist, index) => (
                <li key={artist}><span className="audio-index">[{String(index + 1).padStart(2, '0')}]</span><span className="audio-artist">{artist}</span><span className="audio-dots" aria-hidden="true" /><span className="audio-file">.LOG</span></li>
              ))}
            </ol>
            <div className="audio-list-footer">{String(artists.length).padStart(2, '0')} ENTRIES / PERSONAL ARCHIVE</div>
          </div>
        </section>

        <aside className="audio-window audio-player" aria-label="Decorative audio player">
          <WindowTitle>SIGNAL_PLAYER.EXE</WindowTitle>
          <div className="audio-window-body">
            <p className="audio-label">CURRENTLY LISTENING</p>
            <div className="audio-display"><span>NO SIGNAL SELECTED</span><strong>--:--</strong><span aria-hidden="true">▁ ▃ ▂ ▅ ▃ ▆ ▂ ▄ ▁ ▅ ▃</span></div>
            <div className="audio-controls" aria-hidden="true"><span>|◀◀</span><span>▶</span><span>■</span><span>▶▶|</span></div>
            <p className="audio-player-note">PLAYER DISPLAY / VISUAL ONLY</p>
            <div className="audio-player-rule" />
            <p className="audio-spotify-note">If you want, you can go to my Spotify by clicking the logo</p>
            <a className="audio-external" href="https://open.spotify.com/user/31lzvkfpkjx7tyjpaygeubzk2vrm?si=aacd095e305d425d" target="_blank" rel="noopener noreferrer"><img src={SpotifyLogo} alt="" /> <span>[ EXTERNAL_SIGNAL: SPOTIFY.EXE ↗ ]</span></a>
          </div>
        </aside>
      </div>

      <section className="audio-window audio-albums" aria-labelledby="audio-albums-title">
        <WindowTitle><span id="audio-albums-title">FAVORITE_ALBUMS / DIRECTORY</span></WindowTitle>
        <div className="audio-window-body">
          <div className="audio-list-heading"><span>Favorite Albums</span><span>TYPE: ALBUM</span></div>
          <ul className="audio-album-list">
            {albums.map(([album, artist], index) => (
              <li key={album}><span className="audio-folder" aria-hidden="true">{String(index + 1).padStart(2, '0')}<small>DIR</small></span><span><strong>{album}</strong><small>({artist})</small></span></li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Music;
