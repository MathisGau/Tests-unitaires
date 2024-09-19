// Objectif : Écrire une fonction qui valide si un mot de passe respecte certains critères
// Les critères : Minimum 8 caractères, un chiffre , une majuscule minimum, une minuscule minimum

function isValidPassword(password) {
  if (
    password.length < 8 ||
    !password.match(/[0-9]/) ||
    !password.match(/[A-Z]/) ||
    !password.match(/[a-z]/)
  ) {
    return false;
  } else {
    return true;
  }
}

module.exports = { isValidPassword };
