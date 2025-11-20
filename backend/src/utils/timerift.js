/**
 * Time Rift Engine
 * Compares retro solutions with modern equivalents
 */

export class TimeRiftEngine {
  constructor() {
    this.examples = {
      dos: this.dosExamples(),
      unix: this.unixExamples(),
      basic: this.basicExamples(),
      fortran: this.fortranExamples()
    };
  }

  generate(ghost, message) {
    const msg = message.toLowerCase();
    
    // Find relevant example based on keywords
    if (msg.includes('sort') || msg.includes('organize')) {
      return this.sortComparison(ghost);
    }
    
    if (msg.includes('loop') || msg.includes('iterate')) {
      return this.loopComparison(ghost);
    }
    
    if (msg.includes('file') || msg.includes('read')) {
      return this.fileComparison(ghost);
    }
    
    if (msg.includes('calculate') || msg.includes('math')) {
      return this.mathComparison(ghost);
    }
    
    // Default comparison
    return this.defaultComparison(ghost);
  }

  sortComparison(ghost) {
    const retro = {
      dos: `C:\\> TYPE SORT.BAT
@ECHO OFF
REM BUBBLE SORT IN BATCH FILE
REM LIMITED TO 10 ITEMS MAX
SET COUNT=0
:LOOP
IF %COUNT%==10 GOTO END
SET /A COUNT=%COUNT%+1
GOTO LOOP
:END
ECHO SORTED!`,
      
      unix: `$ cat sort.sh
#!/bin/sh
# the unix way
cat data.txt | sort | uniq
# simple. elegant. done.`,
      
      basic: `10 REM BUBBLE SORT
20 DIM A(100)
30 FOR I = 1 TO N-1
40 FOR J = I+1 TO N
50 IF A(I) > A(J) THEN GOSUB 1000
60 NEXT J
70 NEXT I
80 END
1000 REM SWAP SUBROUTINE
1010 T = A(I)
1020 A(I) = A(J)
1030 A(J) = T
1040 RETURN`,
      
      fortran: `C     BUBBLE SORT ALGORITHM
      SUBROUTINE SORT(A, N)
      INTEGER N
      REAL A(N)
      INTEGER I, J
      REAL TEMP
C
      DO 100 I = 1, N-1
         DO 200 J = I+1, N
            IF (A(I) .GT. A(J)) THEN
               TEMP = A(I)
               A(I) = A(J)
               A(J) = TEMP
            ENDIF
  200    CONTINUE
  100 CONTINUE
      RETURN
      END`
    };

    const modern = `// Modern JavaScript with built-in sort
const data = [5, 2, 8, 1, 9];
const sorted = [...data].sort((a, b) => a - b);

// Or with modern libraries
import { sortBy } from 'lodash';
const sorted = sortBy(data);

// Efficient algorithms built-in
// O(n log n) complexity
// Handles any data type
// Immutable by default`;

    return {
      retro: retro[ghost] || retro.dos,
      modern,
      commentary: `The retro approach required manual implementation of sorting algorithms with significant constraints. Modern languages provide optimized, built-in sorting with better performance and type safety.`
    };
  }

  loopComparison(ghost) {
    const retro = {
      dos: `C:\\> TYPE LOOP.BAT
@ECHO OFF
SET COUNT=1
:LOOP
ECHO ITERATION %COUNT%
SET /A COUNT=%COUNT%+1
IF %COUNT% LEQ 10 GOTO LOOP
ECHO DONE!`,
      
      unix: `$ cat loop.sh
#!/bin/sh
i=1
while [ $i -le 10 ]; do
    echo "iteration $i"
    i=$((i + 1))
done`,
      
      basic: `10 FOR I = 1 TO 10
20 PRINT "ITERATION "; I
30 NEXT I
40 PRINT "DONE!"`,
      
      fortran: `      DO 100 I = 1, 10
         WRITE(*,200) I
  200    FORMAT(1X,'ITERATION ',I3)
  100 CONTINUE`
    };

    const modern = `// Modern JavaScript - multiple approaches
// For loop
for (let i = 1; i <= 10; i++) {
  console.log(\`Iteration \${i}\`);
}

// Array methods (functional)
Array.from({length: 10}, (_, i) => i + 1)
  .forEach(i => console.log(\`Iteration \${i}\`));

// Modern for...of
for (const i of Array(10).keys()) {
  console.log(\`Iteration \${i + 1}\`);
}`;

    return {
      retro: retro[ghost] || retro.dos,
      modern,
      commentary: `Retro systems had limited loop constructs with strict syntax. Modern languages offer multiple iteration patterns, functional approaches, and better readability.`
    };
  }

  fileComparison(ghost) {
    const retro = {
      dos: `C:\\> TYPE READFILE.BAT
@ECHO OFF
IF NOT EXIST DATA.TXT GOTO ERROR
FOR /F "tokens=*" %%A IN (DATA.TXT) DO (
    ECHO %%A
)
GOTO END
:ERROR
ECHO FILE NOT FOUND
:END`,
      
      unix: `$ cat readfile.sh
#!/bin/sh
if [ -f data.txt ]; then
    cat data.txt | while read line; do
        echo "$line"
    done
else
    echo "file not found" >&2
    exit 1
fi`,
      
      basic: `10 OPEN "DATA.TXT" FOR INPUT AS #1
20 IF EOF(1) THEN GOTO 60
30 LINE INPUT #1, A$
40 PRINT A$
50 GOTO 20
60 CLOSE #1`,
      
      fortran: `      PROGRAM READFILE
      CHARACTER*80 LINE
      INTEGER UNIT
      UNIT = 10
      OPEN(UNIT=UNIT,FILE='DATA.TXT',STATUS='OLD')
  100 READ(UNIT,'(A)',END=200) LINE
      WRITE(*,'(A)') LINE
      GOTO 100
  200 CLOSE(UNIT)
      END`
    };

    const modern = `// Modern JavaScript with async/await
import { readFile } from 'fs/promises';

try {
  const data = await readFile('data.txt', 'utf-8');
  const lines = data.split('\\n');
  lines.forEach(line => console.log(line));
} catch (error) {
  console.error('File not found:', error.message);
}

// Or with streams for large files
import { createReadStream } from 'fs';
import { createInterface } from 'readline';

const stream = createReadStream('data.txt');
const rl = createInterface({ input: stream });
rl.on('line', line => console.log(line));`;

    return {
      retro: retro[ghost] || retro.dos,
      modern,
      commentary: `Retro file handling was synchronous with manual error checking and limited buffering. Modern approaches offer async I/O, automatic resource management, and stream processing for efficiency.`
    };
  }

  mathComparison(ghost) {
    const retro = {
      dos: `C:\\> TYPE CALC.BAT
@ECHO OFF
SET /A RESULT=2+2
ECHO RESULT: %RESULT%
REM LIMITED TO INTEGER MATH ONLY!`,
      
      unix: `$ cat calc.sh
#!/bin/sh
result=$(echo "scale=2; 2.5 * 3.7" | bc)
echo "result: $result"`,
      
      basic: `10 LET A = 2.5
20 LET B = 3.7
30 LET C = A * B
40 PRINT "RESULT: "; C`,
      
      fortran: `      PROGRAM CALC
      REAL A, B, C
      A = 2.5
      B = 3.7
      C = A * B
      WRITE(*,100) C
  100 FORMAT(1X,'RESULT: ',F8.4)
      END`
    };

    const modern = `// Modern JavaScript with full math support
const result = 2.5 * 3.7;
console.log(\`Result: \${result}\`);

// Advanced math library
import { sqrt, pow, sin, cos } from 'mathjs';
const advanced = sqrt(pow(3, 2) + pow(4, 2));

// BigInt for arbitrary precision
const huge = 123456789n ** 10n;

// Built-in constants and methods
Math.PI, Math.E, Math.random()`;

    return {
      retro: retro[ghost] || retro.dos,
      modern,
      commentary: `Retro systems had limited numeric precision and math functions. Modern languages provide arbitrary precision, comprehensive math libraries, and better handling of edge cases.`
    };
  }

  defaultComparison(ghost) {
    return {
      retro: `The ${ghost} ghost would approach this with era-specific constraints and limitations.`,
      modern: `Modern solutions leverage advanced language features, libraries, and best practices.`,
      commentary: `Computing has evolved dramatically, but the fundamental problem-solving approaches remain valuable to understand.`
    };
  }

  dosExamples() {
    return [];
  }

  unixExamples() {
    return [];
  }

  basicExamples() {
    return [];
  }

  fortranExamples() {
    return [];
  }
}

export default TimeRiftEngine;
