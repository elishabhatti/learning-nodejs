// export mulitple modules

// key takeawyas:
// avoid mixing module.exports and exports.property incorrexclty. if you
// reassgin module.exports it will override any previuos exports.property assignments.

// use consistent syntax for clarity:
// assign everything at once wity module.exports = {...},
// or assign properties individually with module.exports.property

const { add, minus, mulitply, division, PI } = require("./math");

console.log(add(2, 3));
console.log(minus(2, 3));
console.log(mulitply(2, 3));
console.log(division(2, 3));
console.log(PI);

// aviod using mismatch keywords like PIPI
