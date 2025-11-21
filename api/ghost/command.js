// Helper to parse body
async function parseBody(req) {
  if (req.body) return req.body;
  
  return new Promise((resolve) => {
    let data = '';
    req.on('data', chunk => { data += chunk; });
    req.on('end', () => {
      try {
        resolve(JSON.parse(data));
      } catch {
        resolve({});
      }
    });
  });
}

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

  const body = await parseBody(req);
  const { command, args = [] } = body;

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
