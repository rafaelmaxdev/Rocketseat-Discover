// function expression
// function anonymous
// parâmetros (parameters)

let total = 0;

const sum = function (number1, number2) {
  let total = number1 + number2;
  return total;
};

let number1 = 34;
let number2 = 25;

// arguments - argumentos / 1 e 2 são argumentos para executar a função
// console.log(sum(1, 2));

// console.log(`o número 1 é ${number1}`);
// console.log(`o número 2 é ${number2}`);
console.log(`a soma é ${sum(number1, number2)}`); // a soma é 59
console.log(total); // 0
