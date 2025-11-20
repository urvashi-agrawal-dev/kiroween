/**
 * API Client for RetroGhost Backend
 */

const API_BASE = import.meta.env.VITE_API_URL || 
                 (import.meta.env.PROD ? '/api' : 'http://localhost:3001');

export async function fetchGhostList() {
  const response = await fetch(`${API_BASE}/api/ghost/list`);
  if (!response.ok) {
    throw new Error('Failed to fetch ghost list');
  }
  return response.json();
}

export async function sendMessage(ghost, message, timeRift = false) {
  const response = await fetch(`${API_BASE}/api/ghost`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      ghost,
      message,
      timeRift,
    }),
  });

  if (!response.ok) {
    throw new Error('Failed to send message');
  }

  return response.json();
}

export async function simulateCommand(command, args = []) {
  const response = await fetch(`${API_BASE}/api/ghost/command`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      command,
      args,
    }),
  });

  if (!response.ok) {
    throw new Error('Failed to simulate command');
  }

  return response.json();
}
