/**
 * Persona Consistency Tests
 * Validates that each ghost maintains historical accuracy
 */

import { describe, it } from 'node:test';
import assert from 'node:assert';
import { DOSPhantom } from '../backend/src/personas/dos.js';
import { UNIXNecromancer } from '../backend/src/personas/unix.js';
import { BASICPoltergeist } from '../backend/src/personas/basic.js';
import { FORTRANOracle } from '../backend/src/personas/fortran.js';

describe('DOS Phantom', () => {
  const dos = new DOSPhantom();

  it('should use C:\\> prompt', () => {
    assert.strictEqual(dos.prompt, 'C:\\>');
  });

  it('should respond with uppercase commands', () => {
    const response = dos.respond('DIR');
    assert.ok(response.includes('C:\\>'));
    assert.ok(response.includes('DIR'));
  });

  it('should show "Bad command or file name" for unknown commands', () => {
    const response = dos.respond('INVALID');
    assert.ok(response.includes('Bad command or file name'));
  });

  it('should maintain DOS formatting in DIR command', () => {
    const response = dos.handleDir();
    assert.ok(response.includes('Volume'));
    assert.ok(response.includes('Directory'));
    assert.ok(response.includes('bytes free'));
  });
});

describe('UNIX Necromancer', () => {
  const unix = new UNIXNecromancer();

  it('should use $ prompt', () => {
    assert.strictEqual(unix.prompt, '$');
  });

  it('should respond with lowercase style', () => {
    const response = unix.respond('ls');
    assert.ok(response.includes('$'));
  });

  it('should be terse and cryptic', () => {
    const response = unix.respond('help');
    assert.ok(response.length < 100); // Terse responses
    assert.ok(response.includes('man') || response.includes('rtfm'));
  });

  it('should handle ls command with proper formatting', () => {
    const response = unix.handleLs();
    assert.ok(response.includes('drwxr-xr-x'));
    assert.ok(response.includes('total'));
  });
});

describe('BASIC Poltergeist', () => {
  const basic = new BASICPoltergeist();

  it('should use READY. prompt', () => {
    assert.strictEqual(basic.prompt, 'READY.');
  });

  it('should use line numbers', () => {
    const response = basic.respond('LIST');
    assert.ok(response.includes('10 '));
    assert.ok(response.includes('20 '));
  });

  it('should use PRINT statements', () => {
    const response = basic.respond('RUN');
    assert.ok(response.includes('PRINT'));
  });

  it('should show syntax errors properly', () => {
    const response = basic.respond('INVALID');
    assert.ok(response.includes('?SYNTAX ERROR'));
  });

  it('should be enthusiastic and helpful', () => {
    const response = basic.respond('HELP');
    assert.ok(response.includes('!') || response.includes('FUN') || response.includes('EASY'));
  });
});

describe('FORTRAN Oracle', () => {
  const fortran = new FORTRANOracle();

  it('should use column-based formatting', () => {
    const response = fortran.greet();
    assert.ok(response.includes('C     ')); // Comment column
  });

  it('should use ALL CAPS', () => {
    const response = fortran.respond('CALCULATE');
    const hasLowercase = /[a-z]/.test(response.replace(/\n/g, '').replace(/ /g, ''));
    assert.ok(!hasLowercase || response.includes('FORMAT')); // FORMAT strings may have lowercase
  });

  it('should use DO loops', () => {
    const response = fortran.handleDoLoop();
    assert.ok(response.includes('DO '));
    assert.ok(response.includes('CONTINUE'));
  });

  it('should maintain formal academic tone', () => {
    const response = fortran.respond('HELP');
    assert.ok(response.includes('PROGRAM') || response.includes('SUBROUTINE'));
  });
});

describe('Persona Consistency', () => {
  it('all personas should have unique prompts', () => {
    const dos = new DOSPhantom();
    const unix = new UNIXNecromancer();
    const basic = new BASICPoltergeist();
    const fortran = new FORTRANOracle();

    const prompts = [dos.prompt, unix.prompt, basic.prompt, fortran.prompt];
    const uniquePrompts = new Set(prompts);
    assert.strictEqual(uniquePrompts.size, 4);
  });

  it('all personas should respond to greet()', () => {
    const personas = [
      new DOSPhantom(),
      new UNIXNecromancer(),
      new BASICPoltergeist(),
      new FORTRANOracle(),
    ];

    personas.forEach((persona) => {
      const greeting = persona.greet();
      assert.ok(greeting.length > 0);
      assert.ok(typeof greeting === 'string');
    });
  });

  it('all personas should respond to messages', () => {
    const personas = [
      new DOSPhantom(),
      new UNIXNecromancer(),
      new BASICPoltergeist(),
      new FORTRANOracle(),
    ];

    personas.forEach((persona) => {
      const response = persona.respond('test');
      assert.ok(response.length > 0);
      assert.ok(typeof response === 'string');
    });
  });
});
