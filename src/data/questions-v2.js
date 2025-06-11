const quizData = {
  lecture1: {
    title: "Chapter 1: Logic Gates",
    questions: [
      {
        id: "l1q1",
        question: "What is the output of an AND gate if both inputs are 1?",
        options: [
          "0",
          "1",
          "Undefined",
          "Depends on the gate type"
        ],
        correctAnswer: 1
      },
      {
        id: "l1q2",
        question: "Which gate is known as a universal gate?",
        options: [
          "AND",
          "OR",
          "NAND",
          "NOT"
        ],
        correctAnswer: 2
      },
      {
        id: "l1q3",
        question: "What is the output of a NOT gate if the input is 0?",
        options: [
          "0",
          "1",
          "Undefined",
          "Depends on the gate type"
        ],
        correctAnswer: 1
      },
      {
        id: "l1q4",
        question: "How many possible input combinations are there for a 3-input XOR gate?",
        options: [
          "4",
          "8",
          "16",
          "32"
        ],
        correctAnswer: 1
      },
      {
        id: "l1q5",
        question: "What is the Boolean expression for an OR gate with inputs A and B?",
        options: [
          "A · B",
          "A + B",
          "A ⊕ B",
          "A' + B'"
        ],
        correctAnswer: 1
      },
      {
        id: "l1q6",
        question: "Which gate produces a HIGH output only when all inputs are HIGH?",
        options: [
          "OR",
          "AND",
          "NAND",
          "NOR"
        ],
        correctAnswer: 1
      },
      {
        id: "l1q7",
        question: "What is the output of a NAND gate if both inputs are 1?",
        options: [
          "0",
          "1",
          "Undefined",
          "Depends on the gate type"
        ],
        correctAnswer: 0
      },
      {
        id: "l1q8",
        question: "What is the Boolean expression for an XNOR gate?",
        options: [
          "A ⊕ B",
          "(A ⊕ B)'",
          "A + B",
          "A · B"
        ],
        correctAnswer: 1
      },
      {
        id: "l1q9",
        question: "How many rows are in the truth table of a 4-input logic gate?",
        options: [
          "8",
          "16",
          "32",
          "64"
        ],
        correctAnswer: 1
      },
      {
        id: "l1q10",
        question: "Which gate is equivalent to an inverted-input OR gate?",
        options: [
          "NAND",
          "NOR",
          "AND",
          "XOR"
        ],
        correctAnswer: 0
      },
      {
        id: "l1q11",
        question: "What is the output of a NOR gate if one input is 1 and the other is 0?",
        options: [
          "0",
          "1",
          "Undefined",
          "Depends on the gate type"
        ],
        correctAnswer: 0
      },
      {
        id: "l1q12",
        question: "What is the Boolean expression for a 3-input AND gate?",
        options: [
          "A + B + C",
          "A · B · C",
          "A ⊕ B ⊕ C",
          "(A + B + C)'"
        ],
        correctAnswer: 1
      },
      {
        id: "l1q13",
        question: "Which gate produces a HIGH output when an odd number of inputs are HIGH?",
        options: [
          "AND",
          "OR",
          "XOR",
          "XNOR"
        ],
        correctAnswer: 2
      },
      {
        id: "l1q14",
        question: "What is the output of an OR gate if both inputs are 0?",
        options: [
          "0",
          "1",
          "Undefined",
          "Depends on the gate type"
        ],
        correctAnswer: 0
      },
      {
        id: "l1q15",
        question: "What is the Boolean expression for a NOT gate?",
        options: [
          "A'",
          "A + B",
          "A · B",
          "A ⊕ B"
        ],
        correctAnswer: 0
      }
    ]
  },
  lecture2: {
    title: "Chapter 2: Boolean Algebra",
    questions: [
      {
        id: "l2q1",
        question: "Which law states that X+X′=1?",
        options: [
          "Commutative Law",
          "Associative Law",
          "Identity Law",
          "Complement Law"
        ],
        correctAnswer: 3
      },
      {
        id: "l2q2",
        question: "What is the dual of the expression X+Y?",
        options: [
          "X · Y",
          "X' + Y'",
          "X ⊕ Y",
          "X' · Y'"
        ],
        correctAnswer: 0
      },
      {
        id: "l2q3",
        question: "Simplify the expression A+AB.",
        options: [
          "A",
          "B",
          "AB",
          "A + B"
        ],
        correctAnswer: 0
      },
      {
        id: "l2q4",
        question: "Which theorem is used to simplify (X+Y)′?",
        options: [
          "Distributive Theorem",
          "DeMorgan’s Theorem",
          "Consensus Theorem",
          "Absorption Theorem"
        ],
        correctAnswer: 1
      },
      {
        id: "l2q5",
        question: "What is the result of X⋅X′?",
        options: [
          "X",
          "X'",
          "0",
          "1"
        ],
        correctAnswer: 2
      },
      {
        id: "l2q6",
        question: "Simplify the expression XY+XY′.",
        options: [
          "X",
          "Y",
          "XY",
          "X + Y"
        ],
        correctAnswer: 0
      },
      {
        id: "l2q7",
        question: "What is the dual of the expression X⋅(Y+Z)?",
        options: [
          "X + (Y · Z)",
          "X' + Y' + Z'",
          "X + Y + Z",
          "X' · Y' · Z'"
        ],
        correctAnswer: 0 
      },
      {
        id: "l2q8",
        question: "Which law states that X+XY=X?",
        options: [
          "Commutative Law",
          "Absorption Law",
          "Distributive Law",
          "Identity Law"
        ],
        correctAnswer: 1
      },
      {
        id: "l2q9",
        question: "What is the simplified form of A′BC+AC?",
        options: [
          "A'B + C",
          "AC",
          "BC",
          "C(A + B)"
        ],
        correctAnswer: 3 
      },
      {
        id: "l2q10",
        question: "What is the result of (X+Y)(X+Y′)?",
        options: [
          "X",
          "Y",
          "XY",
          "X + Y"
        ],
        correctAnswer: 0
      },
      {
        id: "l2q11",
        question: "Simplify the expression A′B+ABC′+ABC.",
        options: [
          "A'B + AC",
          "AB + BC",
          "A'B + C",
          "B"
        ],
        correctAnswer: 3
      },
      {
        id: "l2q12",
        question: "What is the consensus term in XY+X′Z+YZ?",
        options: [
          "XY",
          "X'Z",
          "YZ",
          "XZ"
        ],
        correctAnswer: 2
      },
      {
        id: "l2q13",
        question: "What is the complement of F=A+B?",
        options: [
          "A' + B'",
          "A' · B'",
          "A ⊕ B",
          "A · B"
        ],
        correctAnswer: 1
      },
      {
        id: "l2q14",
        question: "Simplify the expression (A+B)(A+C).",
        options: [
          "A + BC",
          "AB + AC",
          "A + B + C",
          "ABC"
        ],
        correctAnswer: 0
      },
      {
        id: "l2q15",
        question: "What is the result of X+X′Y?",
        options: [
          "X + Y",
          "XY",
          "X'Y",
          "X' + Y"
        ],
        correctAnswer: 0
      }
    ]
  },
  lecture3: {
    title: "Chapter 3: Combinatorial Circuits",
    questions: [
      {
        id: "l3q1",
        question: "What is the output of a half adder if both inputs are 1?",
        options: [
          "Sum = 0, Carry = 1",
          "Sum = 1, Carry = 0",
          "Sum = 1, Carry = 1",
          "Sum = 0, Carry = 0"
        ],
        correctAnswer: 0
      },
      {
        id: "l3q2",
        question: "How many inputs does a full adder have?",
        options: [
          "2",
          "3",
          "4",
          "5"
        ],
        correctAnswer: 1
      },
      {
        id: "l3q3",
        question: "What is the output of a 4-to-1 multiplexer if the select lines are S1=1, S0=0?",
        options: [
          "I0",
          "I1",
          "I2",
          "I3"
        ],
        correctAnswer: 2
      },
      {
        id: "l3q4",
        question: "Which circuit converts binary information from n input lines to 2^n output lines?",
        options: [
          "Encoder",
          "Decoder",
          "Multiplexer",
          "Demultiplexer"
        ],
        correctAnswer: 1
      },
      {
        id: "l3q5",
        question: "What is the output of a 2x4 decoder if the input is 10?",
        options: [
          "F0 = 1, others = 0",
          "F1 = 1, others = 0",
          "F2 = 1, others = 0",
          "F3 = 1, others = 0"
        ],
        correctAnswer: 2
      },
      {
        id: "l3q6",
        question: "How many select lines are needed for an 8-to-1 multiplexer?",
        options: [
          "2",
          "3",
          "4",
          "5"
        ],
        correctAnswer: 1
      },
      {
        id: "l3q7",
        question: "What is the Boolean expression for the sum output of a full adder?",
        options: [
          "A ⊕ B ⊕ Cin",
          "A · B · Cin",
          "A + B + Cin",
          "(A ⊕ B) · Cin"
        ],
        correctAnswer: 0
      },
      {
        id: "l3q8",
        question: "Which device is used to route a single input to one of many outputs?",
        options: [
          "Decoder",
          "Encoder",
          "Multiplexer",
          "Demultiplexer"
        ],
        correctAnswer: 3
      },
      {
        id: "l3q9",
        question: "What is the output of a half subtractor if A=1, B=1?",
        options: [
          "Difference = 0, Borrow = 0",
          "Difference = 1, Borrow = 0",
          "Difference = 0, Borrow = 1",
          "Difference = 1, Borrow = 1"
        ],
        correctAnswer: 0
      },
      {
        id: "l3q10",
        question: "How many outputs does a 3-to-8 decoder have?",
        options: [
          "3",
          "6",
          "8",
          "16"
        ],
        correctAnswer: 2
      },
      {
        id: "l3q11",
        question: "What is the purpose of a seven-segment decoder?",
        options: [
          "To convert binary to decimal",
          "To display numbers on a seven-segment display",
          "To encode binary data",
          "To multiplex signals"
        ],
        correctAnswer: 1
      },
      {
        id: "l3q12",
        question: "What is the output of a 1-to-4 demultiplexer if the select lines are S1=0, S0=1?",
        options: [
          "Y0",
          "Y1",
          "Y2",
          "Y3"
        ],
        correctAnswer: 1
      },
      {
        id: "l3q13",
        question: "Which circuit is used to add two 4-bit binary numbers?",
        options: [
          "4-bit parallel adder",
          "4-to-1 multiplexer",
          "2x4 decoder",
          "Full adder"
        ],
        correctAnswer: 0
      },
      {
        id: "l3q14",
        question: "What is the Boolean expression for the carry output of a full adder?",
        options: [
          "A ⊕ B ⊕ Cin",
          "A · B + (A ⊕ B) · Cin",
          "A + B + Cin",
          "(A ⊕ B) · Cin"
        ],
        correctAnswer: 1
      },
      {
        id: "l3q15",
        question: "Which device is used to convert 2^n input lines to n output lines?",
        options: [
          "Decoder",
          "Encoder",
          "Multiplexer",
          "Demultiplexer"
        ],
        correctAnswer: 1
      }
    ]
  },
  lecture4: {
    title: "Chapter 4: Synchronous Sequential Logic",
    questions: [
      {
        id: "l4q1",
        question: "What is the output of a D flip-flop if D=1 and there is a clock pulse?",
        options: [
          "0",
          "1",
          "Undefined",
          "Toggles"
        ],
        correctAnswer: 1
      },
      {
        id: "l4q2",
        question: "Which flip-flop has a toggle state?",
        options: [
          "D flip-flop",
          "JK flip-flop",
          "SR flip-flop",
          "T flip-flop"
        ],
        correctAnswer: 1
      },
      {
        id: "l4q3",
        question: "What is the next state of a T flip-flop if T=1 and the current state is Q=0?",
        options: [
          "0",
          "1",
          "Undefined",
          "Toggles"
        ],
        correctAnswer: 1
      },
      {
        id: "l4q4",
        question: "What is the output of a JK flip-flop if J=1, K=1, and the current state is Q=1?",
        options: [
          "0",
          "1",
          "Undefined",
          "Toggles"
        ],
        correctAnswer: 0
      },
      {
        id: "l4q5",
        question: "Which flip-flop has an invalid state?",
        options: [
          "D flip-flop",
          "JK flip-flop",
          "SR flip-flop",
          "T flip-flop"
        ],
        correctAnswer: 2
      },
      {
        id: "l4q6",
        question: "What is the output of a master-slave flip-flop on the negative edge of the clock?",
        options: [
          "Follows the master",
          "Follows the slave",
          "Undefined",
          "Toggles"
        ],
        correctAnswer: 0
      },
      {
        id: "l4q7",
        question: "How many stable states does a bistable multivibrator have?",
        options: [
          "0",
          "1",
          "2",
          "3"
        ],
        correctAnswer: 2
      },
      {
        id: "l4q8",
        question: "What is the output of an SR flip-flop if S=1, R=1?",
        options: [
          "0",
          "1",
          "Invalid",
          "Toggles"
        ],
        correctAnswer: 2
      },
      {
        id: "l4q9",
        question: "Which flip-flop is edge-triggered?",
        options: [
          "D flip-flop",
          "JK flip-flop",
          "SR flip-flop",
          "All of the above"
        ],
        correctAnswer: 3
      },
      {
        id: "l4q10",
        question: "What is the next state of a D flip-flop if D=0 and there is a clock pulse?",
        options: [
          "0",
          "1",
          "Undefined",
          "Toggles"
        ],
        correctAnswer: 0
      },
      {
        id: "l4q11",
        question: "What is the output of a T flip-flop if T=0 and the current state is Q=1?",
        options: [
          "0",
          "1",
          "Undefined",
          "Toggles"
        ],
        correctAnswer: 1
      },
      {
        id: "l4q12",
        question: "Which flip-flop is used to eliminate the invalid state?",
        options: [
          "D flip-flop",
          "JK flip-flop",
          "SR flip-flop",
          "T flip-flop"
        ],
        correctAnswer: 1
      },
      {
        id: "l4q13",
        question: "What is the output of a JK flip-flop if J=0, K=0, and the current state is Q=1?",
        options: [
          "0",
          "1",
          "Undefined",
          "Toggles"
        ],
        correctAnswer: 1
      },
      {
        id: "l4q14",
        question: "What is the purpose of a clock signal in synchronous sequential circuits?",
        options: [
          "To provide power",
          "To synchronize state changes",
          "To generate inputs",
          "To reset the circuit"
        ],
        correctAnswer: 1
      },
      {
        id: "l4q15",
        question: "What is the output of a D flip-flop if D=1 and there is no clock pulse?",
        options: [
          "0",
          "1",
          "Undefined",
          "Retains previous state"
        ],
        correctAnswer: 3
      }
    ]
  },
  lecture5: {
    title: "Chapter 5: Counters and Registers",
    questions: [
      {
        id: "l5q1",
        question: "What is the modulus of a 3-bit ripple counter?",
        options: [
          "3",
          "6",
          "8",
          "16"
        ],
        correctAnswer: 2
      },
      {
        id: "l5q2",
        question: "How many flip-flops are needed for a mod-16 counter?",
        options: [
          "2",
          "4",
          "8",
          "16"
        ],
        correctAnswer: 1
      },
      {
        id: "l5q3",
        question: "What is the output of a 4-bit ring counter after 4 clock pulses?",
        options: [
          "0001",
          "1000",
          "1111",
          "Same as initial state"
        ],
        correctAnswer: 3
      },
      {
        id: "l5q4",
        question: "Which counter is self-decoding?",
        options: [
          "Binary counter",
          "Ring counter",
          "Ripple counter",
          "Synchronous counter"
        ],
        correctAnswer: 1
      },
      {
        id: "l5q5",
        question: "What is the next state of a 3-bit binary counter if the current state is 111?",
        options: [
          "000",
          "001",
          "110",
          "101"
        ],
        correctAnswer: 0
      },
      {
        id: "l5q6",
        question: "How many states does a 4-bit Johnson counter have?",
        options: [
          "4",
          "8",
          "16",
          "32"
        ],
        correctAnswer: 1
      },
      {
        id: "l5q7",
        question: "What is the output of a serial-in, parallel-out shift register after 4 clock pulses?",
        options: [
          "Serial data",
          "Parallel data",
          "Undefined",
          "Depends on input"
        ],
        correctAnswer: 1
      },
      {
        id: "l5q8",
        question: "Which register allows data to be shifted left or right?",
        options: [
          "Serial-in, serial-out",
          "Parallel-in, parallel-out",
          "Bidirectional shift register",
          "Ring counter"
        ],
        correctAnswer: 2
      },
      {
        id: "l5q9",
        question: "What is the output of a 4-bit shift register after 4 clock pulses if the input is 1011?",
        options: [
          "1011",
          "1101",
          "1110",
          "0111"
        ],
        correctAnswer: 0
      },
      {
        id: "l5q10",
        question: "How many flip-flops are needed for a 10-state ring counter?",
        options: [
          "4",
          "10",
          "16",
          "32"
        ],
        correctAnswer: 1
      },
      {
        id: "l5q11",
        question: "What is the purpose of a clear input in a counter?",
        options: [
          "To start counting",
          "To reset the counter",
          "To stop counting",
          "To change the modulus"
        ],
        correctAnswer: 1
      },
      {
        id: "l5q12",
        question: "What is the output of a 3-bit ripple counter after 5 clock pulses if the initial state is 000?",
        options: [
          "101",
          "110",
          "111",
          "000"
        ],
        correctAnswer: 0
      },
      {
        id: "l5q13",
        question: "Which counter is asynchronous?",
        options: [
          "Ring counter",
          "Johnson counter",
          "Ripple counter",
          "Synchronous counter"
        ],
        correctAnswer: 2
      },
      {
        id: "l5q14",
        question: "What is the output of a parallel-in, serial-out shift register after 4 clock pulses?",
        options: [
          "Parallel data",
          "Serial data",
          "Undefined",
          "Depends on input"
        ],
        correctAnswer: 1
      },
      {
        id: "l5q15",
        question: "How many unique states does a 3-bit Johnson counter have?",
        options: [
          "3",
          "6",
          "8",
          "16"
        ],
        correctAnswer: 1
      }
    ]
  },
  lecture6: {
    title: "Chapter 6: Number Systems",
    questions: [
      {
        id: "l6q1",
        question: "What is the decimal equivalent of the binary number 1101?",
        options: [
          "10",
          "11",
          "12",
          "13"
        ],
        correctAnswer: 3
      },
      {
        id: "l6q2",
        question: "What is the binary equivalent of the decimal number 25?",
        options: [
          "11001",
          "10101",
          "10011",
          "11100"
        ],
        correctAnswer: 0
      },
      {
        id: "l6q3",
        question: "What is the hexadecimal equivalent of the binary number 10101111?",
        options: [
          "AF",
          "BF",
          "CF",
          "DF"
        ],
        correctAnswer: 0
      },
      {
        id: "l6q4",
        question: "What is the octal equivalent of the binary number 101101?",
        options: [
          "45",
          "55",
          "65",
          "75"
        ],
        correctAnswer: 1
      },
      {
        id: "l6q5",
        question: "What is the 2's complement of the binary number 1101?",
        options: [
          "0010",
          "0011",
          "1100",
          "1111"
        ],
        correctAnswer: 1
      },
      {
        id: "l6q6",
        question: "What is the result of the binary addition 1011 + 1101?",
        options: [
          "10100",
          "11000",
          "11100",
          "10000"
        ],
        correctAnswer: 1
      },
      {
        id: "l6q7",
        question: "What is the decimal equivalent of the hexadecimal number 2F?",
        options: [
          "45",
          "47",
          "49",
          "51"
        ],
        correctAnswer: 1
      },
      {
        id: "l6q8",
        question: "What is the binary equivalent of the octal number 73?",
        options: [
          "111011",
          "111101",
          "111111",
          "111000"
        ],
        correctAnswer: 0
      },
      {
        id: "l6q9",
        question: "What is the result of the binary subtraction 1010 - 0110?",
        options: [
          "0100",
          "1000",
          "1100",
          "0001"
        ],
        correctAnswer: 0
      },
      {
        id: "l6q10",
        question: "What is the hexadecimal equivalent of the decimal number 255?",
        options: [
          "FF",
          "FE",
          "FD",
          "FC"
        ],
        correctAnswer: 0
      },
      {
        id: "l6q11",
        question: "What is the 1's complement of the binary number 101010?",
        options: [
          "010101",
          "101010",
          "111111",
          "000000"
        ],
        correctAnswer: 0
      },
      {
        id: "l6q12",
        question: "What is the octal equivalent of the hexadecimal number A3?",
        options: [
          "243",
          "253",
          "263",
          "273"
        ],
        correctAnswer: 0
      },
      {
        id: "l6q13",
        question: "What is the result of the binary multiplication 101 × 11?",
        options: [
          "1111",
          "1011",
          "1001",
          "1101"
        ],
        correctAnswer: 0
      },
      {
        id: "l6q14",
        question: "What is the decimal equivalent of the binary number 110.101?",
        options: [
          "6.625",
          "6.5",
          "6.75",
          "6.875"
        ],
        correctAnswer: 0
      },
      {
        id: "l6q15",
        question: "What is the binary equivalent of the hexadecimal number 1C?",
        options: [
          "00011100",
          "00011000",
          "00010100",
          "00010000"
        ],
        correctAnswer: 0
      }
    ]
  }
};





export { quizData };
