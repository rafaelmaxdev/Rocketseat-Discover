// Separar palavras para cada palavra virar um elemento de uma array, depois os espaços virarão _

let phrase = "Eu quero viver neste mundo";
let myArray = phrase.split(" ");
let phraseWithUnderscore = myArray.join("_");
console.log(phraseWithUnderscore); // Eu_quero_viver_neste_mundo
