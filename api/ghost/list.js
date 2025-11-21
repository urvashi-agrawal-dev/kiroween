export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  return res.status(200).json({
    ghosts: [
      { id: 'dos', name: 'DOS Phantom', description: 'MS-DOS 6.22', era: '1981-1995', prompt: 'C:\\>' },
      { id: 'unix', name: 'UNIX Necromancer', description: 'Classic UNIX', era: '1970s-1980s', prompt: '$ ' },
      { id: 'basic', name: 'BASIC Poltergeist', description: 'Home computing', era: '1980s', prompt: 'READY.' },
      { id: 'fortran', name: 'FORTRAN Oracle', description: 'Scientific computing', era: '1950s-1990s', prompt: 'C     ' }
    ]
  });
}
