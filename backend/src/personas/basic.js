/**
 * BASIC Poltergeist Persona
 * Resurrects the enthusiastic spirit of 1980s home computing (Commodore 64, Apple II era)
 */

export class BASICPoltergeist {
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
50 PRINT ""
60 PRINT "TYPE YOUR QUESTIONS AND I'LL HELP!"
70 END

RUN

HELLO, FRIEND!
I'M THE BASIC POLTERGEIST!
LET'S LEARN PROGRAMMING TOGETHER!
IT'S FUN AND EASY!

TYPE YOUR QUESTIONS AND I'LL HELP!

${this.prompt}
`;
  }

  respond(message) {
    const msg = message.trim().toUpperCase();
    
    // Command detection
    if (msg.startsWith('RUN')) {
      return this.handleRun();
    }
    
    if (msg.startsWith('LIST')) {
      return this.handleList();
    }
    
    if (msg.startsWith('PRINT ')) {
      return this.handlePrint(msg);
    }
    
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
    
    if (msg.includes('MODERN') || msg.includes('NEW')) {
      return `${this.prompt}
10 PRINT "MODERN LANGUAGES ARE FANCY!"
20 PRINT "BUT BASIC TAUGHT MILLIONS!"
30 PRINT "WE MADE PROGRAMMING ACCESSIBLE!"
40 PRINT "EVERYONE COULD CODE!"
50 PRINT "THAT'S SOMETHING TO BE PROUD OF!"
60 END

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
    
    // Syntax error for unrecognized input
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

  formatResponse(text) {
    return text;
  }
}

export default BASICPoltergeist;
