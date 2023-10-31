// Questão 1 (Data Types):


// Declare as seguntes variáveis e atribua os valores por tipo: Sting, Number, Boolean, Function, Array, Object

const myNumber = 30;
const string = "Daniel"
const boolean = true;
const sum = (a, b) => a + b;
const myArray = [1, 2, 3];
const myObject = {name: "Daniel"}

console.log(myObject.name);


console.log(myNumber);
console.log(myName);

// Questão 2 (Operators):
// Imprima as operações de soma, subtração, multiplicação, divisão, resto da divisão e potenciação de 12 e 3 e raiz quadrada de 144;

const number1 = 10;
const number2 = 20;

console.log(number1 + number2);
console.log(number1 - number2);
console.log(number1 * number2);
console.log(number1 / number2);
console.log(number1 % number2);
console.log(number1 ** number2);
console.log(144 ** (1/2));
console.log(Math.sqrt(144)); // square root


// Questão 3 (Functions):
// Crie e execute uma função de nome 'test" que retorne "JavaScript" concatenado com um valor passado como argumento e imprima seu retorno.

function average(g1, g2) {
  return (g1 + g2) / 2
}

const a = average(9, 7)
console.log(a);

function test(value) {
  return "JavaScript" + value
}

console.log(test("Test"));

// Questão 4 (Data Manipulation):
// Usando os métodos FIFO e LIFO, crie um array com 3 valos e posteriormente insira mais um valor no final e substitua o do início por outro.

const array = [1, 2, 3];

array.push("pikachu")
array.push("mewtwo")

array.shift()
array.unshift("mew")


console.log(array);
  




// Questão 5 (for):
// Liste todos os valores do array criado na questão anterior ultilizando o for.

const array1 = ["mew", "bulbasour", "venomsour"];

for (let i = 0; i < array1.length; i++) {
    const element = array1[i];
    console.log(array1);
}



// Questão 6 (while):
// Escreva os números de 0 a 500 sem os que pertencem à familía do 200 e do 300:

let i = 0;

while (i <= 500) {
    if (i >= 200 || i < 400) {
      i++;
      continue;
    }
  console.log(i);
  i++
}


// Questão 7 (if):
// Crie uma lógica para verificar se o motorista foi multado
// A infração pode ser por velocidade alta (quando ultrapassar a máxima)
// E por velocidade baixa ( quando estiver inferior à metade da máxima )
// A velocidade da pista é de 60km/h

function checkFine(actualSpeed, maximumSpeed) {

  if (actualSpeed > maximumSpeed) {
    return true;
  }

  if (actualSpeed < maximumSpeed / 2) {
    return true;
  }

  return false;
}

const actualSpeed = 80;

const maximumSpeed = 60;

const fined = checkFine(actualSpeed, maximumSpeed);

if (fined) {
  console.log("O motorista foi multado!");
} else {
  console.log("O motorista não foi multado!");
}



// Questão 8 (array methods):
// Uma empresa vai dar 10% de aumento para seus funcionários
// Abaixo tem a lista com todos os salários atuais de cada um deles
// Apresente os novos salários e o novo total em folha dessa empresa

const salaries = [1000, 2000, 3000];

const increase = 10 / 100;

const newSalaries = salaries.map(salary => salary * increase);

const newTotalPayroll = newSalaries.reduce((accumulator, value) => accumulator + value, 0);

console.log(newSalaries); 

console.log(newTotalPayroll); 

