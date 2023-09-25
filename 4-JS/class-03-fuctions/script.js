function average(grade1, grade2) {

    const result = (grade1 + grade2) / 2
    document.write(`${result} <br> `)
}

average(3, 7); // Argument
average(8, 9); // Argument
average(7, 6); // Argument
average(3, 2); // Argument


// anonymous
const add = function (num1, num2) {
    return num1 + num2
}

console.log(add(2, 3));

// arrow

const mult = (num1, num2) => {
    return num1 * num2
}

console.log(mult(2, 3));
