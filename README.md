# 👻 RetroGhost

**The Haunted Terminal of Forgotten Systems**

> Resurrect the personalities of dead computing systems and chat with the ghosts of MS-DOS, Classic UNIX, BASIC, and FORTRAN in a spooky CRT-themed terminal.

🎃 **Kiroween 2025 Submission - Resurrection Category**

![RetroGhost Banner](https://img.shields.io/badge/Kiroween-2025-orange?style=for-the-badge) ![License](https://img.shields.io/badge/license-MIT-green?style=for-the-badge) ![Status](https://img.shields.io/badge/status-haunted-purple?style=for-the-badge)

## 🌟 What is RetroGhost?

RetroGhost brings back the personalities of abandoned operating systems and programming environments as interactive "software ghosts." Each ghost responds with historically accurate tone, formatting, quirks, and era-specific limitations—creating an educational and entertaining experience that celebrates computing history.

### Available Ghosts

- **👾 DOS Phantom** (MS-DOS 6.22, 1981-1995) - Command-line dominance with ALL CAPS authority
- **🧙 UNIX Necromancer** (Classic UNIX, 1970s-80s) - Terse, cryptic wisdom with pipe philosophy
- **🎮 BASIC Poltergeist** (Home Computing Era, 1980s) - Enthusiastic line-numbered programming
- **🔬 FORTRAN Oracle** (Scientific Computing, 1950s-1990s) - Punch card precision and academic formality

## ✨ Features

- **Haunted CRT Terminal UI** - Authentic scanlines, glow effects, and retro fonts
- **Historically Accurate Personas** - Each ghost maintains era-specific behavior and constraints
- **Time Rift Mode** - Compare retro solutions with modern equivalents side-by-side
- **MCP Command Simulator** - Safely execute obsolete commands (DIR, ls, RUN, COMPILE)
- **Full Kiro Integration** - Specs, hooks, and steering for AI-assisted development
- **Production Ready** - Complete with tests, documentation, and deployment configs

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Python 3.8+ (for MCP extension)

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/retroghost.git
cd retroghost

# Install backend dependencies
cd backend
npm install
cp .env.example .env

# Install frontend dependencies
cd ../frontend
npm install

# Start the backend (in one terminal)
cd backend
npm start

# Start the frontend (in another terminal)
cd frontend
npm run dev
```

Visit `http://localhost:5173` and start chatting with ghosts! 👻

## 🎮 Usage

1. **Select a Ghost** - Choose from DOS, UNIX, BASIC, or FORTRAN
2. **Type Your Message** - Ask questions, request help, or just chat
3. **Enable Time Rift** - Toggle to see retro vs modern comparisons
4. **Try Commands** - Type era-specific commands (DIR, ls, RUN, etc.)

### Example Interactions

```
C:\> hello
MS-DOS Version 6.22
WELCOME TO THE DOS PHANTOM
TYPE YOUR COMMANDS IN UPPERCASE FOR BEST RESULTS

C:\> how do I sort files?
[Shows batch file sorting with Time Rift comparison to modern JavaScript]
```

## 🏗️ Architecture

```
┌─────────────────────────────────────────┐
│   Frontend (React + Vite)              │
│   - CRT Terminal UI                     │
│   - Ghost Selector                      │
│   - Real-time Chat                      │
└─────────────────────────────────────────┘
                  ↓ HTTP/REST
┌─────────────────────────────────────────┐
│   Backend (Node.js + Express)          │
│   - Persona Engine                      │
│   - Time Rift Comparisons               │
│   - MCP Command Simulator               │
└─────────────────────────────────────────┘
                  ↓ MCP Protocol
┌─────────────────────────────────────────┐
│   MCP Extension (Python)                │
│   - Safe Command Simulation             │
│   - Historical Accuracy                 │
└─────────────────────────────────────────┘
```

## 🧪 Testing

```bash
# Run all tests
npm test

# Run specific test suites
npm test tests/personas.test.js
npm test tests/api.test.js
npm test tests/mcp.test.js
```

## 📚 Documentation

- [KIRO_USAGE.md](./KIRO_USAGE.md) - Detailed Kiro integration guide
- [docs/ARCHITECTURE.md](./docs/ARCHITECTURE.md) - Technical architecture
- [docs/DEMO_SCRIPT.md](./docs/DEMO_SCRIPT.md) - 3-minute demo walkthrough
- [docs/DEVPOST_SUBMISSION.md](./docs/DEVPOST_SUBMISSION.md) - Competition submission text
- [mcp-extension/README.md](./mcp-extension/README.md) - MCP extension docs

## 🎯 Kiro Integration

RetroGhost showcases deep Kiro integration:

### Specs
- Complete requirements, design, and task specifications
- Property-based correctness validation
- Acceptance criteria for all features

### Hooks
- **Persona Test Generator** - Auto-generates tests when personas change
- **Tone Validator** - Ensures historical accuracy
- **Ghost Diff Generator** - Creates Time Rift examples

### Steering
- **Persona Consistency** - Maintains authentic tone and formatting
- Enforces era-specific constraints
- Guides AI development decisions

See [KIRO_USAGE.md](./KIRO_USAGE.md) for complete details.

## 🚢 Deployment

### Frontend (Vercel)

```bash
cd frontend
npm run build
# Deploy to Vercel
vercel --prod
```

### Backend (Render/Railway)

```bash
cd backend
# Set environment variables
# Deploy to Render or Railway
```

See deployment guides in `docs/` for detailed instructions.

## 🤝 Contributing

This is a Kiroween 2025 competition entry, but contributions are welcome!

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests
5. Submit a pull request

## 📜 License

MIT License - See [LICENSE](./LICENSE) file

## 🎃 Kiroween 2025

**Category:** Resurrection  
**Theme:** Bringing dead systems back to life  
**Innovation:** First-ever interactive ghost terminal with historically accurate personas

### Why This Wins

1. **Unique Concept** - Never-been-done-before idea
2. **Deep Kiro Integration** - Specs, hooks, steering, MCP
3. **Educational Value** - Teaches computing history
4. **Technical Excellence** - Production-ready code
5. **Polished UI** - Authentic CRT effects and retro styling
6. **Complete Documentation** - Everything needed to run and extend

## 🙏 Acknowledgments

- Inspired by the pioneers of computing
- Built with Kiro AI assistance
- Dedicated to preserving computing history

## 📞 Contact

- GitHub: [@yourusername](https://github.com/yourusername)
- Email: your.email@example.com
- Demo: [retroghost.vercel.app](https://retroghost.vercel.app)

---

**Made with 👻 for Kiroween 2025**

*"The ghosts of computing past live on in these commands. Remember us fondly."*
