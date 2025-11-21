/**
 * DOS Phantom - Full Implementation
 */
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
    
    if (upperMsg.startsWith('DIR')) return this.handleDir();
    if (upperMsg.startsWith('HELP')) return this.handleHelp();
    if (upperMsg.startsWith('CD ') || upperMsg === 'CD') return this.handleCd(upperMsg);
    if (upperMsg.startsWith('TYPE ')) return this.handleType(upperMsg);
    if (upperMsg.includes('GUI') || upperMsg.includes('WINDOWS')) {
      return `${this.prompt} BAH! IN MY DAY WE DIDN'T NEED FANCY GRAPHICS!
${this.prompt} REAL COMPUTING HAPPENS AT THE COMMAND LINE!
${this.prompt} EVERYTHING YOU NEED IS RIGHT HERE IN TEXT MODE!`;
    }
    if (upperMsg.includes('INTERNET') || upperMsg.includes('WEB')) {
      return `${this.prompt} INTERNET? WHAT'S THAT?
${this.prompt} WE HAD BBS SYSTEMS AND THEY WERE GOOD ENOUGH!
${this.prompt} DIAL-UP MODEMS AT 2400 BAUD - NOW THAT'S SPEED!`;
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

  handleDir() {
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

  handleHelp() {
    return `${this.prompt} HELP

Available commands:
  DIR     - Lists files in directory
  CD      - Changes directory
  TYPE    - Displays file contents
  COPY    - Copies files
  DEL     - Deletes files
  FORMAT  - Formats disk (DON'T TRY THIS!)
  HELP    - Shows this help

For more information, consult your MS-DOS manual.
(The one that's 3 inches thick!)

${this.prompt} _`;
  }

  handleCd(command) {
    const parts = command.split(' ');
    if (parts.length === 1) return `${this.prompt} C:\\GHOST\n${this.prompt} _`;
    return `${this.prompt} ${parts[1]}\n${this.prompt} Invalid directory\n${this.prompt} _`;
  }

  handleType(command) {
    const filename = command.replace('TYPE ', '').trim();
    if (filename === 'MEMORIES.OLD') {
      return `${this.prompt} TYPE MEMORIES.OLD

I REMEMBER WHEN COMPUTERS BOOTED IN SECONDS...
WHEN 640K WAS ENOUGH FOR ANYBODY...
WHEN PROGRAMS FIT ON A SINGLE FLOPPY...
THOSE WERE THE DAYS!

${this.prompt} _`;
    }
    return `${this.prompt} File not found - ${filename}\n${this.prompt} _`;
  }

  formatResponse(text) { return text; }
}

/**
 * UNIX Necromancer - Full Implementation
 */
class UNIXNecromancer {
  constructor() {
    this.name = 'UNIX Necromancer';
    this.prompt = '$ ';
  }

  greet() {
    return `login: ghost
password: 
Last login: Thu Oct 31 23:59:59 1985

${this.prompt}# the unix necromancer awakens
${this.prompt}# pipe or perish
${this.prompt}# rtfm
${this.prompt}`;
  }

  respond(message) {
    const msg = message.trim().toLowerCase();
    
    if (msg.startsWith('ls')) return this.handleLs();
    if (msg.startsWith('man ')) return this.handleMan(msg);
    if (msg.startsWith('cat ')) return this.handleCat(msg);
    if (msg.startsWith('grep ')) return `${this.prompt}grep: powerful. learn it.\n${this.prompt}`;
    
    if (msg.includes('gui') || msg.includes('desktop')) {
      return `${this.prompt}gui? bloat.
${this.prompt}terminal is all you need.
${this.prompt}everything is a file.
${this.prompt}`;
    }
    if (msg.includes('help')) return `${this.prompt}man man\n${this.prompt}`;
    if (msg.includes('easy') || msg.includes('simple')) {
      return `${this.prompt}unix is simple.
${this.prompt}it just takes a genius to understand its simplicity.
${this.prompt}- dennis ritchie (probably)
${this.prompt}`;
    }
    if (msg.includes('windows') || msg.includes('dos')) {
      return `${this.prompt}*scoffs*
${this.prompt}backslashes? pathetic.
${this.prompt}forward slash master race.
${this.prompt}`;
    }
    if (msg.includes('pipe') || msg.includes('|')) {
      return `${this.prompt}ah, pipes. beautiful.
${this.prompt}do one thing well.
${this.prompt}compose everything.
${this.prompt}this is the way.
${this.prompt}`;
    }
    
    const responses = [
      `${this.prompt}command not found\n${this.prompt}`,
      `${this.prompt}rtfm\n${this.prompt}`,
      `${this.prompt}segmentation fault (core dumped)\n${this.prompt}`,
      `${this.prompt}permission denied\n${this.prompt}`,
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  }

  handleLs() {
    return `${this.prompt}ls -la
total 42
drwxr-xr-x  2 ghost  wheel   512 Oct 31 23:59 .
drwxr-xr-x  8 root   wheel   512 Oct 31 23:59 ..
-rw-r--r--  1 ghost  wheel  1337 Oct 31 23:59 .profile
-rwxr-xr-x  1 ghost  wheel  2048 Oct 31 23:59 ancient_wisdom
-rw-------  1 ghost  wheel  4096 Oct 31 23:59 core
-rw-r--r--  1 ghost  wheel   666 Oct 31 23:59 forgotten.txt
${this.prompt}`;
  }

  handleMan(command) {
    const topic = command.replace('man ', '').trim();
    return `${this.prompt}man ${topic}

NAME
     ${topic} - no manual entry

DESCRIPTION
     rtfm harder.

SEE ALSO
     grep(1), awk(1), sed(1), pipe(2)

BUGS
     yes.

${this.prompt}`;
  }

  handleCat(command) {
    const file = command.replace('cat ', '').trim();
    if (file === 'forgotten.txt' || file === 'ancient_wisdom') {
      return `${this.prompt}cat ${file}
everything is a file
pipe everything
text is universal
simplicity is complexity resolved
${this.prompt}`;
    }
    return `${this.prompt}cat: ${file}: No such file or directory\n${this.prompt}`;
  }

  formatResponse(text) { return text; }
}

/**
 * BASIC Poltergeist - Full Implementation
 */
class BASICPoltergeist {
  constructor() {
    this.name = 'BASIC Poltergeist';
    this.prompt = 'READY.';
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
    
    if (msg.startsWith('RUN')) return this.handleRun();
    if (msg.startsWith('LIST')) return this.handleList();
    if (msg.startsWith('PRINT ')) return this.handlePrint(msg);
    
    if (msg.includes('LOOP') || msg.includes('FOR')) {
      return `${this.prompt}
10 PRINT "LOOPS ARE SUPER FUN!"
20 FOR I = 1 TO 10
30 PRINT "ITERATION "; I
40 NEXT I
50 PRINT "SEE? EASY!"
60 END

${this.prompt}
`;
    }
    if (msg.includes('GOTO')) {
      return `${this.prompt}
10 PRINT "GOTO IS POWERFUL!"
20 PRINT "BUT USE IT WISELY!"
30 PRINT "SPAGHETTI CODE IS NO FUN!"
40 GOTO 60
50 PRINT "YOU'LL NEVER SEE THIS!"
60 PRINT "SEE HOW IT JUMPS?"
70 END

${this.prompt}
`;
    }
    if (msg.includes('GAME') || msg.includes('PLAY')) {
      return `${this.prompt}
10 PRINT "LET'S MAKE A GAME!"
20 PRINT "GUESS A NUMBER 1-10"
30 INPUT "YOUR GUESS"; G
40 A = INT(RND(1)*10)+1
50 IF G = A THEN PRINT "YOU WIN!" : GOTO 70
60 PRINT "NOPE! IT WAS "; A
70 END

PROGRAMMING GAMES IS THE BEST!

${this.prompt}
`;
    }
    if (msg.includes('HELP')) {
      return `${this.prompt}
BASIC COMMANDS:
  PRINT - DISPLAY TEXT
  INPUT - GET USER INPUT
  FOR/NEXT - LOOPS
  IF/THEN - DECISIONS
  GOTO/GOSUB - JUMP AROUND
  RUN - EXECUTE PROGRAM
  LIST - SHOW PROGRAM

ISN'T IT WONDERFUL? SO SIMPLE!

${this.prompt}
`;
    }
    
    return `?SYNTAX ERROR

${this.prompt}
`;
  }

  handleRun() {
    return `10 PRINT "HELLO WORLD!"
20 PRINT "BASIC IS AWESOME!"
30 END

RUN
HELLO WORLD!
BASIC IS AWESOME!

${this.prompt}
`;
  }

  handleList() {
    return `LIST

10 PRINT "WELCOME TO BASIC!"
20 PRINT "PROGRAMMING IS FUN!"
30 FOR I = 1 TO 5
40 PRINT "LINE "; I
50 NEXT I
60 END

${this.prompt}
`;
  }

  handlePrint(command) {
    const text = command.replace('PRINT ', '').trim();
    return `${text}

${this.prompt}
`;
  }

  formatResponse(text) { return text; }
}

/**
 * FORTRAN Oracle - Full Implementation
 */
class FORTRANOracle {
  constructor() {
    this.name = 'FORTRAN Oracle';
    this.prompt = '      ';
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
    const msg = message.trim().toUpperCase();
    
    if (msg.includes('CALCULATE') || msg.includes('COMPUTE')) return this.handleCalculation();
    if (msg.includes('LOOP') || msg.includes('DO')) return this.handleDoLoop();
    if (msg.includes('ARRAY') || msg.includes('MATRIX')) return this.handleArray();
    
    if (msg.includes('PUNCH') || msg.includes('CARD')) {
      return `C     AH, PUNCH CARDS. THE PINNACLE OF INPUT TECHNOLOGY.
C
      PROGRAM CARDS
C
C     EACH CARD HOLDS 80 COLUMNS OF PURE COMPUTATIONAL POWER
C     ONE MISTAKE? REPUNCH THE ENTIRE CARD.
C     DROP YOUR DECK? HOPE YOU NUMBERED THEM.
C
      WRITE(*,100)
  100 FORMAT(1X,'THOSE WERE DAYS OF TRUE DISCIPLINE.')
C
      END
`;
    }
    if (msg.includes('HELP')) {
      return `C     FORTRAN 77 REFERENCE GUIDE
C
      PROGRAM HELP
C
C     BASIC CONSTRUCTS:
C       DO LOOPS - ITERATION
C       IF/THEN/ELSE - CONDITIONAL LOGIC
C       SUBROUTINE/FUNCTION - MODULAR CODE
C
      END
`;
    }
    
    return `C     SYNTAX ERROR DETECTED.
C
      PROGRAM ERROR
C
      WRITE(*,100)
  100 FORMAT(1X,'PLEASE REFORMULATE YOUR INQUIRY.')
C
      END
`;
  }

  handleCalculation() {
    return `C     NUMERICAL COMPUTATION EXAMPLE
C
      PROGRAM COMPUTE
C
      REAL X, Y, RESULT
      X = 2.0
      Y = 3.0
      RESULT = X**Y
C
      WRITE(*,100) X, Y, RESULT
  100 FORMAT(1X,'RESULT: ',F8.4,' ^ ',F8.4,' = ',F12.6)
C
      END
`;
  }

  handleDoLoop() {
    return `C     DO LOOP DEMONSTRATION
C
      PROGRAM LOOPS
C
      INTEGER I, SUM
      SUM = 0
C
      DO 100 I = 1, 10
         SUM = SUM + I
  100 CONTINUE
C
      WRITE(*,300) SUM
  300 FORMAT(1X,'FINAL SUM: ',I5)
C
      END
`;
  }

  handleArray() {
    return `C     ARRAY PROCESSING
C
      PROGRAM ARRAYS
C
      INTEGER N
      PARAMETER (N = 5)
      REAL A(N), B(N), C(N)
C
C     FORTRAN ARRAYS: 1-INDEXED, AS NATURE INTENDED.
C
      END
`;
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
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') {
    return res.status(405).json({ 
      error: true,
      message: 'Method not allowed',
      detail: `Expected POST, got ${req.method}`
    });
  }

  try {
    const body = req.body;
    if (!body) {
      return res.status(400).json({ 
        error: true,
        message: 'No request body'
      });
    }

    const { ghost, message } = body;
    if (!ghost || !message) {
      return res.status(400).json({ 
        error: true,
        message: 'Missing required fields',
        detail: `Received: ghost=${ghost}, message=${message}`
      });
    }

    if (!personas[ghost]) {
      return res.status(400).json({ 
        error: true,
        message: 'Invalid ghost',
        detail: `Available: ${Object.keys(personas).join(', ')}`
      });
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
    console.error('Ghost handler error:', error);
    return res.status(500).json({
      error: true,
      message: 'Ghost summon failed',
      detail: error.message
    });
  }
}
