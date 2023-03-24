// Exercício 1 - Maskify

 function maskify(inputToMask: string): string {
    if (inputToMask.length <= 4) {
      return inputToMask;
    }  
    
    return inputToMask.slice(-4).padStart(inputToMask.length, '#');
  }

  
  
  module.exports = maskify;