/**
 * API Integration Tests
 * Tests the ghost API endpoints
 */

import { describe, it, before, after } from 'node:test';
import assert from 'node:assert';

// Note: These tests require the server to be running
// Run with: npm test (after starting the server)

const API_BASE = 'http://localhost:3001';

describe('Ghost API', () => {
  describe('GET /health', () => {
    it('should return health status', async () => {
      const response = await fetch(`${API_BASE}/health`);
      const data = await response.json();
      
      assert.strictEqual(response.status, 200);
      assert.strictEqual(data.status, 'alive');
      assert.ok(data.timestamp);
    });
  });

  describe('GET /api/ghost/list', () => {
    it('should return list of available ghosts', async () => {
      const response = await fetch(`${API_BASE}/api/ghost/list`);
      const data = await response.json();
      
      assert.strictEqual(response.status, 200);
      assert.ok(Array.isArray(data.ghosts));
      assert.strictEqual(data.ghosts.length, 4);
      
      const ghostIds = data.ghosts.map(g => g.id);
      assert.ok(ghostIds.includes('dos'));
      assert.ok(ghostIds.includes('unix'));
      assert.ok(ghostIds.includes('basic'));
      assert.ok(ghostIds.includes('fortran'));
    });
  });

  describe('POST /api/ghost', () => {
    it('should return ghost response', async () => {
      const response = await fetch(`${API_BASE}/api/ghost`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ghost: 'dos',
          message: 'hello',
          timeRift: false
        })
      });
      
      const data = await response.json();
      
      assert.strictEqual(response.status, 200);
      assert.strictEqual(data.ghost, 'dos');
      assert.ok(data.response);
      assert.ok(data.timestamp);
    });

    it('should return time rift comparison when enabled', async () => {
      const response = await fetch(`${API_BASE}/api/ghost`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ghost: 'dos',
          message: 'how to sort',
          timeRift: true
        })
      });
      
      const data = await response.json();
      
      assert.strictEqual(response.status, 200);
      assert.ok(data.timeRift);
      assert.ok(data.timeRift.retro);
      assert.ok(data.timeRift.modern);
      assert.ok(data.timeRift.commentary);
    });

    it('should return 400 for missing fields', async () => {
      const response = await fetch(`${API_BASE}/api/ghost`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ghost: 'dos'
          // missing message
        })
      });
      
      assert.strictEqual(response.status, 400);
    });

    it('should return 400 for invalid ghost', async () => {
      const response = await fetch(`${API_BASE}/api/ghost`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ghost: 'invalid',
          message: 'test'
        })
      });
      
      assert.strictEqual(response.status, 400);
    });
  });

  describe('POST /api/ghost/command', () => {
    it('should simulate DOS commands', async () => {
      const response = await fetch(`${API_BASE}/api/ghost/command`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          command: 'DIR',
          args: []
        })
      });
      
      const data = await response.json();
      
      assert.strictEqual(response.status, 200);
      assert.strictEqual(data.success, true);
      assert.ok(data.output);
      assert.strictEqual(data.command, 'DIR');
    });

    it('should simulate UNIX commands', async () => {
      const response = await fetch(`${API_BASE}/api/ghost/command`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          command: 'ls',
          args: []
        })
      });
      
      const data = await response.json();
      
      assert.strictEqual(response.status, 200);
      assert.strictEqual(data.success, true);
      assert.ok(data.output);
    });
  });
});
