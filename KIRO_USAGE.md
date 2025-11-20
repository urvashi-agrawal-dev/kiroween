# Kiro Integration Guide for RetroGhost

This document explains how RetroGhost leverages Kiro's advanced features for AI-assisted development.

## Overview

RetroGhost demonstrates comprehensive Kiro integration across:
- **Specs** - Formal requirements, design, and task management
- **Hooks** - Automated workflows triggered by events
- **Steering** - AI guidance for consistent development
- **MCP Extensions** - Custom tools for command simulation

## 📋 Specs

Location: `.kiro/specs/retroghost/`

### Requirements (`requirements.md`)

Defines acceptance criteria for all features:

- **AC-1**: Haunted Terminal UI with CRT effects
- **AC-2**: Ghost selection and switching
- **AC-3**: Historically accurate ghost interactions
- **AC-4**: Time Rift Mode for retro/modern comparisons
- **AC-5**: MCP command simulation
- **AC-6**: Persona consistency enforcement
- **AC-7**: API endpoint contracts

**Usage with Kiro:**
```
Ask Kiro: "Check if AC-3 is satisfied"
Ask Kiro: "Generate tests for AC-4"
Ask Kiro: "What requirements are not yet implemented?"
```

### Design (`design.md`)

Defines correctness properties and architecture:

- **P-1**: UI Rendering - Terminal displays with CRT effects
- **P-2**: Ghost Switching - State management for persona changes
- **P-3**: Response Accuracy - Historical behavior matching
- **P-4**: Time Rift Comparison - Dual-response structure
- **P-5**: Command Simulation - Era-appropriate outputs
- **P-6**: API Contract - Input validation and schema compliance

**Usage with Kiro:**
```
Ask Kiro: "Verify P-3 is correctly implemented"
Ask Kiro: "Show me the data flow for P-4"
Ask Kiro: "Generate architecture diagram"
```

### Tasks (`tasks.md`)

Tracks implementation progress across 7 phases:

1. Foundation (T-1 to T-4)
2. Backend Core (T-5 to T-11)
3. Frontend (T-12 to T-15)
4. MCP Extension (T-16 to T-18)
5. Testing (T-19 to T-21)
6. Documentation (T-22 to T-26)
7. Deployment (T-27 to T-30)

**Usage with Kiro:**
```
Ask Kiro: "What tasks are remaining?"
Ask Kiro: "Implement T-9"
Ask Kiro: "Show dependencies for T-15"
```

## 🪝 Hooks

Location: `.kiro/hooks/`

### 1. Persona Test Generator

**File:** `persona-test-generator.json`

**Trigger:** When any file in `backend/src/personas/*.js` is saved

**Action:** Automatically generates or updates consistency tests

**How it works:**
1. Detects persona file changes
2. Sends message to Kiro to generate tests
3. Validates formatting, tone, and historical accuracy
4. Updates `tests/personas.test.js`

**Manual trigger:**
```
Click "Generate Persona Tests" in Kiro Hooks panel
```

### 2. Tone Validator

**File:** `tone-validator.json`

**Trigger:** Manual button click

**Action:** Validates all personas against steering rules

**How it works:**
1. Checks DOS Phantom uses ALL CAPS and C:\> prompt
2. Checks UNIX Necromancer uses lowercase and $ prompt
3. Checks BASIC Poltergeist uses line numbers
4. Checks FORTRAN Oracle uses column-based formatting
5. Reports deviations with suggested fixes

**Manual trigger:**
```
Click "🎃 Validate Ghost Tone" in Kiro Hooks panel
```

### 3. Ghost Diff Generator

**File:** `ghost-diff-generator.json`

**Trigger:** Manual button click

**Action:** Generates new Time Rift comparison examples

**How it works:**
1. Creates side-by-side retro vs modern comparisons
2. Ensures retro solution follows persona constraints
3. Adds educational commentary
4. Updates `backend/src/utils/timerift.js`

**Manual trigger:**
```
Click "⏰ Generate Time Rift Example" in Kiro Hooks panel
```

## 🎯 Steering

Location: `.kiro/steering/persona-consistency.md`

### Purpose

Ensures all ghost personas maintain historically accurate tone, formatting, and behavior throughout development.

### Core Principles

1. **Historical Accuracy** - Research actual system behavior
2. **Consistent Formatting** - Each persona follows defined rules
3. **Personality Traits** - Maintain character voice

### Persona Rules

**DOS Phantom:**
- ALL CAPS for commands and errors
- C:\> prompt prefix
- 8.3 filename format
- "Bad command or file name" errors

**UNIX Necromancer:**
- Lowercase preferred
- $ prompt prefix
- Terse, cryptic responses
- Man page formatting

**BASIC Poltergeist:**
- Line numbers: 10, 20, 30...
- PRINT for output
- "?SYNTAX ERROR IN LINE X"
- Enthusiastic tone

**FORTRAN Oracle:**
- ALL CAPS MANDATORY
- Column-based formatting
- DO loops, GOTO statements
- Formal, academic tone

### How Kiro Uses Steering

When you ask Kiro to:
- Add a new persona response
- Modify existing behavior
- Generate tests
- Review code

Kiro automatically references `persona-consistency.md` to ensure compliance.

**Example:**
```
You: "Add a new response for DOS Phantom about networking"

Kiro: [Checks steering rules]
      [Ensures ALL CAPS]
      [Uses C:\> prompt]
      [Maintains frustrated tone about modern concepts]
      [Generates historically accurate response]
```

## 🔧 MCP Extension

Location: `mcp-extension/retroghost-mcp/`

### Configuration

Add to `.kiro/settings/mcp.json`:

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

### Available Tools

1. **simulate_retro_command** - Safely simulate obsolete commands
2. **list_retro_commands** - List all available commands

### Usage with Kiro

```
Ask Kiro: "Use MCP to simulate DIR command"
Ask Kiro: "Show me what 'ls -la' would output in UNIX"
Ask Kiro: "List all available retro commands"
```

Kiro will automatically use the MCP extension to provide authentic command outputs.

## 🎨 Workflow Examples

### Adding a New Ghost Persona

1. **Create persona file:**
   ```
   Ask Kiro: "Create a new persona for Windows 95 in backend/src/personas/win95.js"
   ```

2. **Kiro automatically:**
   - References `persona-consistency.md` for formatting rules
   - Generates historically accurate responses
   - Creates greeting and response methods

3. **Hook triggers:**
   - Persona Test Generator creates tests automatically
   - Tone Validator checks consistency

4. **Update specs:**
   ```
   Ask Kiro: "Update design.md to include Windows 95 persona"
   ```

### Implementing Time Rift Feature

1. **Check requirements:**
   ```
   Ask Kiro: "Show me AC-4 requirements"
   ```

2. **Implement feature:**
   ```
   Ask Kiro: "Implement Time Rift comparison for sorting algorithms"
   ```

3. **Kiro uses:**
   - Design specs (P-4) for structure
   - Steering rules for retro solution formatting
   - Task list (T-10) for context

4. **Generate examples:**
   - Click "⏰ Generate Time Rift Example" hook
   - Kiro creates new comparisons

### Validating Persona Consistency

1. **Manual validation:**
   - Click "🎃 Validate Ghost Tone" hook
   - Review Kiro's report

2. **Automatic validation:**
   - Save any persona file
   - Persona Test Generator runs
   - Tests verify consistency

3. **Fix issues:**
   ```
   Ask Kiro: "Fix the DOS Phantom to use proper 8.3 filenames"
   ```

## 📊 Spec Coverage

Use Kiro's property coverage tool:

```bash
Ask Kiro: "Check property coverage for retroghost spec"
```

This shows:
- Which acceptance criteria have tests
- Which properties are verified
- Coverage gaps

## 🚀 Development Workflow

### Starting a New Feature

1. **Define in specs:**
   ```
   Ask Kiro: "Add AC-8 for ghost chat history persistence"
   ```

2. **Create design:**
   ```
   Ask Kiro: "Add P-7 for history storage correctness"
   ```

3. **Add tasks:**
   ```
   Ask Kiro: "Break down AC-8 into implementation tasks"
   ```

4. **Implement:**
   ```
   Ask Kiro: "Implement T-31: Add history storage"
   ```

5. **Test:**
   - Hooks auto-generate tests
   - Steering ensures consistency

### Debugging Issues

1. **Check specs:**
   ```
   Ask Kiro: "Which property is failing for ghost responses?"
   ```

2. **Review steering:**
   ```
   Ask Kiro: "Am I following persona-consistency rules for UNIX?"
   ```

3. **Run validators:**
   - Click "🎃 Validate Ghost Tone"
   - Review automated feedback

## 🎯 Best Practices

### When to Use Specs

- Defining new features
- Clarifying requirements
- Tracking progress
- Generating tests

### When to Use Hooks

- Automating repetitive tasks
- Enforcing consistency
- Generating boilerplate
- Running validations

### When to Use Steering

- Maintaining code style
- Enforcing domain rules
- Guiding AI decisions
- Documenting standards

### When to Use MCP

- Simulating external systems
- Testing integrations
- Providing mock data
- Educational demonstrations

## 🔍 Advanced Usage

### Custom Hooks

Create new hooks for:
- Auto-updating documentation
- Running specific test suites
- Generating API clients
- Deploying to staging

### Extended Steering

Add steering for:
- API design patterns
- Error handling conventions
- Performance requirements
- Security guidelines

### Spec Refinement

Iterate on specs:
- Add more detailed properties
- Break down complex tasks
- Link to external docs
- Track technical debt

## 📚 Resources

- [Kiro Specs Documentation](https://docs.kiro.ai/specs)
- [Kiro Hooks Guide](https://docs.kiro.ai/hooks)
- [Kiro Steering Best Practices](https://docs.kiro.ai/steering)
- [MCP Protocol Specification](https://modelcontextprotocol.io)

## 🎃 Conclusion

RetroGhost demonstrates how Kiro's features work together:

- **Specs** provide structure and validation
- **Hooks** automate workflows
- **Steering** maintains consistency
- **MCP** extends capabilities

This integration enables rapid, high-quality development while preserving the unique character of each ghost persona.

---

**Questions?**

Ask Kiro: "Explain how [feature] uses Kiro integration"
