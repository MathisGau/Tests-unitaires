const { isValidPassword } = require("./index.js");

/*
 * Instructions :
 * Créer des tests pour des mots de passe valides et invalides.
 * Introduire des tests paramétrés pour valider plusieurs mots de passe dans une seule fonction.
 */

test.each([
  [true, "Password1"],
  [false, "password1"],
  [false, "Password"],
  [false, "Pass1"],
  [false, "0123456789"],
])("retourne %o pour le mdp %s", (expected, password) => {
  expect(isValidPassword(password)).toBe(expected);
});
