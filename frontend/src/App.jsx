import React, { useState, useEffect } from 'react';
import Terminal from './components/Terminal';
import GhostSelector from './components/GhostSelector';
import CRTEffect from './components/CRTEffect';
import { fetchGhostList } from './lib/api';

function App() {
  const [ghosts, setGhosts] = useState([]);
  const [selectedGhost, setSelectedGhost] = useState('dos');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadGhosts();
  }, []);

  const loadGhosts = async () => {
    try {
      const data = await fetchGhostList();
      setGhosts(data.ghosts);
      setLoading(false);
    } catch (error) {
      console.error('Failed to load ghosts:', error);
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="app loading">
        <div className="loading-text">LOADING GHOSTS...</div>
      </div>
    );
  }

  return (
    <div className="app">
      <CRTEffect />
      <div className="app-container">
        <header className="app-header">
          <h1 className="app-title">
            <span className="ghost-icon">👻</span>
            RetroGhost
          </h1>
          <p className="app-subtitle">The Haunted Terminal of Forgotten Systems</p>
        </header>
        
        <GhostSelector
          ghosts={ghosts}
          selectedGhost={selectedGhost}
          onSelectGhost={setSelectedGhost}
        />
        
        <Terminal
          ghost={selectedGhost}
          ghostData={ghosts.find(g => g.id === selectedGhost)}
        />
        
        <footer className="app-footer">
          <p>Kiroween 2025 - Resurrection Category</p>
          <p>Press Enter to send • Type "help" for commands • Toggle Time Rift for comparisons</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
