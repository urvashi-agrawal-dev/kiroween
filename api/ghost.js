/**
 * Vercel Serverless Function for Ghost API
 * Handles all ghost persona interactions
 */

import { DOSPhantom } from '../backend/src/personas/dos.js';
import { UNIXNecromancer } from '../backend/src/personas/unix.js';
import { BASICPoltergeist } from '../backend/src/personas/basic.js';
import { FORTRANOracle } from '../backend/src/personas/fortran.js';
import { TimeRiftEngine } from '../backend/src/utils/timerift.js';
import { CommandSimulator } from '../backend/src/mcp/command-simulator.js';

// Initialize personas (singleton pattern for serverless)
const personas = {
  dos: new DOSPhantom(),
  unix: new UNIXNecromancer(),
  basic: new BASICPoltergeist(),
  fortran: new FORTRANOracle()
};

const timeRift = new TimeRiftEngine();
const commandSim = new CommandSimulator();

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

    // POST /api/ghost/command
    if (method === 'POST' && path.endsWith('/command')) {
      const { command, args = [] } = req.body;

      if (!command) {
        return res.status(400).json({
          error: 'Missing required field: command'
        });
      }

      const result = commandSim.simulate(command, args);
      return res.status(200).json(result);
    }

    // POST /api/ghost (main endpoint)
    if (method === 'POST') {
      const { ghost, message, timeRift: enableTimeRift } = req.body;

      // Validation
      if (!ghost || !message) {
        return res.status(400).json({
          error: 'Missing required fields: ghost and message',
          debug: { ghost, message, body: req.body }
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
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
    });
  }
}
