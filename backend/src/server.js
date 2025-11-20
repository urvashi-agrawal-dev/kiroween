/**
 * RetroGhost Backend Server
 * Resurrects the personalities of dead computing systems
 */

import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import dotenv from 'dotenv';
import ghostRouter from './routes/ghost.js';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Security middleware
app.use(helmet());

// CORS configuration
app.use(cors({
  origin: process.env.CORS_ORIGIN || 'http://localhost:5173',
  credentials: true
}));

// Rate limiting
const limiter = rateLimit({
  windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS) || 15 * 60 * 1000, // 15 minutes
  max: parseInt(process.env.RATE_LIMIT_MAX_REQUESTS) || 100,
  message: 'Too many requests from this IP, please try again later.',
  standardHeaders: true,
  legacyHeaders: false,
});

app.use('/api/', limiter);

// Body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({
    status: 'alive',
    message: 'The ghosts are awake',
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

// API routes
app.use('/api/ghost', ghostRouter);

// Root endpoint
app.get('/', (req, res) => {
  res.json({
    name: 'RetroGhost API',
    version: '1.0.0',
    description: 'Backend API for the Haunted Terminal of Forgotten Systems',
    endpoints: {
      health: '/health',
      ghost: '/api/ghost',
      ghostList: '/api/ghost/list',
      command: '/api/ghost/command'
    }
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    error: 'Not Found',
    message: 'This endpoint does not exist in the ghost realm',
    path: req.path
  });
});

// Error handler
app.use((err, req, res, next) => {
  console.error('Server error:', err);
  res.status(500).json({
    error: 'Internal Server Error',
    message: process.env.NODE_ENV === 'development' ? err.message : 'Something went wrong'
  });
});

// Start server (only in non-serverless environment)
if (process.env.NODE_ENV !== 'production' || !process.env.VERCEL) {
  app.listen(PORT, () => {
    console.log(`
╔═══════════════════════════════════════════════════════════╗
║                                                           ║
║   👻 RetroGhost Backend Server                           ║
║                                                           ║
║   The Haunted Terminal of Forgotten Systems              ║
║                                                           ║
║   Server running on: http://localhost:${PORT}            ║
║   Environment: ${process.env.NODE_ENV || 'development'}                              ║
║                                                           ║
║   Available Ghosts:                                      ║
║   - DOS Phantom (MS-DOS 6.22)                           ║
║   - UNIX Necromancer (Classic UNIX)                     ║
║   - BASIC Poltergeist (Home Computing Era)              ║
║   - FORTRAN Oracle (Scientific Computing)               ║
║                                                           ║
╚═══════════════════════════════════════════════════════════╝
  `);
  });
}

// Export for Vercel serverless
export default app;
