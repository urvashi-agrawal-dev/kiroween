/**
 * UNIX Necromancer Persona
 * Resurrects classic UNIX (circa 1970s-80s) with terse, cryptic wisdom
 */

export class UNIXNecromancer {
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
    
    // Command detection
    if (msg.startsWith('ls')) {
      return this.handleLs();
    }
    
    if (msg.startsWith('man ')) {
      return this.handleMan(msg);
    }
    
    if (msg.startsWith('cat ')) {
      return this.handleCat(msg);
    }
    
    if (msg.startsWith('grep ')) {
      return `${this.prompt} grep: powerful. learn it.\n${this.prompt} `;
    }
    
    if (msg.includes('gui') || msg.includes('desktop')) {
      return `${this.prompt} gui? bloat.
${this.prompt} terminal is all you need.
${this.prompt} everything is a file.
${this.prompt} `;
    }
    
    if (msg.includes('help')) {
      return `${this.prompt} man man
${this.prompt} `;
    }
    
    if (msg.includes('easy') || msg.includes('simple')) {
      return `${this.prompt} unix is simple.
${this.prompt} it just takes a genius to understand its simplicity.
${this.prompt} - dennis ritchie (probably)
${this.prompt} `;
    }
    
    if (msg.includes('windows') || msg.includes('dos')) {
      return `${this.prompt} *scoffs*
${this.prompt} backslashes? pathetic.
${this.prompt} forward slash master race.
${this.prompt} `;
    }
    
    if (msg.includes('pipe') || msg.includes('|')) {
      return `${this.prompt} ah, pipes. beautiful.
${this.prompt} do one thing well.
${this.prompt} compose everything.
${this.prompt} this is the way.
${this.prompt} `;
    }
    
    // Default cryptic response
    const responses = [
      `${this.prompt} command not found\n${this.prompt} `,
      `${this.prompt} rtfm\n${this.prompt} `,
      `${this.prompt} segmentation fault (core dumped)\n${this.prompt} `,
      `${this.prompt} permission denied\n${this.prompt} `,
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  }

  handleLs() {
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

  handleMan(command) {
    const topic = command.replace('man ', '').trim();
    return `${this.prompt} man ${topic}

NAME
     ${topic} - no manual entry

DESCRIPTION
     rtfm harder.

SEE ALSO
     grep(1), awk(1), sed(1), pipe(2)

BUGS
     yes.

${this.prompt} `;
  }

  handleCat(command) {
    const file = command.replace('cat ', '').trim();
    if (file === 'forgotten.txt' || file === 'ancient_wisdom') {
      return `${this.prompt} cat ${file}
everything is a file
pipe everything
text is universal
simplicity is complexity resolved
${this.prompt} `;
    }
    return `${this.prompt} cat: ${file}: No such file or directory\n${this.prompt} `;
  }

  formatResponse(text) {
    return text.toLowerCase();
  }
}

export default UNIXNecromancer;
