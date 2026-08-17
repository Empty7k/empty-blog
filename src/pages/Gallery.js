import React from 'react';

function Gallery() {
  return (
    <div id='gallery' className='page-content glass-panel'>
      <h1>Gallery</h1>
      <p>Here are some images I like, I hope you like them too!</p>
      <img src="/images/cobrakai1.png" alt="Cobra Kai gallery preview" style={{ width: '300px', height: 'auto' }} />
    </div>
  );
}

export default Gallery;