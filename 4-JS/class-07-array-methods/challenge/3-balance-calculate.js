const incomes = ["salary", "R$ 2000,00", "commission", "R$ 825,45", "bônus", "R$ 320,00"];

const expenses = [
  "rent",
  "R$ 500,00",
  "energy",
  "R$ 325,55",
  "water",
  "R$ 120,34",
  "food",
  "R$ 1300,62",
];

const incomesValues = incomes.filter((value) => value.includes("R$ "));

const incomesValuesNumber = incomesValues.map((value) => Number(value.replace("R$ ", "").replace(",", ".")));

const sumIncomes = incomesValuesNumber.reduce((a, b) => a + b);

// console.log(incomeValues);
// console.log(incomeValuesNumber);
console.log(sumIncomes.toLocaleString("pt-BR", {
    style: "currency",
    currency: "brl"
}));



const expenseValues = expenses.filter((value) => value.includes("R$ "));

const expenseValuesNumber = expenseValues.map((value) => Number(value.replace("R$ ", "").replace(",", ".")));

const sumExpenses = expenseValuesNumber.reduce((a, b) => a + b);

console.log(expenseValues);

console.log(sumExpenses.toLocaleString("pt-BR", {
    style: "currency",
    currency: "brl"
}));

let situation;

if (sumIncomes > sumExpenses) {
    situation = "Saldo positívo!"
} else if (sumIncomes < sumExpenses) {
    situation = "Saldo negativo"
} else if (sumIncomes === sumExpenses) {
    situation = "Sem saldo e sem dívidas!"
}

console.log(situation);


