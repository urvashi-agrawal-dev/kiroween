# RetroGhost Architecture

## System Overview

RetroGhost is a full-stack web application that resurrects the personalities of dead computing systems through an interactive terminal interface.

## High-Level Architecture

```
┌──────────────────────────────────────────────────────────────┐
│                         USER BROWSER                          │
│  ┌────────────────────────────────────────────────────────┐  │
│  │              React Frontend (Port 5173)                │  │
│  │  ┌──────────┐  ┌──────────┐  ┌──────────────────┐    │  │
│  │  │ Terminal │  │  Ghost   │  │   CRT Effects    │    │  │
│  │  │Component │  │ Selector │  │   (Canvas)       │    │  │
│  │  └──────────┘  └──────────┘  └──────────────────┘    │  │
│  │                                                        │  │
│  │  State Management: React Hooks (useState, useEffect)  │  │
│  │  Styling: Custom CSS with VT323 font                  │  │
│  └────────────────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────────────────┘
                            │
                            │ HTTP/REST API
                            │ (fetch)
                            ▼
┌──────────────────────────────────────────────────────────────┐
│                    Node.js Backend (Port 3001)                │
│  ┌────────────────────────────────────────────────────────┐  │
│  │                   Express Server                       │  │
│  │  ┌──────────┐  ┌──────────┐  ┌──────────────────┐    │  │
│  │  │  Ghost   │  │ Time Rift│  │      MCP         │    │  │
│  │  │  Router  │  │  Engine  │  │   Simulator      │    │  │
│  │  └──────────┘  └──────────┘  └──────────────────┘    │  │
│  │                      │                                 │  │
│  │                      ▼                                 │  │
│  │  ┌────────────────────────────────────────────────┐   │  │
│  │  │           Persona Engine                       │   │  │
│  │  │  ┌──────┐ ┌──────┐ ┌──────┐ ┌──────────┐     │   │  │
│  │  │  │ DOS  │ │ UNIX │ │BASIC │ │ FORTRAN  │     │   │  │
│  │  │  └──────┘ └──────┘ └──────┘ └──────────┘     │   │  │
│  │  └────────────────────────────────────────────────┘   │  │
│  │                                                        │  │
│  │  Middleware: CORS, Helmet, Rate Limiting              │  │
│  └────────────────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────────────────┘
                            │
                            │ MCP Protocol
                            │ (JSON-RPC)
                            ▼
┌──────────────────────────────────────────────────────────────┐
│                  MCP Extension (Python)                       │
│  ┌────────────────────────────────────────────────────────┐  │
│  │              Command Simulator                         │  │
│  │  - Safe command execution                              │  │
│  │  - Historical accuracy                                 │  │
│  │  - Deterministic outputs                               │  │
│  └────────────────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────────────────┘
```

## Component Details

### Frontend Layer

#### Terminal Component
- **Responsibility**: Main chat interface
- **State Management**: 
  - `messages` - Array of chat messages
  - `input` - Current user input
  - `loading` - API request state
  - `timeRift` - Time Rift mode toggle
- **Key Features**:
  - Auto-scroll to latest message
  - Message type rendering (user, ghost, system, error, timerift)
  - Input handling with Enter key
  - Loading indicator

#### Ghost Selector Component
- **Responsibility**: Ghost persona selection
- **Props**: 
  - `ghosts` - Available ghost list
  - `selectedGhost` - Current ghost ID
  - `onSelectGhost` - Selection callback
- **Features**:
  - Dropdown selection
  - Ghost metadata display
  - Era information

#### CRT Effect Component
- **Responsibility**: Visual effects
- **Implementation**: Canvas-based animation
- **Effects**:
  - Scanlines (4px spacing)
  - Random flicker (3% probability)
  - Glow overlay
  - 60 FPS animation loop

#### API Client (`lib/api.js`)
- **Functions**:
  - `fetchGhostList()` - Get available ghosts
  - `sendMessage(ghost, message, timeRift)` - Send chat message
  - `simulateCommand(command, args)` - Execute MCP command
- **Error Handling**: Try-catch with user-friendly messages

### Backend Layer

#### Express Server (`server.js`)
- **Port**: 3001 (configurable via env)
- **Middleware Stack**:
  1. Helmet (security headers)
  2. CORS (cross-origin requests)
  3. Rate Limiting (100 req/15min)
  4. JSON body parser
- **Routes**:
  - `GET /health` - Health check
  - `GET /` - API info
  - `/api/ghost/*` - Ghost routes

#### Ghost Router (`routes/ghost.js`)
- **Endpoints**:
  - `POST /api/ghost` - Main chat endpoint
  - `GET /api/ghost/list` - List ghosts
  - `POST /api/ghost/command` - MCP simulation
- **Request Validation**:
  - Required fields check
  - Ghost ID validation
  - Input sanitization
- **Response Format**:
```json
{
  "ghost": "dos",
  "response": "C:\\> ...",
  "formatted": "...",
  "timestamp": "2025-11-20T...",
  "timeRift": {
    "retro": "...",
    "modern": "...",
    "commentary": "..."
  }
}
```

#### Persona Engine

Each persona is a class with:
- `name` - Display name
- `prompt` - Command prompt string
- `greet()` - Initial greeting
- `respond(message)` - Generate response
- `formatResponse(text)` - Format output

**DOS Phantom** (`personas/dos.js`)
- Uppercase commands
- C:\> prompt
- 8.3 filenames
- Batch file syntax
- "Bad command or file name" errors

**UNIX Necromancer** (`personas/unix.js`)
- Lowercase style
- $ prompt
- Terse responses
- Man page formatting
- Pipe philosophy

**BASIC Poltergeist** (`personas/basic.js`)
- Line numbers (10, 20, 30...)
- PRINT statements
- GOTO/GOSUB
- "?SYNTAX ERROR" messages
- Enthusiastic tone

**FORTRAN Oracle** (`personas/fortran.js`)
- ALL CAPS
- Column-based (punch card format)
- DO loops
- FORMAT statements
- Academic tone

#### Time Rift Engine (`utils/timerift.js`)
- **Purpose**: Generate retro vs modern comparisons
- **Methods**:
  - `generate(ghost, message)` - Main entry point
  - `sortComparison(ghost)` - Sorting algorithms
  - `loopComparison(ghost)` - Iteration patterns
  - `fileComparison(ghost)` - File I/O
  - `mathComparison(ghost)` - Calculations
- **Output Structure**:
```javascript
{
  retro: "Era-specific solution",
  modern: "Modern equivalent",
  commentary: "Educational explanation"
}
```

#### MCP Command Simulator (`mcp/command-simulator.js`)
- **Purpose**: Safe command execution
- **Supported Commands**: 20+ commands across 4 systems
- **Safety**: No actual system calls, all mocked
- **Deterministic**: Same input = same output

### MCP Extension Layer

#### Python MCP Server (`mcp-extension/retroghost-mcp/server.py`)
- **Protocol**: Model Context Protocol (JSON-RPC)
- **Tools**:
  - `simulate_retro_command` - Execute command
  - `list_retro_commands` - List available commands
- **Communication**: stdin/stdout JSON streams
- **Integration**: Can be called from Kiro or backend

## Data Flow

### Chat Message Flow

```
1. User types message in Terminal
   ↓
2. Terminal calls sendMessage() from API client
   ↓
3. POST /api/ghost with {ghost, message, timeRift}
   ↓
4. Ghost Router validates request
   ↓
5. Persona Engine selects ghost
   ↓
6. Ghost.respond(message) generates response
   ↓
7. If timeRift enabled, TimeRiftEngine.generate()
   ↓
8. Response sent back to frontend
   ↓
9. Terminal renders message
   ↓
10. Auto-scroll to bottom
```

### Command Simulation Flow

```
1. User types command (e.g., "DIR")
   ↓
2. Backend detects command pattern
   ↓
3. CommandSimulator.simulate(command, args)
   ↓
4. Lookup command in registry
   ↓
5. Execute mock function
   ↓
6. Return formatted output
   ↓
7. Persona wraps in appropriate formatting
   ↓
8. Display in terminal
```

## Security Considerations

### Input Sanitization
- All user inputs validated
- No eval() or exec() calls
- Command simulation is mocked (no real execution)

### Rate Limiting
- 100 requests per 15 minutes per IP
- Prevents abuse and DoS

### CORS Policy
- Restricted to frontend origin
- Credentials support for future auth

### Helmet Security Headers
- XSS protection
- Content Security Policy
- Frame options
- HSTS

## Performance Optimizations

### Frontend
- React.memo for components
- useCallback for event handlers
- Lazy loading for heavy components
- CSS animations (GPU accelerated)

### Backend
- Stateless design (horizontal scaling)
- In-memory persona instances (no DB needed)
- Efficient string operations
- Response caching potential

### Network
- Gzip compression
- Minimal payload sizes
- HTTP/2 support
- CDN-ready static assets

## Scalability

### Horizontal Scaling
- Stateless backend (can run multiple instances)
- Load balancer ready
- No session storage required

### Vertical Scaling
- Low memory footprint (~50MB per instance)
- CPU-light operations
- No database dependencies

### Caching Strategy
- Static assets: CDN + browser cache
- API responses: Can add Redis for common queries
- Persona responses: Deterministic (cacheable)

## Monitoring & Observability

### Health Checks
- `/health` endpoint
- Uptime tracking
- Memory usage

### Logging
- Request/response logging
- Error tracking
- Performance metrics

### Metrics to Track
- Response time (target: <500ms)
- Error rate (target: <1%)
- Uptime (target: 99%)
- User engagement (messages per session)

## Deployment Architecture

### Development
```
localhost:5173 (Frontend - Vite dev server)
localhost:3001 (Backend - Node.js)
```

### Production
```
Frontend: Vercel/Netlify (Static hosting)
Backend: Render/Railway (Container hosting)
MCP: Bundled with backend or separate service
```

## Technology Stack

### Frontend
- **Framework**: React 18
- **Build Tool**: Vite 5
- **Styling**: Custom CSS
- **Fonts**: VT323 (Google Fonts)
- **HTTP Client**: Fetch API

### Backend
- **Runtime**: Node.js 18+
- **Framework**: Express 4
- **Security**: Helmet, CORS
- **Rate Limiting**: express-rate-limit
- **Environment**: dotenv

### MCP Extension
- **Language**: Python 3.8+
- **Protocol**: JSON-RPC over stdio
- **Dependencies**: None (stdlib only)

### Testing
- **Framework**: Node.js native test runner
- **API Testing**: Supertest
- **Coverage**: Manual verification

## Future Enhancements

### Potential Features
1. **Persistent Chat History** - Store conversations
2. **More Ghosts** - Windows 95, Commodore 64, etc.
3. **Voice Mode** - Text-to-speech with era-appropriate voices
4. **Multiplayer** - Chat with multiple ghosts simultaneously
5. **Easter Eggs** - Hidden commands and responses

### Technical Improvements
1. **WebSocket Support** - Real-time streaming responses
2. **Database Integration** - User accounts and history
3. **Advanced MCP Tools** - More command simulations
4. **AI Enhancement** - LLM-powered persona responses
5. **Mobile App** - Native iOS/Android versions

## Conclusion

RetroGhost's architecture balances:
- **Simplicity** - Easy to understand and extend
- **Authenticity** - Historically accurate personas
- **Performance** - Fast response times
- **Scalability** - Ready for production load
- **Maintainability** - Clean separation of concerns

The modular design allows each component to be developed, tested, and deployed independently while maintaining a cohesive user experience.
