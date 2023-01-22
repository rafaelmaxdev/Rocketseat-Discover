/*
    Function() constructor

    * expressão new
    * criar um novo objeto
    * this keyword
*/

/*
let date = new Date();

console.log(date)
*/

function Person(name) {
  this.name = name;
  this.walk = function () {
    return this.name + " está andando";
  };
}
const Rafael = new Person("Rafael");
const Renan = new Person("Renan");
console.log(Rafael.walk()); // Rafael está andando
console.log(Renan.walk()); // Renan está andando
