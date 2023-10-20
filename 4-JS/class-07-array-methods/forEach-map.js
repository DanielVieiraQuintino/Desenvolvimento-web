const array = ["Matrix", "IT", "ET", "Jumanji", "Barbie"];

console.log(array);

const myArrayForEach = array.forEach((value, index, array) => {
//  array[index] = "A"
 return { value, index, array };
});

console.log(myArrayForEach);

const arrayMap = array.map((value, index, array) => {
    return{ value, index, array };
});

console.log(array);
console.log(arrayMap);

const real = [1, 2, 3000, 40, 50]

const realConverted = real.map(value => value * 5.05);

console.log(real);
console.log(realConverted);