let techs = ["html", "css", "js"];

// adicionar um item no fim
techs.push("nodejs"); // ["html", "css", "javascript", "nodejs"]
// adicionar no começo
techs.unshift("sql"); // ["sql","html", "css", "javascript"]
// remover no fim
// techs.pop(); // ["html", "css"]
// remover no começo
// techs.shift(); // ["css", "javascript"]
// pegar somente alguns elementos do array
// console.log(techs.slice(1, 3)) // [ 'css', 'js' ]
// remover 1 ou mais itens em qualquer posição do array
// techs.splice(1, 2); // [ 'html' ]
// encontrar a posição de um elemento no array
let index = techs.indexOf("html");
//techs.splice(index, 1);
console.log(techs);
