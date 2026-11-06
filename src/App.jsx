import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import WiredShell from './components/WiredShell';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import Music from './pages/Music';
import Cobrakai from './pages/Cobrakai';
import Library from './pages/Library';
import Pessoa from './pages/Pessoa';
import Gallery from './pages/Gallery';
import './App.css';

// Componente para controlar o background
function BackgroundWrapper({ children }) {
  const location = useLocation();

  useEffect(() => {
    // Remove classes antigas
    document.body.className = '';
    // Adiciona classe base + classe da página atual (ex: 'music-bg')
    document.body.classList.add('site-background', `${location.pathname.slice(1) || 'home'}-bg`);
  }, [location.pathname]);

  return <>{children}</>;
}

function SiteLayout() {
  return (
      <BackgroundWrapper>
        <WiredShell>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/music" element={<Music />} />
          <Route path="/cobrakai" element={<Cobrakai />} />
          <Route path="/library" element={<Library />} />
          <Route path="/pessoa" element={<Pessoa />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
        </WiredShell>
      </BackgroundWrapper>
  );
}

function App() {
  return (
    <Router>
      <SiteLayout />
    </Router>
  );
}

export default App;
