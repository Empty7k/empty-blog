import React, { useState } from 'react';
import './Gallery.css';

const files = [];

function Gallery() {
  const [selected, setSelected] = useState(0);
  const [imageStatus, setImageStatus] = useState(files.length ? 'LOADING' : 'NO FILE SELECTED');
  const file = files[selected];

  function selectFile(index) {
    if (index !== selected) {
      setImageStatus('LOADING');
      setSelected(index);
    }
  }

  return (
    <div id="gallery" className="visual-archive">
      <div className="visual-intro">
        <p className="visual-path">VISUAL_FILES / INDEX</p>
        <h1>Gallery</h1>
        <p>Here are some images I like, I hope you like them too!</p>
      </div>

      <div className="visual-layout">
        <section className="visual-window" aria-labelledby="visual-files-title">
          <div className="visual-titlebar"><h2 id="visual-files-title">VISUAL_FILES / CONTACT SHEET</h2><span aria-hidden="true">[−] [□] [×]</span></div>
          <div className="visual-window-body">
            <p className="visual-meta">FILES: {String(files.length).padStart(2, '0')} / {files.length ? 'SELECT A FILE TO INSPECT' : 'DIRECTORY EMPTY'}</p>
            {files.length === 0 && <p className="visual-empty">NO IMAGES IN THIS DIRECTORY YET.</p>}
            <ul className="visual-grid">
              {files.map((image, index) => (
                <li key={image.name}>
                  <button type="button" className="visual-file" aria-pressed={selected === index} onClick={() => selectFile(index)}>
                    <span className="visual-thumbnail"><img src={image.src} alt="" loading="lazy" /></span>
                    <span className="visual-filename">[{String(index + 1).padStart(3, '0')}] {image.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="visual-window visual-inspector" aria-labelledby="visual-inspector-title">
          <div className="visual-titlebar"><h2 id="visual-inspector-title">FILE INFORMATION</h2><span aria-hidden="true">[−] [□] [×]</span></div>
          <div className="visual-window-body">
            <div className="visual-preview">
              {file ? <img key={file.src} src={file.src} alt={file.alt} onLoad={() => setImageStatus('VERIFIED')} onError={() => setImageStatus('UNAVAILABLE')} /> : <span className="visual-empty">NO FILE SELECTED</span>}
            </div>
            <table className="visual-details"><tbody>
              <tr><th scope="row">NAME</th><td>{file?.name || '—'}</td></tr>
              <tr><th scope="row">TYPE</th><td>{file?.type || '—'}</td></tr>
              <tr><th scope="row">STATUS</th><td aria-live="polite">{imageStatus}</td></tr>
            </tbody></table>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Gallery;
