# RetroGhost MCP Extension

Model Context Protocol extension for simulating obsolete computing commands.

## Overview

This MCP server allows Kiro (and other MCP clients) to safely simulate commands from dead computing systems without executing anything dangerous.

## Installation

### Prerequisites

- Python 3.8 or higher
- `uv` package manager (recommended) or standard Python

### Using uv (Recommended)

```bash
# Install uv if you don't have it
curl -LsSf https://astral.sh/uv/install.sh | sh

# The MCP server will be automatically available via uvx
# No additional installation needed!
```

### Manual Installation

```bash
cd mcp-extension/retroghost-mcp
python3 server.py
```

## Configuration

Add to your `.kiro/settings/mcp.json`:

```json
{
  "mcpServers": {
    "retroghost": {
      "command": "python3",
      "args": ["mcp-extension/retroghost-mcp/server.py"],
      "disabled": false,
      "autoApprove": ["list_retro_commands"]
    }
  }
}
```

## Available Tools

### `simulate_retro_command`

Simulates an obsolete command safely.

**Parameters:**
- `command` (string, required): Command to simulate (DIR, ls, RUN, COMPILE, etc.)
- `args` (array, optional): Command arguments

**Example:**
```json
{
  "name": "simulate_retro_command",
  "arguments": {
    "command": "DIR",
    "args": []
  }
}
```

### `list_retro_commands`

Lists all available retro commands.

**Example:**
```json
{
  "name": "list_retro_commands",
  "arguments": {}
}
```

## Supported Commands

### DOS Commands
- `DIR` - Directory listing
- `CD` - Change directory
- `TYPE` - Display file contents
- `COPY` - Copy files
- `DEL` - Delete files

### UNIX Commands
- `ls` - List files
- `cat` - Display file contents
- `grep` - Search text
- `man` - Manual pages
- `chmod` - Change permissions

### BASIC Commands
- `RUN` - Execute program
- `LIST` - List program
- `PRINT` - Print output

### FORTRAN Commands
- `COMPILE` - Compile program
- `EXECUTE` - Run compiled program

## Safety

All commands are simulated with mock data. No actual system commands are executed. This ensures:

- No file system modifications
- No security risks
- Deterministic outputs for demos
- Safe for educational purposes

## Testing

Test the MCP server directly:

```bash
echo '{"method":"tools/list","params":{}}' | python3 server.py
```

## Integration with RetroGhost

The MCP extension integrates with the RetroGhost backend via the `/api/ghost/command` endpoint, providing an additional layer of command simulation for enhanced realism.

## License

MIT License - See main project LICENSE file
