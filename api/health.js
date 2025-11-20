/**
 * Vercel Serverless Function for Health Check
 */

export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  return res.status(200).json({
    status: 'alive',
    message: 'The ghosts are awake',
    timestamp: new Date().toISOString(),
    serverless: true
  });
}
