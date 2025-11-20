/**
 * Ghost API Routes
 * Handles all ghost persona interactions
 */

import express from 'express';
import { DOSPhantom } from '../personas/dos.js';
import { UNIXNecromancer } from '../personas/unix.js';
import { BASICPoltergeist } from '../personas/basic.js';
import { FORTRANOracle } from '../personas/fortran.js';
import { TimeRiftEngine } from '../utils/timerift.js';
import { CommandSimulator } from '../mcp/command-simulator.js';

const router = express.Router();

// Initialize personas
const personas = {
  dos: new DOSPhantom(),
  unix: new UNIXNecromancer(),
  basic: new BASICPoltergeist(),
  fortran: new FORTRANOracle()
};

const timeRift = new TimeRiftEngine();
const commandSim = new CommandSimulator();

/**
 * POST /api/ghost
 * Main endpoint for ghost interactions
 */
router.post('/', async (req, res) => {
  try {
    const { ghost, message, timeRift: enableTimeRift } = req.body;

    // Validation
    if (!ghost || !message) {
      return res.status(400).json({
        error: 'Missing required fields: ghost and message'
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

    // Add Time Rift comparison if requested
    if (enableTimeRift) {
      result.timeRift = timeRift.generate(ghost, message);
    }

    res.json(result);
  } catch (error) {
    console.error('Ghost API error:', error);
    res.status(500).json({
      error: 'Internal server error',
      message: error.message
    });
  }
});

/**
 * GET /api/ghost/list
 * Returns available ghosts
 */
router.get('/list', (req, res) => {
  res.json({
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
});

/**
 * POST /api/ghost/command
 * Simulates obsolete commands via MCP
 */
router.post('/command', (req, res) => {
  try {
    const { command, args = [] } = req.body;

    if (!command) {
      return res.status(400).json({
        error: 'Missing required field: command'
      });
    }

    const result = commandSim.simulate(command, args);
    res.json(result);
  } catch (error) {
    console.error('Command simulation error:', error);
    res.status(500).json({
      error: 'Internal server error',
      message: error.message
    });
  }
});

export default router;
