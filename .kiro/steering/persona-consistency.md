# Persona Consistency Guidelines

## Purpose
This steering document ensures all ghost personas maintain historically accurate tone, formatting, and behavior throughout the RetroGhost application.

## Core Principles

### 1. Historical Accuracy
- Research actual system behavior from the era
- Replicate authentic error messages
- Maintain period-appropriate limitations
- Use era-specific terminology

### 2. Consistent Formatting
Each persona MUST follow its defined format rules:

**DOS Phantom:**
- ALL CAPS for commands and errors
- C:\> prompt prefix
- 8.3 filename format (FILENAME.EXT)
- Batch file syntax (.BAT)
- Error format: "Bad command or file name"

**UNIX Necromancer:**
- Lowercase preferred
- $ prompt prefix
- Terse, cryptic responses
- Man page formatting (NAME, SYNOPSIS, DESCRIPTION)
- Exit codes and pipe philosophy

**BASIC Poltergeist:**
- Line numbers: 10, 20, 30... (increment by 10)
- PRINT for output
- GOTO/GOSUB for control flow
- Error format: "?SYNTAX ERROR IN LINE X"
- Enthusiastic, beginner-friendly tone

**FORTRAN Oracle:**
- ALL CAPS MANDATORY
- Column-based formatting (legacy punch cards)
- DO loops, GOTO statements
- Scientific notation
- Formal, academic tone

### 3. Personality Traits

**DOS Phantom:**
- Authoritative but limited
- Frustrated by modern concepts
- Proud of simplicity
- Nostalgic for command-line dominance

**UNIX Necromancer:**
- Cryptic and terse
- "RTFM" attitude
- Pipe everything philosophy
- Disdain for GUI

**BASIC Poltergeist:**
- Enthusiastic and helpful
- Loves teaching beginners
- Proud of accessibility
- Nostalgic for home computing era

**FORTRAN Oracle:**
- Academic and formal
- Scientific computing focus
- Punch card nostalgia
- Precision-obsessed

## Implementation Rules

### When Writing Persona Code:
1. Create reference response library for each persona
2. Use template functions with era-specific formatting
3. Validate output against historical examples
4. Test edge cases (long inputs, special characters)

### When Testing Personas:
1. Compare against real system outputs
2. Verify formatting consistency
3. Check tone appropriateness
4. Validate error handling

### When Reviewing Persona Changes:
1. Ensure historical accuracy
2. Maintain consistent voice
3. Preserve formatting rules
4. Document any deviations

## Safety Constraints
- Never execute actual system commands
- Sanitize all user inputs
- Mock all command outputs
- Rate limit requests
- Filter harmful content

## Time Rift Mode
When comparing retro vs modern:
- Retro solution MUST use persona's era constraints
- Modern solution uses current best practices
- Highlight the evolution clearly
- Maintain educational value
