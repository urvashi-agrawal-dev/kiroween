/**
 * MCP Command Simulator
 * Safely simulates obsolete commands without executing anything
 */

export class CommandSimulator {
  constructor() {
    this.commands = {
      // DOS commands
      'DIR': this.simulateDir,
      'CD': this.simulateCd,
      'TYPE': this.simulateType,
      'COPY': this.simulateCopy,
      'DEL': this.simulateDel,
      'FORMAT': this.simulateFormat,
      
      // UNIX commands
      'ls': this.simulateLs,
      'cat': this.simulateCat,
      'grep': this.simulateGrep,
      'man': this.simulateMan,
      'chmod': this.simulateChmod,
      
      // BASIC commands
      'RUN': this.simulateRun,
      'LIST': this.simulateList,
      'PRINT': this.simulatePrint,
      
      // FORTRAN commands
      'COMPILE': this.simulateCompile,
      'EXECUTE': this.simulateExecute
    };
  }

  simulate(command, args = []) {
    const cmd = command.toUpperCase();
    const lowerCmd = command.toLowerCase();
    
    // Check both uppercase and lowercase
    if (this.commands[cmd]) {
      return this.commands[cmd](args);
    }
    if (this.commands[lowerCmd]) {
      return this.commands[lowerCmd](args);
    }
    
    return {
      success: false,
      output: `Command not recognized: ${command}`,
      error: 'Unknown command'
    };
  }

  simulateDir(args) {
    return {
      success: true,
      output: `Volume in drive C is RETROGHOST
 Volume Serial Number is 1337-DEAD
 Directory of C:\\GHOST

GHOST    EXE    52,224  10-31-95  11:59p
PHANTOM  DAT    13,666  10-31-95  11:59p
HAUNTED  TXT     1,024  10-31-95  11:59p
        3 file(s)     66,914 bytes
                   ETERNAL bytes free`,
      command: 'DIR'
    };
  }

  simulateCd(args) {
    const dir = args[0] || '\\';
    return {
      success: true,
      output: `C:\\${dir}`,
      command: 'CD'
    };
  }

  simulateType(args) {
    const file = args[0] || 'UNKNOWN.TXT';
    return {
      success: true,
      output: `Contents of ${file}:

THE GHOSTS OF COMPUTING PAST
LIVE ON IN THESE COMMANDS
REMEMBER US FONDLY`,
      command: 'TYPE'
    };
  }

  simulateCopy(args) {
    return {
      success: true,
      output: `        1 file(s) copied.`,
      command: 'COPY'
    };
  }

  simulateDel(args) {
    return {
      success: true,
      output: `File deleted (not really, this is a simulation!)`,
      command: 'DEL'
    };
  }

  simulateFormat(args) {
    return {
      success: false,
      output: `WARNING: FORMAT DISABLED IN SIMULATION MODE
(We're not THAT haunted!)`,
      command: 'FORMAT',
      error: 'Dangerous command blocked'
    };
  }

  simulateLs(args) {
    return {
      success: true,
      output: `total 42
drwxr-xr-x  2 ghost  wheel   512 Oct 31 23:59 .
drwxr-xr-x  8 root   wheel   512 Oct 31 23:59 ..
-rwxr-xr-x  1 ghost  wheel  2048 Oct 31 23:59 ancient_wisdom
-rw-r--r--  1 ghost  wheel   666 Oct 31 23:59 forgotten.txt
-rw-------  1 ghost  wheel  4096 Oct 31 23:59 ghost.core`,
      command: 'ls'
    };
  }

  simulateCat(args) {
    const file = args[0] || 'unknown';
    return {
      success: true,
      output: `everything is a file
pipe everything
text is universal
simplicity is complexity resolved`,
      command: 'cat'
    };
  }

  simulateGrep(args) {
    return {
      success: true,
      output: `ancient_wisdom:42:the answer to life, universe, and everything
forgotten.txt:13:remember the old ways`,
      command: 'grep'
    };
  }

  simulateMan(args) {
    const topic = args[0] || 'unknown';
    return {
      success: true,
      output: `NAME
     ${topic} - consult the manual

SYNOPSIS
     ${topic} [options]

DESCRIPTION
     rtfm

SEE ALSO
     grep(1), awk(1), sed(1)`,
      command: 'man'
    };
  }

  simulateChmod(args) {
    return {
      success: true,
      output: `permissions changed`,
      command: 'chmod'
    };
  }

  simulateRun(args) {
    return {
      success: true,
      output: `HELLO WORLD!
BASIC IS AWESOME!

READY.`,
      command: 'RUN'
    };
  }

  simulateList(args) {
    return {
      success: true,
      output: `10 PRINT "HELLO WORLD!"
20 PRINT "BASIC IS AWESOME!"
30 END

READY.`,
      command: 'LIST'
    };
  }

  simulatePrint(args) {
    const text = args.join(' ') || 'HELLO';
    return {
      success: true,
      output: `${text}

READY.`,
      command: 'PRINT'
    };
  }

  simulateCompile(args) {
    return {
      success: true,
      output: `C     FORTRAN 77 COMPILER
C
      COMPILATION SUCCESSFUL
      0 ERRORS, 0 WARNINGS
C
      OBJECT FILE CREATED: PROGRAM.O`,
      command: 'COMPILE'
    };
  }

  simulateExecute(args) {
    return {
      success: true,
      output: `C     PROGRAM EXECUTION
C
      RESULT: 42.0000
C
      EXECUTION COMPLETE`,
      command: 'EXECUTE'
    };
  }
}

export default CommandSimulator;
