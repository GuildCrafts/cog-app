// DNA Pairing
//
// source: https://www.freecodecamp.com/challenges/dna-pairing

const DNA_PAIRS = {
  'A': 'T',
  'C': 'G',
  'T': 'A',
  'G': 'C'
}

const makePair = base => {
  const pair = DNA_PAIRS[base]
  return [base, pair]
}

console.log(makePair('A'));

function pairElement(dnaString) {
  const bases = dnaString.split('')
  const strand = bases.map(base => makePair(base))

  return strand
}

// TESTS

const assert = require('assert')
assert.deepEqual(makePair('A'), ['A', 'T'])

assert.deepEqual(
  pairElement("ATCGA"),
  [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]],
  'pairElement("ATCGA") should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]'
)

assert.deepEqual(
  pairElement("TTGAG"),
  [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]],
  'pairElement("TTGAG") should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]]'
)

assert.deepEqual(
  pairElement("CTCTA"),
  [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]],
  'pairElement("CTCTA") should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]]'
)
