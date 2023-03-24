
// Exercício 4 - É maiuscula? 

function checkIfTheFirstLetterIsUppercase(word: string): boolean {
  if(word === null || word === undefined) return false;
  const primeiraLetra = word.charAt(0);
  return primeiraLetra ? primeiraLetra === primeiraLetra.toUpperCase() : false;
}

module.exports = checkIfTheFirstLetterIsUppercase;


