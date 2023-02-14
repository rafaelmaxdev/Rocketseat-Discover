/* ### Sistema de gastos familiar


Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
    * receitas: []
    * despesas: []

Agora, crie uma função que irá calcular o total de receitas
e despesas e irá mostrar uma mensagem se a família está com
saldo positivo ou negativo, seguido do valor do saldo.

*/

let family = {
  incomes: [2500, 3200, 250.43, 360.45],
  expenses: [320.34, 128.45, 176.87, 145.0],
};

function sum(array) {
  let total = 0;

  for (let value of array) {
    total += value;
  }

  return total;
}

function calculateBalance() {
  let calculateIncomes = sum(family.incomes);
  let calculateExpenses = sum(family.expenses);

  let checkPositiveBalance = calculateIncomes > calculateExpenses;
  let checkNegativeBalance = calculateIncomes < calculateExpenses;

  let calculateBalance = calculateIncomes - calculateExpenses;

  let balance;

  if (checkPositiveBalance) {
    balance = "positivo";
  } else if (checkNegativeBalance) {
    balance = "negativo";
  }

  console.log(`Seu saldo é ${balance}: ${calculateBalance.toFixed(2)}`); // 5540.22
}

calculateBalance();
