# RetroGhost Demo Script

**Duration:** 3 minutes  
**Target Audience:** Kiroween 2025 judges  
**Goal:** Showcase unique innovation, Kiro integration, and technical excellence

---

## 🎬 Opening (0:00 - 0:20)

### Visual
- Screen shows RetroGhost loading screen with CRT effects
- Scanlines and glow visible
- Title appears: "RetroGhost - The Haunted Terminal of Forgotten Systems"

### Narration
> "What if you could talk to the ghosts of dead computing systems? RetroGhost brings back MS-DOS, Classic UNIX, BASIC, and FORTRAN as interactive personalities—each with historically accurate behavior, quirks, and limitations."

### Actions
- Application loads
- CRT effects animate
- Ghost selector appears

---

## 👾 DOS Phantom Demo (0:20 - 0:50)

### Visual
- Select "DOS Phantom" from dropdown
- Terminal shows MS-DOS 6.22 greeting
- Prompt: `C:\>`

### Narration
> "Meet the DOS Phantom—the ghost of MS-DOS 6.22. Watch how it responds with authentic ALL CAPS commands and nostalgic frustration about modern concepts."

### Actions
1. **Type:** `hello`
   - Shows DOS greeting with version info
   
2. **Type:** `how do I sort files?`
   - DOS responds with batch file limitations
   - Shows "Bad command or file name" style errors

3. **Type:** `what about the cloud?`
   - DOS: "CLOUD? THE ONLY CLOUD I KNOW IS IN THE SKY! WE STORED EVERYTHING ON 1.44MB FLOPPIES!"

### Key Points
- ALL CAPS formatting ✓
- C:\> prompt ✓
- Era-specific personality ✓

---

## ⏰ Time Rift Mode (0:50 - 1:20)

### Visual
- Toggle "Time Rift Mode" checkbox
- Screen splits to show comparison

### Narration
> "Time Rift Mode shows how retro systems solved problems versus modern approaches—educational and entertaining."

### Actions
1. **Type:** `how to loop 10 times?`
   
2. **Response shows:**
   - **LEFT SIDE (Retro):**
     ```batch
     @ECHO OFF
     SET COUNT=1
     :LOOP
     ECHO ITERATION %COUNT%
     SET /A COUNT=%COUNT%+1
     IF %COUNT% LEQ 10 GOTO LOOP
     ```
   
   - **RIGHT SIDE (Modern):**
     ```javascript
     for (let i = 1; i <= 10; i++) {
       console.log(`Iteration ${i}`);
     }
     ```
   
   - **COMMENTARY:** "Retro systems had limited loop constructs with strict syntax. Modern languages offer multiple iteration patterns..."

### Key Points
- Side-by-side comparison ✓
- Educational value ✓
- Authentic retro constraints ✓

---

## 🧙 UNIX Necromancer Demo (1:20 - 1:45)

### Visual
- Switch to "UNIX Necromancer"
- Terminal shows `$` prompt
- Lowercase, cryptic style

### Narration
> "The UNIX Necromancer is terse, cryptic, and proud of the pipe philosophy. Every response feels like classic UNIX wisdom."

### Actions
1. **Type:** `help`
   - Response: `$ man man`
   
2. **Type:** `ls`
   - Shows authentic `drwxr-xr-x` file listing
   
3. **Type:** `what about GUIs?`
   - Response: `$ gui? bloat. terminal is all you need. everything is a file.`

### Key Points
- Lowercase style ✓
- Terse responses ✓
- UNIX philosophy ✓

---

## 🎮 BASIC Poltergeist Demo (1:45 - 2:05)

### Visual
- Switch to "BASIC Poltergeist"
- Terminal shows `READY.` prompt
- Line numbers visible

### Narration
> "The BASIC Poltergeist is enthusiastic and beginner-friendly—just like home computing in the 1980s."

### Actions
1. **Type:** `hello`
   - Shows greeting with line numbers:
     ```basic
     10 PRINT "HELLO, FRIEND!"
     20 PRINT "I'M THE BASIC POLTERGEIST!"
     30 PRINT "LET'S LEARN PROGRAMMING TOGETHER!"
     ```

2. **Type:** `show me a loop`
   - Response with FOR/NEXT loop
   - Enthusiastic comments

### Key Points
- Line numbers (10, 20, 30...) ✓
- PRINT statements ✓
- Enthusiastic tone ✓

---

## 🔬 FORTRAN Oracle Demo (2:05 - 2:25)

### Visual
- Switch to "FORTRAN Oracle"
- Column-based formatting visible
- ALL CAPS responses

### Narration
> "The FORTRAN Oracle brings punch card precision and scientific computing formality."

### Actions
1. **Type:** `CALCULATE`
   - Shows FORTRAN program with:
     ```fortran
     C     NUMERICAL COMPUTATION
           PROGRAM COMPUTE
           REAL X, Y, RESULT
     ```

2. **Type:** `PUNCH CARDS`
   - Response about 80-column cards and discipline

### Key Points
- Column-based format ✓
- ALL CAPS ✓
- Academic tone ✓

---

## 🎯 Kiro Integration Showcase (2:25 - 2:45)

### Visual
- Quick screen recording of Kiro interface
- Show `.kiro/` directory structure

### Narration
> "RetroGhost deeply integrates Kiro's features: Specs define requirements and correctness properties. Hooks auto-generate tests when personas change. Steering ensures historical accuracy. And an MCP extension safely simulates obsolete commands."

### Actions
- Show `.kiro/specs/retroghost/` files
- Show `.kiro/hooks/` with 3 hooks
- Show `.kiro/steering/persona-consistency.md`
- Show MCP extension running

### Key Points
- Complete spec coverage ✓
- 3 automated hooks ✓
- Steering for consistency ✓
- Custom MCP extension ✓

---

## 🏆 Closing (2:45 - 3:00)

### Visual
- Return to terminal with all 4 ghosts shown
- CRT effects prominent
- GitHub repo link appears

### Narration
> "RetroGhost resurrects computing history with authentic personalities, educational Time Rifts, and deep Kiro integration. It's unique, technically excellent, and celebrates the pioneers who built the systems we use today. The ghosts are waiting—will you chat with them?"

### Actions
- Show GitHub: `github.com/yourusername/retroghost`
- Show live demo: `retroghost.vercel.app`
- End with ghost emoji: 👻

---

## 📋 Demo Checklist

Before recording:

- [ ] Backend server running on port 3001
- [ ] Frontend running on port 5173
- [ ] All ghosts responding correctly
- [ ] Time Rift mode working
- [ ] CRT effects visible
- [ ] No console errors
- [ ] Good lighting and screen recording quality
- [ ] Audio clear and professional
- [ ] 3-minute timer ready

## 🎥 Recording Tips

1. **Screen Resolution:** 1920x1080 minimum
2. **Frame Rate:** 60 FPS for smooth CRT effects
3. **Audio:** Clear voiceover, no background noise
4. **Pacing:** Speak clearly, not too fast
5. **Transitions:** Smooth between ghosts
6. **Text Size:** Large enough to read in video
7. **Cursor:** Visible but not distracting

## 🎨 Visual Highlights

- CRT scanlines and glow
- Retro VT323 font
- Green terminal aesthetic
- Smooth animations
- Time Rift split-screen
- Ghost selector dropdown
- Authentic command outputs

## 💡 Talking Points

### Uniqueness
- First-ever ghost terminal concept
- Never-been-done-before interaction model
- Celebrates computing history

### Technical Excellence
- Production-ready code
- Full test coverage
- Clean architecture
- Scalable design

### Kiro Integration
- Complete specs (requirements, design, tasks)
- 3 automated hooks
- Steering for consistency
- Custom MCP extension

### Educational Value
- Teaches computing history
- Shows evolution of programming
- Authentic historical behavior
- Time Rift comparisons

### Polish
- Beautiful CRT UI
- Smooth animations
- Responsive design
- Professional documentation

## 🚀 Backup Plan

If live demo fails:
1. Have pre-recorded video ready
2. Show screenshots as fallback
3. Walk through code instead
4. Emphasize documentation quality

## 📊 Success Metrics

Demo is successful if judges see:
- ✅ All 4 ghosts working
- ✅ Time Rift comparison
- ✅ Authentic persona behavior
- ✅ Kiro integration depth
- ✅ Professional polish
- ✅ Unique innovation

---

**Good luck! The ghosts are counting on you! 👻**
