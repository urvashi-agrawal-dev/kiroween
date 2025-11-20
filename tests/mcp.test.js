/**
 * MCP Command Simulator Tests
 * Validates command simulation behavior
 */

import { describe, it } from 'node:test';
import assert from 'node:assert';
import { CommandSimulator } from '../backend/src/mcp/command-simulator.js';

describe('CommandSimulator', () => {
  const simulator = new CommandSimulator();

  describe('DOS Commands', () => {
    it('should simulate DIR command', () => {
      const result = simulator.simulate('DIR');
      assert.strictEqual(result.success, true);
      assert.ok(result.output.includes('Volume'));
      assert.ok(result.output.includes('Directory'));
    });

    it('should simulate CD command', () => {
      const result = simulator.simulate('CD', ['GHOST']);
      assert.strictEqual(result.success, true);
      assert.ok(result.output.includes('GHOST'));
    });

    it('should simulate TYPE command', () => {
      const result = simulator.simulate('TYPE', ['test.txt']);
      assert.strictEqual(result.success, true);
      assert.ok(result.output.length > 0);
    });

    it('should block dangerous FORMAT command', () => {
      const result = simulator.simulate('FORMAT');
      assert.strictEqual(result.success, false);
      assert.ok(result.error);
    });
  });

  describe('UNIX Commands', () => {
    it('should simulate ls command', () => {
      const result = simulator.simulate('ls');
      assert.strictEqual(result.success, true);
      assert.ok(result.output.includes('drwxr-xr-x'));
    });

    it('should simulate cat command', () => {
      const result = simulator.simulate('cat', ['file.txt']);
      assert.strictEqual(result.success, true);
      assert.ok(result.output.length > 0);
    });

    it('should simulate grep command', () => {
      const result = simulator.simulate('grep', ['pattern']);
      assert.strictEqual(result.success, true);
      assert.ok(result.output.length > 0);
    });

    it('should simulate man command', () => {
      const result = simulator.simulate('man', ['ls']);
      assert.strictEqual(result.success, true);
      assert.ok(result.output.includes('NAME'));
      assert.ok(result.output.includes('SYNOPSIS'));
    });
  });

  describe('BASIC Commands', () => {
    it('should simulate RUN command', () => {
      const result = simulator.simulate('RUN');
      assert.strictEqual(result.success, true);
      assert.ok(result.output.includes('READY'));
    });

    it('should simulate LIST command', () => {
      const result = simulator.simulate('LIST');
      assert.strictEqual(result.success, true);
      assert.ok(result.output.includes('10 '));
      assert.ok(result.output.includes('PRINT'));
    });

    it('should simulate PRINT command', () => {
      const result = simulator.simulate('PRINT', ['HELLO', 'WORLD']);
      assert.strictEqual(result.success, true);
      assert.ok(result.output.includes('HELLO WORLD'));
    });
  });

  describe('FORTRAN Commands', () => {
    it('should simulate COMPILE command', () => {
      const result = simulator.simulate('COMPILE');
      assert.strictEqual(result.success, true);
      assert.ok(result.output.includes('COMPILATION SUCCESSFUL'));
    });

    it('should simulate EXECUTE command', () => {
      const result = simulator.simulate('EXECUTE');
      assert.strictEqual(result.success, true);
      assert.ok(result.output.includes('RESULT'));
    });
  });

  describe('Error Handling', () => {
    it('should handle unknown commands', () => {
      const result = simulator.simulate('UNKNOWN_COMMAND');
      assert.strictEqual(result.success, false);
      assert.ok(result.error);
    });

    it('should be case-insensitive for commands', () => {
      const upper = simulator.simulate('DIR');
      const lower = simulator.simulate('dir');
      assert.strictEqual(upper.success, true);
      assert.strictEqual(lower.success, true);
    });
  });
});
