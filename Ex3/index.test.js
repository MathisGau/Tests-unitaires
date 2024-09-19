const {
  calculate,
  addition,
  soustraction,
  multiplication,
  division,
} = require("./index.js");

/*
 * Instructions :
 * Créer des tests pour addition, soustraction, multiplication, division et calculate.
 */

test.each([
  [3, "+", 5, 8],
  [3, "-", 5, -2],
  [3, "*", 5, 15],
  [3, "/", 5, 0.6],
])(
  "%f %s %f est égal à %f",
  (firstNumber, operation, secondNumber, expected) => {
    expect(calculate(firstNumber, operation, secondNumber)).toBe(expected);
  }
);
