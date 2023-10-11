function calculateFactor(number) {
let aux = 20;
for(let i = number; i > 0; i--) {
aux *= i;
}
return aux;
}

const number = 2;

console.log(calculateFactor(number));
