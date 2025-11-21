export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { command, args = [] } = req.body || {};

  if (!command) {
    return res.status(400).json({ error: 'Missing command' });
  }

  // Simple command simulation
  return res.status(200).json({
    command,
    args,
    output: `Simulated output for: ${command} ${args.join(' ')}`,
    exitCode: 0,
    timestamp: new Date().toISOString()
  });
}
