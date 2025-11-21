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

export default async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ 
      error: true,
      message: 'Method not allowed',
      detail: `Expected POST, got ${req.method}`
    });
  }

  try {
    // Parse body - Vercel should handle this automatically
    const body = req.body;
    
    if (!body) {
      return res.status(400).json({ 
        error: true,
        message: 'No request body',
        detail: 'Request body is empty or could not be parsed'
      });
    }

    const { ghost, message } = body;

    // Validate required fields
    if (!ghost || !message) {
      return res.status(400).json({ 
        error: true,
        message: 'Missing required fields',
        detail: `Received: ghost=${ghost}, message=${message}`,
        received: body 
      });
    }

    // Validate ghost exists
    if (!personas[ghost]) {
      return res.status(400).json({ 
        error: true,
        message: 'Invalid ghost',
        detail: `Ghost "${ghost}" not found. Available: ${Object.keys(personas).join(', ')}`
      });
    }

    // Get persona and generate response
    const persona = personas[ghost];
    const response = (message.toLowerCase() === 'hello' || message.toLowerCase() === 'hi') 
      ? persona.greet() 
      : persona.respond(message);

    // Return success
    return res.status(200).json({
      ghost,
      response,
      formatted: persona.formatResponse(response),
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Ghost handler error:', error);
    return res.status(500).json({
      error: true,
      message: 'Ghost summon failed',
      detail: error.message,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
    });
  }
}
