import React from 'react';
import { Link } from 'react-router-dom';
import lainGif from '../images/lain-serial-experiments-lain.gif';
import './Home.css';

const elsewhere = [
  ['github', 'https://github.com/Empty7k'],
  ['skoob', 'https://www.skoob.com.br/usuario/9332058'],
  ['letterboxd', 'https://letterboxd.com/Empty7k/'],
  ['anilist', 'https://anilist.co/user/dalex/'],
  ['instagram', 'https://www.instagram.com/odavid_alex/'],
];

function Home() {
  return (
    <>
            <section className="wired-intro">
              <div className="wired-intro-copy">
                <p className="wired-eyebrow"><span>✳</span> A LITTLE CORNER OF THE WEB</p>
                <h1>hello, i'm <em>empty.</em><span className="wired-cursor">_</span></h1>
                <p className="wired-intro-lead">Welcome to my brain.</p>
                <p className="wired-intro-description">Instagram is lame, so I made a little place of my own. A collection of things I love, thoughts I have, and whatever else finds its way here.</p>
                <p className="wired-prompt"><span>guest@empty:~$</span> make yourself at home<span className="wired-blink">_</span></p>
              </div>
              <div className="wired-monitor">
                <div className="wired-monitor-label"><span>01 / SIGNAL MONITOR</span><span className="wired-window-controls" aria-hidden="true"><span>_</span><span>□</span><span>×</span></span></div>
                <div className="wired-monitor-image"><img src={lainGif} alt="Lain in an animated scene" /></div>
                <div className="wired-monitor-footer"><span>INCOMING TRANSMISSION</span><span className="wired-rec">● REC</span><span>▂ ▃ ▅ ▂ ▇ ▄ ▂</span></div>
                <span className="wired-monitor-tag">[ stay a while ]</span>
              </div>
            </section>

            <div className="wired-divider"><span>✳</span><span>YOU'RE CONNECTED TO MY LITTLE WORLD</span><span>✳</span></div>

            <div className="wired-columns">
              <section className="wired-window wired-about">
                <div className="wired-window-bar"><span>▣ &nbsp; ABOUT_ME.TXT</span><span className="wired-window-controls" aria-hidden="true"><span>_</span><span>□</span><span>×</span></span></div>
                <div className="wired-window-content"><p className="wired-small-label">A FEW THINGS THAT MAKE ME HAPPY</p><h2>things i love<span> :</span></h2><p className="wired-interests">My girlfriend(Karine) <i>✳</i> UFC <i>✳</i> Thinkpad <i>✳</i> philosophy <i>✳</i> Nintendo Switch <i>✳</i> Kindle <i>✳</i> music <i>✳</i> Brazilian Jiu-Jitsu <i>✳</i> Coding <i>✳</i> Linux <i>✳</i> anime</p><Link to="/favorites" className="wired-text-link">explore the favorites archive <span>↗</span></Link></div>
              </section>
              <section className="wired-window wired-log">
                <div className="wired-window-bar"><span>▣ &nbsp; LITTLE_TRANSMISSIONS.LOG</span><span className="wired-window-controls" aria-hidden="true"><span>_</span><span>□</span><span>×</span></span></div>
                <div className="wired-window-content"><p className="wired-small-label">A NOTE FROM EMPTY</p><p className="wired-log-text">A little bit of everything, all in one place. This site is always a work in progress.</p><p className="wired-log-signature">— thanks for stopping by :)</p><div className="wired-log-rule" /><span className="wired-log-status">● &nbsp; THIS PAGE IS ALIVE</span></div>
              </section>
            </div>

            <section className="wired-elsewhere"><div><p className="wired-small-label">FOLLOW THE SIGNAL</p><h2>find me elsewhere<span> ↗</span></h2></div><div className="wired-socials">{elsewhere.map(([name, href]) => <a href={href} target="_blank" rel="noopener noreferrer" key={name}>{name} <span>↗</span></a>)}</div></section>
            <div className="wired-bottom-strip"><span>ALWAYS UNDER CONSTRUCTION</span><span>✳ &nbsp; MADE WITH CURIOSITY &nbsp; ✳</span><span>END OF PAGE... OR IS IT?</span></div>
    </>
  );
}

export default Home;
