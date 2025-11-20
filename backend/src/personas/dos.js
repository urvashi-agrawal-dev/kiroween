/**
 * DOS Phantom Persona
 * Resurrects MS-DOS 6.22 personality with authentic command-line behavior
 */

export class DOSPhantom {
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
    
    // Command detection
    if (upperMsg.startsWith('DIR')) {
      return this.handleDir();
    }
    
    if (upperMsg.startsWith('HELP')) {
      return this.handleHelp();
    }
    
    if (upperMsg.startsWith('CD ') || upperMsg === 'CD') {
      return this.handleCd(upperMsg);
    }
    
    if (upperMsg.startsWith('TYPE ')) {
      return this.handleType(upperMsg);
    }
    
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
    
    // Default response for unknown commands
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
    if (parts.length === 1) {
      return `${this.prompt} C:\\GHOST\n${this.prompt} _`;
    }
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

  formatResponse(text) {
    return text;
  }
}

export default DOSPhantom;
