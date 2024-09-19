const { fizzBuzz } = require("./index.js");

//Ecrire le test pour les multiples de 3
test('retourne "Fizz" pour les multiples de 3', () => {
  expect(fizzBuzz(3)).toBe("Fizz");
});

//Ecrire le test pour les multiples de 5
test('retourne "Buzz" pour les multiples de 5', () => {
  expect(fizzBuzz(5)).toBe("Buzz");
});

//Ecrire le test pour les multiples de 3 & 5
test('retourne "FizzBuzz" pour les multiples de 3 et 5', () => {
  expect(fizzBuzz(15)).toBe("FizzBuzz");
});
