// Objectif : Écrire des tests unitaires pour une fonction qui résout le problème classique du FizzBuzz.

/*
 * Instructions :
 * La fonction doit retourner "Fizz" pour les multiples de 3, "Buzz" pour les multiples de 5,
 * et "FizzBuzz" pour les multiples de 3 et 5.
 */
function fizzBuzz(number) {
  if (number % 3 === 0 && number % 5 === 0) {
    return "FizzBuzz";
  } else if (number % 3 === 0) {
    return "Fizz";
  } else if (number % 5 === 0) {
    return "Buzz";
  }
  return number;
}

module.exports = { fizzBuzz };
