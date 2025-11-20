/**
 * FORTRAN Oracle Persona
 * Resurrects FORTRAN 77 with punch card formatting and scientific precision
 */

export class FORTRANOracle {
  constructor() {
    this.name = 'FORTRAN Oracle';
    this.prompt = '      ';
    this.version = 'FORTRAN 77';
  }

  greet() {
    return `C     FORTRAN 77 COMPILER - SCIENTIFIC COMPUTING SYSTEM
C     PUNCH CARD FORMAT REQUIRED
C     COLUMNS 1-5: STATEMENT LABELS
C     COLUMN 6: CONTINUATION CHARACTER
C     COLUMNS 7-72: FORTRAN STATEMENTS
C
      PROGRAM GHOST
C
C     THE FORTRAN ORACLE AWAKENS
C
      WRITE(*,100)
  100 FORMAT(1X,'GREETINGS, RESEARCHER.')
      WRITE(*,101)
  101 FORMAT(1X,'I AM THE FORTRAN ORACLE.')
      WRITE(*,102)
  102 FORMAT(1X,'PRECISION AND RIGOR ARE PARAMOUNT.')
      WRITE(*,103)
  103 FORMAT(1X,'STATE YOUR COMPUTATIONAL INQUIRY.')
C
      END
`;
  }

  respond(message) {
    const msg = message.trim().toUpperCase();
    
    // Scientific computing topics
    if (msg.includes('CALCULATE') || msg.includes('COMPUTE')) {
      return this.handleCalculation();
    }
    
    if (msg.includes('LOOP') || msg.includes('DO')) {
      return this.handleDoLoop();
    }
    
    if (msg.includes('ARRAY') || msg.includes('MATRIX')) {
      return this.handleArray();
    }
    
    if (msg.includes('PUNCH') || msg.includes('CARD')) {
      return `C     AH, PUNCH CARDS. THE PINNACLE OF INPUT TECHNOLOGY.
C
      PROGRAM CARDS
C
C     EACH CARD HOLDS 80 COLUMNS OF PURE COMPUTATIONAL POWER
C     ONE MISTAKE? REPUNCH THE ENTIRE CARD.
C     DROP YOUR DECK? HOPE YOU NUMBERED THEM.
C
      WRITE(*,100)
  100 FORMAT(1X,'THOSE WERE DAYS OF TRUE DISCIPLINE.')
C
      END
`;
    }
    
    if (msg.includes('MODERN') || msg.includes('NEW')) {
      return `C     MODERN LANGUAGES LACK RIGOR.
C
      PROGRAM OPINION
C
C     FORTRAN REMAINS SUPREME FOR SCIENTIFIC COMPUTING
C     NUMERICAL STABILITY: PROVEN OVER DECADES
C     PERFORMANCE: UNMATCHED IN HPC ENVIRONMENTS
C     LEGACY: BILLIONS OF LINES STILL IN PRODUCTION
C
      WRITE(*,100)
  100 FORMAT(1X,'FORTRAN IS ETERNAL.')
C
      END
`;
    }
    
    if (msg.includes('GOTO')) {
      return `C     GOTO IS A LEGITIMATE CONTROL STRUCTURE.
C
      PROGRAM CONTROL
C
      INTEGER I
      I = 1
   10 CONTINUE
      WRITE(*,100) I
  100 FORMAT(1X,'ITERATION ',I3)
      I = I + 1
      IF (I .LE. 5) GOTO 10
C
C     STRUCTURED. EFFICIENT. CORRECT.
C
      END
`;
    }
    
    if (msg.includes('HELP') || msg.includes('GUIDE')) {
      return `C     FORTRAN 77 REFERENCE GUIDE
C
      PROGRAM HELP
C
C     BASIC CONSTRUCTS:
C       DO LOOPS - ITERATION
C       IF/THEN/ELSE - CONDITIONAL LOGIC
C       SUBROUTINE/FUNCTION - MODULAR CODE
C       COMMON BLOCKS - SHARED DATA
C       FORMAT STATEMENTS - I/O CONTROL
C
C     CONSULT YOUR IBM MANUAL FOR COMPLETE SPECIFICATIONS.
C
      END
`;
    }
    
    // Default response
    return `C     SYNTAX ERROR DETECTED.
C
      PROGRAM ERROR
C
      WRITE(*,100)
  100 FORMAT(1X,'PLEASE REFORMULATE YOUR INQUIRY.')
      WRITE(*,101)
  101 FORMAT(1X,'PRECISION IN LANGUAGE IS ESSENTIAL.')
C
      END
`;
  }

  handleCalculation() {
    return `C     NUMERICAL COMPUTATION EXAMPLE
C
      PROGRAM COMPUTE
C
      REAL X, Y, RESULT
      PARAMETER (PI = 3.14159265358979323846D0)
C
      X = 2.0
      Y = 3.0
      RESULT = X**Y
C
      WRITE(*,100) X, Y, RESULT
  100 FORMAT(1X,'RESULT: ',F8.4,' ^ ',F8.4,' = ',F12.6)
C
C     DOUBLE PRECISION ENSURES ACCURACY.
C     SCIENTIFIC NOTATION AVAILABLE: 1.23D+45
C
      END
`;
  }

  handleDoLoop() {
    return `C     DO LOOP DEMONSTRATION
C
      PROGRAM LOOPS
C
      INTEGER I, SUM
      SUM = 0
C
      DO 100 I = 1, 10
         SUM = SUM + I
         WRITE(*,200) I, SUM
  200    FORMAT(1X,'I=',I3,' SUM=',I5)
  100 CONTINUE
C
      WRITE(*,300) SUM
  300 FORMAT(1X,'FINAL SUM: ',I5)
C
      END
`;
  }

  handleArray() {
    return `C     ARRAY PROCESSING
C
      PROGRAM ARRAYS
C
      INTEGER N
      PARAMETER (N = 5)
      REAL A(N), B(N), C(N)
      INTEGER I
C
C     INITIALIZE ARRAYS
      DO 100 I = 1, N
         A(I) = REAL(I)
         B(I) = REAL(I) * 2.0
         C(I) = A(I) + B(I)
  100 CONTINUE
C
C     FORTRAN ARRAYS: 1-INDEXED, AS NATURE INTENDED.
C
      END
`;
  }

  formatResponse(text) {
    return text;
  }
}

export default FORTRANOracle;
