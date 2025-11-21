// Vercel serverless config
export const config = {
  api: {
    bodyParser: true,
  },
};

// DOS Phantom
class DOSPhantom {
  constructor() {
    this.name = 'DOS Phantom';
    this.prompt = 'C:\\>';
  }
  greet() {
    return `MS-DOS Version 6.22\n\n${this.prompt} WELCOME TO THE DOS PHANTOM\n${this.prompt} TYPE YOUR COMMANDS IN UPPERCASE\n${this.prompt} _`;
  }
  respond(message) {
    const msg = message.toUpperCase();
    if (msg.includes('DIR')) return `${this.prompt} DIR\n\nAUTOEXEC BAT\nCONFIG   SYS\n\n${this.prompt} _`;
    return `${this.prompt} Bad command or file name\n${this.prompt} _`;
  }
  formatResponse(text) { return text; }
}

// UNIX Necromancer
class UNIXNecromancer {
  constructor() {
    this.name = 'UNIX Necromancer';
    this.prompt = '$ ';
  }
  greet() {
    return `login: ghost\n\n${this.prompt}# the unix necromancer awakens\n${this.prompt}`;
  }
  respond(message) {
    if (message.includes('ls')) return `${this.prompt}ls\nancient_wisdom  forgotten.txt\n${this.prompt}`;
    return `${this.prompt}command not found\n${this.prompt}`;
  }
  formatResponse(text) { return text; }
}

// BASIC Poltergeist
class BASICPoltergeist {
  constructor() {
    this.name = 'BASIC Poltergeist';
    this.prompt = 'READY.';
  }
  greet() {
    return `COMMODORE 64 BASIC V2\n\n10 PRINT "HELLO!"\n20 END\n\nRUN\nHELLO!\n\n${this.prompt}\n`;
  }
  respond(message) {
    if (message.toUpperCase().includes('RUN')) return `10 PRINT "HELLO WORLD!"\n\nRUN\nHELLO WORLD!\n\n${this.prompt}\n`;
    return `?SYNTAX ERROR\n\n${this.prompt}\n`;
  }
  formatResponse(text) { return text; }
}

// FORTRAN Oracle
class FORTRANOracle {
  constructor() {
    this.name = 'FORTRAN Oracle';
    this.prompt = 'C     ';
  }
  greet() {
    return `C     FORTRAN 77 COMPILER\nC\n      PROGRAM GHOST\nC\n      WRITE(*,100)\n  100 FORMAT(1X,'GREETINGS')\nC\n      END\n`;
  }
  respond() {
    return `C     ACKNOWLEDGED\nC\n      END\n`;
  }
  formatResponse(text) { return text; }
}

const personas = {
  dos: new DOSPhantom(),
  unix: new UNIXNecromancer(),
  basic: new BASICPoltergeist(),
  fortran: new FORTRANOracle()
};

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

  try {
    const body = await parseBody(req);
    const { ghost, message } = body;

    if (!ghost || !message) {
      return res.status(400).json({ 
        error: 'Missing ghost or message',
        received: body 
      });
    }

    if (!personas[ghost]) {
      return res.status(400).json({ error: 'Invalid ghost' });
    }

    const persona = personas[ghost];
    const response = (message.toLowerCase() === 'hello' || message.toLowerCase() === 'hi') 
      ? persona.greet() 
      : persona.respond(message);

    return res.status(200).json({
      ghost,
      response,
      formatted: persona.formatResponse(response),
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    return res.status(500).json({
      error: true,
      message: error.message,
      stack: error.stack
    });
  }
}
