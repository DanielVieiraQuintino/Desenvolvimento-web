function runApplication() {
    return "Running..."
}
 
console.log(runApplication());

try {
    document.write(runApplication());
} catch(error) {
    console.error(error); // hoisting
} finally {
    console.log("Sempre será executado!!!");
}

document.write("Application is running...")

function divideNumbers(num1, num2) {
 if (num2 == 0) throw new Error("Não é possivel dividir por 0!");

 return num1 / num2
}

console.log(divideNumbers(6, 0));

console.log( );