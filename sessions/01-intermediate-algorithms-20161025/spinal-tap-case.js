// Spinal Tap Case
//
// source: https://www.freecodecamp.com/challenges/spinal-tap-case

const spacesBeforeCapitals = str => str.replace(/(.)([A-Z])/g, "$1 $2")
const hyphensInsteadOfSpacesOrUnderscores = str => str.replace(/[ _]+/g, '-')

function spinalCase(str) {
  str = spacesBeforeCapitals(str)
  str = str.toLowerCase()
  str = hyphensInsteadOfSpacesOrUnderscores(str)
  
  return str;
}


console.log(spinalCase("thisIsSpinalTap"));
console.log(spinalCase("Teletubbies say Eh-oh"));
console.log(spinalCase("AllThe-small Things"));

// TESTS

const assert = require('assert')

assert.equal(
  spinalCase("This Is Spinal Tap"),
  "this-is-spinal-tap",
  'spinalCase("This Is Spinal Tap") should return "this-is-spinal-tap"'
)

assert.equal(
  spinalCase("thisIsSpinalTap"),
  "this-is-spinal-tap",
  'spinalCase("thisIsSpinalTap") should return "this-is-spinal-tap"'
)

assert.equal(
  spinalCase("The_Andy_Griffith_Show"),
  "the-andy-griffith-show",
  'spinalCase("The_Andy_Griffith_Show") should return "the-andy-griffith-show"'
)

assert.equal(
  spinalCase("Teletubbies say Eh-oh"),
  "teletubbies-say-eh-oh",
  'spinalCase("Teletubbies say Eh-oh") should return "teletubbies-say-eh-oh"'
)

assert.equal(
  spinalCase("AllThe-small Things"),
  "all-the-small-things",
  'spinalCase("AllThe-small Things") should return "all-the-small-things"'
)
