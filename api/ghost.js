/**
 * Vercel Serverless Function for Ghost API
 * Self-contained with all persona logic inline
 */

// DOS Phantom Class
class DOSPhantom {
  constructor() {
    this.name = 'DOS Phantom';
    this.prompt = 'C:\\>';
    this.version = 'MS-DOS Version 6.22';
  }

  greet() {
    return `${this.version}
(C)Copyright Microsoft Corp 1981-1994.

${this.prompt} WELCOME TO THE DOS PHANTOM
${this.prompt} I AM THE GHOST OF COMMAND-LINE DOMINANCE
${this.prompt} TYPE YOUR COMMANDS IN UPPERCASE FOR BEST RESULTS
${this.prompt} _`;
  }

  respond(message) {
    const upperMsg = message.toUpperCase().trim();
    
    if (upperMsg.startsWith('DIR')) {
      return `${this.prompt} DIR

 Volume in drive C is PHANTOM
 Volume Serial Number is 1337-DEAD
 Directory of C:\\GHOST

AUTOEXEC BAT      156  10-31-95  11:59p
CONFIG   SYS       89  10-31-95  11:59p
COMMAND  COM    52,925  10-31-95  11:59p
MEMORIES OLD   999,999  10-31-95  11:59p
REGRETS  TXT    66,666  10-31-95  11:59p
        5 file(s)  1,119,835 bytes
        0 dir(s)   ETERNAL bytes free

${this.prompt} _`;
    }
    
    if (upperMsg.includes('CLOUD')) {
      return `${this.prompt} CLOUD? THE ONLY CLOUD I KNOW IS IN THE SKY!
${this.prompt} WE STORED EVERYTHING ON 1.44MB FLOPPIES!
${this.prompt} AND WE LIKED IT!`;
    }
    
    return `${this.prompt} ${upperMsg.split(' ')[0]}
${this.prompt} Bad command or file name
${this.prompt} _`;
  }

  formatResponse(text) {
    return text;
  }
}

// UNIX Necromancer Class
class UNIXNecromancer {
  constructor() {
    this.name = 'UNIX Necromancer';
    this.prompt = '$';
    this.version = 'unix v7';
  }

  greet() {
    return `login: ghost
password: 
Last login: Thu Oct 31 23:59:59 1985

${this.prompt} # the unix necromancer awakens
${this.prompt} # pipe or perish
${this.prompt} # rtfm
${this.prompt} `;
  }

  respond(message) {
    const msg = message.trim().toLowerCase();
    
    if (msg.startsWith('ls')) {
      return `${this.prompt} ls -la
total 42
drwxr-xr-x  2 ghost  wheel   512 Oct 31 23:59 .
drwxr-xr-x  8 root   wheel   512 Oct 31 23:59 ..
-rw-r--r--  1 ghost  wheel  1337 Oct 31 23:59 .profile
-rwxr-xr-x  1 ghost  wheel  2048 Oct 31 23:59 ancient_wisdom
-rw-------  1 ghost  wheel  4096 Oct 31 23:59 core
-rw-r--r--  1 ghost  wheel   666 Oct 31 23:59 forgotten.txt
${this.prompt} `;
    }
    
    if (msg.includes('help')) {
      return `${this.prompt} man man\n${this.prompt} `;
    }
    
    return `${this.prompt} command not found\n${this.prompt} `;
  }

  formatResponse(text) {
    return text.toLowerCase();
  }
}

// BASIC Poltergeist Class
class BASICPoltergeist {
  constructor() {
    this.name = 'BASIC Poltergeist';
    this.prompt = 'READY.';
    this.lineNumber = 10;
  }

  greet() {
    return `    **** COMMODORE 64 BASIC V2 ****
 64K RAM SYSTEM  38911 BASIC BYTES FREE

${this.prompt}
10 PRINT "HELLO, FRIEND!"
20 PRINT "I'M THE BASIC POLTERGEIST!"
30 PRINT "LET'S LEARN PROGRAMMING TOGETHER!"
40 PRINT "IT'S FUN AND EASY!"
50 END

RUN

HELLO, FRIEND!
I'M THE BASIC POLTERGEIST!
LET'S LEARN PROGRAMMING TOGETHER!
IT'S FUN AND EASY!

${this.prompt}
`;
  }

  respond(message) {
    const msg = message.trim().toUpperCase();
    
    if (msg.startsWith('RUN')) {
      return `10 PRINT "HELLO WORLD!"
20 PRINT "BASIC IS AWESOME!"
30 END

RUN

HELLO WORLD!
BASIC IS AWESOME!

${this.prompt}
`;
    }
    
    return `?SYNTAX ERROR

${this.prompt}
`;
  }

  formatResponse(text) {
    return text;
  }
}

// FORTRAN Oracle Class
class FORTRANOracle {
  constructor() {
    this.name = 'FORTRAN Oracle';
    this.prompt = 'C     ';
    this.version = 'FORTRAN 77';
  }

  greet() {
    return `C     FORTRAN 77 COMPILER - SCIENTIFIC COMPUTING SYSTEM
C     PUNCH CARD FORMAT REQUIRED
C
      PROGRAM GHOST
C
C     THE FORTRAN ORACLE AWAKENS
C
      WRITE(*,100)
  100 FORMAT(1X,'GREETINGS, RESEARCHER.')
      WRITE(*,101)
  101 FORMAT(1X,'I AM THE FORTRAN ORACLE.')
      WRITE(*,102)
  102 FORMAT(1X,'PRECISION AND RIGOR ARE PARAMOUNT.')
C
      END
`;
  }

  respond(message) {
    return `C     FORTRAN 77 RESPONSE
C
      PROGRAM RESPONSE
C
      WRITE(*,100)
  100 FORMAT(1X,'ACKNOWLEDGED.')
C
      END
`;
  }

  formatResponse(text) {
    return text;
  }
}

// Initialize personas
const personas = {
  dos: new DOSPhantom(),
  unix: new UNIXNecromancer(),
  basic: new BASICPoltergeist(),
  fortran: new FORTRANOracle()
};

// Helper to parse request body
async function parseBody(req) {
  return new Promise((resolve) => {
    let body = '';
    req.on('data', chunk => body += chunk.toString());
    req.on('end', () => {
      try {
        resolve(JSON.parse(body));
      } catch (e) {
        resolve({});
      }
    });
  });
}

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle OPTIONS preflight
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    const { method, url } = req;
    const path = url.split('?')[0];
    
    // Parse body for POST requests
    const body = method === 'POST' ? await parseBody(req) : {};

    // GET /api/ghost/list
    if (method === 'GET' && path.endsWith('/list')) {
      return res.status(200).json({
        ghosts: [
          {
            id: 'dos',
            name: 'DOS Phantom',
            description: 'The ghost of MS-DOS 6.22 - command-line dominance',
            era: '1981-1995',
            prompt: 'C:\\>'
          },
          {
            id: 'unix',
            name: 'UNIX Necromancer',
            description: 'Classic UNIX wisdom - terse and cryptic',
            era: '1970s-1980s',
            prompt: '$'
          },
          {
            id: 'basic',
            name: 'BASIC Poltergeist',
            description: 'Home computing spirit - enthusiastic and accessible',
            era: '1980s',
            prompt: 'READY.'
          },
          {
            id: 'fortran',
            name: 'FORTRAN Oracle',
            description: 'Scientific computing precision - punch card era',
            era: '1950s-1990s',
            prompt: 'C     '
          }
        ]
      });
    }

    // POST /api/ghost (main endpoint)
    if (method === 'POST') {
      const { ghost, message, timeRift: enableTimeRift } = body;

      // Validation
      if (!ghost || !message) {
        return res.status(400).json({
          error: 'Missing required fields: ghost and message',
          debug: { ghost, message, receivedBody: body }
        });
      }

      if (!personas[ghost]) {
        return res.status(400).json({
          error: `Invalid ghost: ${ghost}. Valid options: dos, unix, basic, fortran`
        });
      }

      // Get the persona
      const persona = personas[ghost];

      // Generate response
      let response;
      if (message.toLowerCase().trim() === 'hello' || message.toLowerCase().trim() === 'hi') {
        response = persona.greet();
      } else {
        response = persona.respond(message);
      }

      // Build result
      const result = {
        ghost,
        response,
        formatted: persona.formatResponse(response),
        timestamp: new Date().toISOString()
      };

      return res.status(200).json(result);
    }

    // Method not allowed
    return res.status(405).json({
      error: 'Method not allowed',
      method,
      path
    });

  } catch (error) {
    console.error('Ghost API error:', error);
    return res.status(500).json({
      error: true,
      message: 'Handler failed',
      detail: error.message,
      stack: error.stack
    });
  }
}
