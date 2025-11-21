/**
 * API Client for RetroGhost Backend
 */

const API_BASE = import.meta.env.VITE_API_URL || 
                 (import.meta.env.PROD ? '' : 'http://localhost:3001');

export async function fetchGhostList() {
  try {
    const response = await fetch(`${API_BASE}/api/ghost/list`);
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || `HTTP ${response.status}: Failed to fetch ghost list`);
    }
    return response.json();
  } catch (error) {
    console.error('fetchGhostList error:', error);
    throw error;
  }
}

export async function sendMessage(ghost, message, timeRift = false) {
  try {
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
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || errorData.error || `HTTP ${response.status}: Failed to send message`);
    }

    return response.json();
  } catch (error) {
    console.error('sendMessage error:', error);
    throw error;
  }
}

export async function simulateCommand(command, args = []) {
  try {
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
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || `HTTP ${response.status}: Failed to simulate command`);
    }

    return response.json();
  } catch (error) {
    console.error('simulateCommand error:', error);
    throw error;
  }
}
