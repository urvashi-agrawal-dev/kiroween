import React from 'react';

function GhostSelector({ ghosts, selectedGhost, onSelectGhost }) {
  return (
    <div className="ghost-selector">
      <label htmlFor="ghost-select" className="ghost-selector-label">
        SELECT YOUR GHOST:
      </label>
      <select
        id="ghost-select"
        className="ghost-select"
        value={selectedGhost}
        onChange={(e) => onSelectGhost(e.target.value)}
      >
        {ghosts.map((ghost) => (
          <option key={ghost.id} value={ghost.id}>
            {ghost.name} ({ghost.era})
          </option>
        ))}
      </select>
      
      {ghosts.map((ghost) => (
        selectedGhost === ghost.id && (
          <div key={ghost.id} className="ghost-info">
            <p className="ghost-description">{ghost.description}</p>
          </div>
        )
      ))}
    </div>
  );
}

export default GhostSelector;
