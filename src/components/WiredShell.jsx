import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import thomGif from '../images/thom-yorke-normal.gif';

const menu = [
  ['01', 'home', '/', 'index.htm'],
  ['02', 'favorites', '/favorites', 'personal.db'],
  ['03', 'music', '/music', 'audio.log'],
  ['04', 'library', '/library', 'text.archive'],
  ['05', 'gallery', '/gallery', 'visual.files'],
];

const pageInfo = {
  '/': { active: '/', path: 'HOME', file: 'INDEX.HTM' },
  '/favorites': { active: '/favorites', path: 'FAVORITES / PERSONAL.DB', file: 'PERSONAL.DB' },
  '/music': { active: '/music', path: 'MUSIC / AUDIO.LOG', file: 'AUDIO.LOG' },
  '/library': { active: '/library', path: 'LIBRARY / TEXT.ARCHIVE', file: 'TEXT.ARCHIVE' },
  '/pessoa': { active: '/library', path: 'LIBRARY / FERNANDO_PESSOA.TXT', file: 'FERNANDO_PESSOA.TXT' },
  '/gallery': { active: '/gallery', path: 'GALLERY / VISUAL.FILES', file: 'VISUAL.FILES' },
  '/cobrakai': { active: '/favorites', path: 'FAVORITES / COBRA_KAI', file: 'COBRA_KAI' },
};

function WiredShell({ children }) {
  const { pathname } = useLocation();
  const page = pageInfo[pathname] || { path: pathname.slice(1).toUpperCase(), file: 'UNKNOWN' };

  return (
    <div className="wired-page">
      <div className="wired-shell">
        <div className="wired-topline"><span>PERSONAL NETWORK / EST. 2025</span><span>YOU ARE HERE <b>●</b></span></div>
        <header className="wired-header">
          <Link className="wired-brand" to="/" aria-label="Empty's brain, home">
            <span className="wired-brand-mark" aria-hidden="true">e<span>.</span></span>
            <span><strong>empty's brain<span className="wired-brand-dot">_</span></strong><small>A PERSONAL SPACE ON THE INTERNET</small></span>
          </Link>
          <div className="wired-header-note"><span>AN OPEN DIRECTORY</span><strong>somewhere online<span className="wired-blink">_</span></strong></div>
        </header>
        <div className="wired-status"><span><b>●</b> CONNECTION ESTABLISHED</span><span>WELCOME, VISITOR <span className="wired-status-cross">✳</span></span><span>SCROLL TO EXPLORE ↓</span></div>
        <div className="wired-layout">
          <aside className="wired-sidebar">
            <div className="wired-section-label"><span>DIRECTORY</span><span>001—005</span></div>
            <nav aria-label="Main navigation" className="wired-nav">
              {menu.map(([number, label, href, file]) => (
                <Link to={href} key={href} className={href === page.active ? 'wired-nav-link is-current' : 'wired-nav-link'} aria-current={href === pathname ? 'page' : undefined}>
                  <span className="wired-nav-number">{number}</span><span><strong>{label}</strong><small>{file}</small></span><span className="wired-nav-arrow">↗</span>
                </Link>
              ))}
            </nav>
            <div className="wired-side-note"><span>✳ NOTE TO SELF</span><p>there is always more to discover.</p><span className="wired-side-line">////////////////////</span></div>
            <div className="wired-side-bottom"><span>EST. SOMEWHERE</span><span>↓ KEEP LOOKING</span></div>
          </aside>
          <main className="wired-main" id="main-content">
            <div className="wired-breadcrumb"><span>ROOT / <b>{page.path}</b></span><span>{page.file}</span></div>
            {children}
          </main>
          <aside className="wired-rightbar"><span className="wired-vertical">A SMALL PLACE IN A VERY BIG NETWORK</span><div className="wired-stamp">E<br />B<span>✳</span></div></aside>
        </div>
        <footer className="wired-footer"><span>© EMPTY'S PERSONAL BLOG</span><span>THANKS FOR VISITING <span>✳</span> SEE YOU AROUND</span><span>END OF TRANSMISSION_</span></footer>
        <div className="wired-hidden-memory"><img src={thomGif} alt="" /><span>just passing through...</span></div>
      </div>
    </div>
  );
}

export default WiredShell;
