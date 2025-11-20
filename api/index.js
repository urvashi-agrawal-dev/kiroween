/**
 * Vercel Serverless Function Entry Point
 * Routes to appropriate handlers
 */

import ghostHandler from './ghost.js';
import healthHandler from './health.js';

export default async function handler(req, res) {
  const { url } = req;
  
  // Route to health check
  if (url.startsWith('/health')) {
    return healthHandler(req, res);
  }
  
  // Route to ghost API
  if (url.startsWith('/api/ghost')) {
    return ghostHandler(req, res);
  }
  
  // Default response
  return res.status(200).json({
    name: 'RetroGhost API',
    version: '1.0.0',
    description: 'Backend API for the Haunted Terminal of Forgotten Systems',
    endpoints: {
      health: '/health',
      ghost: '/api/ghost',
      ghostList: '/api/ghost/list',
      command: '/api/ghost/command'
    }
  });
}
