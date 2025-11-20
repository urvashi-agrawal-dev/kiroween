# RetroGhost Design

## Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                     Frontend (React/Vite)                    │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │   Terminal   │  │    Ghost     │  │  CRT Effect  │      │
│  │  Component   │  │   Selector   │  │  Component   │      │
│  └──────────────┘  └──────────────┘  └──────────────┘      │
└─────────────────────────────────────────────────────────────┘
                              │
                              │ HTTP/REST
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                    Backend (Node.js/Express)                 │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │    Ghost     │  │   Time Rift  │  │     MCP      │      │
│  │    Router    │  │    Engine    │  │  Simulator   │      │
│  └──────────────┘  └──────────────┘  └──────────────┘      │
│           │                │                  │              │
│           ▼                ▼                  ▼              │
│  ┌────────────────────────────────────────────────┐         │
│  │         Persona Engine (DOS/UNIX/BASIC/FORTRAN)│         │
│  └────────────────────────────────────────────────┘         │
└─────────────────────────────────────────────────────────────┘
```

## Correctness Properties

### P-1: UI Rendering (AC-1)
**Property**: Terminal UI renders with CRT effects  
**Verification**: Visual regression tests + CSS validation

### P-2: Ghost Switching (AC-2)
**Property**: Ghost selection updates persona state  
**Verification**: State management tests + UI integration tests

### P-3: Response Accuracy (AC-3, AC-6)
**Property**: Ghost responses match historical behavior  
**Verification**: Persona consistency tests with reference outputs

### P-4: Time Rift Comparison (AC-4)
**Property**: Time Rift returns both retro and modern solutions  
**Verification**: API tests validate dual-response structure

### P-5: Command Simulation (AC-5)
**Property**: MCP simulator returns era-appropriate output  
**Verification**: Command mapping tests + output validation

### P-6: API Contract (AC-7)
**Property**: `/api/ghost` endpoint validates input and returns correct schema  
**Verification**: API integration tests + schema validation

## Data Models

### Ghost Request
```json
{
  "ghost": "dos" | "unix" | "basic" | "fortran",
  "message": "string",
  "timeRift": boolean
}
```

### Ghost Response
```json
{
  "ghost": "string",
  "response": "string",
  "formatted": "string",
  "timeRift": {
    "retro": "string",
    "modern": "string"
  } | null
}
```

## Persona Specifications

### DOS Phantom
- All caps responses
- C:\> prompt style
- Error messages: "Bad command or file name"
- 8.3 filename limitations
- Batch file syntax

### UNIX Necromancer
- Terse, cryptic responses
- $ prompt
- Man page style formatting
- Pipe philosophy
- "RTFM" attitude

### BASIC Poltergeist
- Line numbers (10, 20, 30...)
- GOTO/GOSUB references
- "Syntax error in line X"
- PRINT statements
- Enthusiastic about simplicity

### FORTRAN Oracle
- COLUMN-BASED formatting
- ALL CAPS
- Punch card references
- DO loops and GOTO
- Scientific computing focus
