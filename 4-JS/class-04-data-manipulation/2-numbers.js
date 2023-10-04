let num1 = 2;
let num2 = 3;

console.log(num1);
console.log(parseInt(num1));
console.log(parseInt(num2));
console.log(parseFloat(num2)); 

console.log(String(num2).lenght);
console.log(String(num1.toFixed(2).replace(".", ",")));
console.log(`R$ ${2.435769853467.toFixed(2).replace(".", ",")}`);

console.log(num1.toLocaleString("pt-BR", {
    style: "currency",
    currency: "usd" //brl
}));

console.log(Math.abs(num1));

const numbers = [2, 3, 6, 2, 4, 7, 98, 3, 2, 54, 76, 3]


// Atualizar
console.log(Math.max(2, 3));
console.log(Math.max(...numbers));
console.log(Math.max(2, 3, 6, 2, 4, 7, 98, 3, 2, 54, 76, 3));

console.log(Math.min(2, 3));
console.log(Math.PI);
console.log(Math.E);


console.log(Math.round(2.5));
console.log(Math.round(2.4));
console.log(Math.round(0.99) * 10);
console.log(Math.floor(Math.random() * 10));
console.log(Math.floor(Math.random() * 10) + 1);

console.log(Number(Math.ramdo().toFixed(1))); 


// while ( Math.ceil() !== 0.01) {
    // console.log(...rodando);
// }
