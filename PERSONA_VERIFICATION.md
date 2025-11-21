# Ghost Persona Verification Guide

## Quick Verification Methods

### Method 1: Automated Test (Fastest)
```powershell
.\test-production.ps1
```
✅ Tests all 4 ghosts in 5 seconds

### Method 2: Detailed Test (Most Thorough)
```powershell
.\test-each-ghost.ps1
```
✅ Shows full responses from each ghost

### Method 3: Manual Browser Test (Visual)
1. Visit: https://kiroween.vercel.app
2. Test each ghost using the checklist below

---

## Manual Testing Checklist

### ✅ DOS Phantom (MS-DOS 6.22)

**Expected Behavior:**
- ✓ ALL CAPS for commands and errors
- ✓ Prompt: `C:\>`
- ✓ Greeting shows "MS-DOS Version 6.22"
- ✓ Command "DIR" shows file listing
- ✓ Unknown commands show "Bad command or file name"

**Test Commands:**
```
hello    → Should show greeting
DIR      → Should list AUTOEXEC.BAT, CONFIG.SYS
dir      → Should work (converts to uppercase)
invalid  → Should show "Bad command or file name"
```

**Persona Traits to Verify:**
- Authoritative but limited
- Frustrated by modern concepts
- Nostalgic for command-line dominance

---

### ✅ UNIX Necromancer (Classic UNIX)

**Expected Behavior:**
- ✓ Lowercase preferred
- ✓ Prompt: `$ `
- ✓ Greeting shows "login: ghost"
- ✓ Terse, cryptic responses
- ✓ Command "ls" shows file listing
- ✓ Unknown commands show "command not found"

**Test Commands:**
```
hello    → Should show "the unix necromancer awakens"
ls       → Should list ancient_wisdom, forgotten.txt
pwd      → Should show "command not found"
```

**Persona Traits to Verify:**
- Cryptic and terse
- "RTFM" attitude
- Pipe everything philosophy

---

### ✅ BASIC Poltergeist (Commodore 64)

**Expected Behavior:**
- ✓ Line numbers: 10, 20, 30... (increment by 10)
- ✓ Prompt: `READY.`
- ✓ Greeting shows "COMMODORE 64 BASIC V2"
- ✓ PRINT for output
- ✓ Command "RUN" executes program
- ✓ Unknown commands show "?SYNTAX ERROR"

**Test Commands:**
```
hello    → Should show BASIC program with PRINT
RUN      → Should execute and show "HELLO WORLD!"
run      → Should work (case insensitive)
invalid  → Should show "?SYNTAX ERROR"
```

**Persona Traits to Verify:**
- Enthusiastic and helpful
- Loves teaching beginners
- Nostalgic for home computing era

---

### ✅ FORTRAN Oracle (FORTRAN 77)

**Expected Behavior:**
- ✓ ALL CAPS MANDATORY
- ✓ Prompt: `C     ` (column-based formatting)
- ✓ Greeting shows "FORTRAN 77 COMPILER"
- ✓ Column-based formatting (legacy punch cards)
- ✓ DO loops, GOTO statements
- ✓ Formal, academic tone

**Test Commands:**
```
hello    → Should show FORTRAN program with WRITE statement
anything → Should show "C     ACKNOWLEDGED"
```

**Persona Traits to Verify:**
- Academic and formal
- Scientific computing focus
- Punch card nostalgia
- Precision-obsessed

---

## Verification Criteria

### ✅ Historical Accuracy
- [ ] Each persona uses era-appropriate syntax
- [ ] Error messages match historical systems
- [ ] Prompts are period-accurate
- [ ] Terminology is era-specific

### ✅ Consistent Formatting
- [ ] DOS: ALL CAPS, C:\> prompt, 8.3 filenames
- [ ] UNIX: lowercase, $ prompt, terse responses
- [ ] BASIC: line numbers, READY. prompt, PRINT statements
- [ ] FORTRAN: ALL CAPS, column formatting, C prefix

### ✅ Personality Traits
- [ ] DOS: Authoritative, frustrated by modern concepts
- [ ] UNIX: Cryptic, terse, "RTFM" attitude
- [ ] BASIC: Enthusiastic, helpful, beginner-friendly
- [ ] FORTRAN: Academic, formal, precision-focused

---

## Common Issues to Check

### ❌ Persona Not Working
**Symptoms:**
- "Failed to summon ghost" error
- No response when clicking ghost
- Blank terminal

**Quick Fix:**
```powershell
# Check API endpoint
curl https://kiroween.vercel.app/api/ghost/list
```

### ❌ Wrong Formatting
**Symptoms:**
- DOS not using ALL CAPS
- BASIC missing line numbers
- UNIX too verbose

**Check:**
- Review `api/ghost.js` persona classes
- Verify against `persona-consistency.md`

### ❌ Incorrect Responses
**Symptoms:**
- Generic responses
- Modern terminology
- Breaking character

**Check:**
- Persona response logic in `api/ghost.js`
- Historical accuracy guidelines

---

## Performance Benchmarks

### Response Time
- ✅ Good: < 500ms
- ⚠️ Acceptable: 500ms - 2s
- ❌ Slow: > 2s

**Test:**
```powershell
Measure-Command {
    $body = @{ghost='dos';message='hello'} | ConvertTo-Json
    Invoke-WebRequest -Uri 'https://kiroween.vercel.app/api/ghost' -Method POST -Body $body -ContentType 'application/json'
}
```

### Success Rate
- ✅ Good: 100% success
- ⚠️ Acceptable: > 95% success
- ❌ Poor: < 95% success

---

## Browser DevTools Verification

### Open DevTools (F12)

**Console Tab:**
- Should see no red errors
- API calls should return 200 status
- Response should contain `ghost`, `response`, `timestamp`

**Network Tab:**
1. Filter by "Fetch/XHR"
2. Click a ghost
3. Check request:
   - URL: `/api/ghost`
   - Method: POST
   - Status: 200
   - Response: JSON with ghost data

**Example Good Response:**
```json
{
  "ghost": "dos",
  "response": "MS-DOS Version 6.22\n\nC:\\> WELCOME TO THE DOS PHANTOM...",
  "formatted": "...",
  "timestamp": "2025-11-21T17:48:58.988Z"
}
```

---

## Automated Monitoring

### Daily Check
```powershell
# Add to scheduled task
.\test-production.ps1
```

### Continuous Monitoring
- Vercel Dashboard → Analytics
- Check error rate (should be < 1%)
- Monitor response times
- Review function logs

---

## Success Criteria

All 4 personas are working correctly when:

✅ **Functional:**
- All ghosts load without errors
- Each responds to "hello" with greeting
- Commands trigger appropriate responses
- Error messages are historically accurate

✅ **Accurate:**
- Formatting matches era specifications
- Prompts are period-correct
- Terminology is historically appropriate
- Personality traits are consistent

✅ **Performant:**
- Response time < 500ms
- 100% success rate
- No console errors
- Smooth user experience

---

**Last Verified:** 2025-11-21
**Status:** ✅ All 4 personas working perfectly
**Test Results:** 6/6 tests passed
