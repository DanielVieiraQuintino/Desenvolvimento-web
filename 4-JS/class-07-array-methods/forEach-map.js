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

const rectangles = [
    { width: 4, height: 5 },
    { width: 7, height: 10 },
    { width: 14, height: 7 },
]

const calculateAreas = rectangles.map((value, index) =>{
    return {
    name: `Retangulo ${index + 1}`,
    area: value.width * value.height
    };
});

console.table(calculateAreas);
document.write(JSON.stringify(calculateAreas))