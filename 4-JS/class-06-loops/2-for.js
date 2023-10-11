
const myArray = ["A", 2, {}, () => {}];
const ArrayBiD = [
["A", "B", "C"],
[1, 2 ,3],
[
    [1, 2, 3]
]
];

console.log(ArrayBiD[0][1]);
console.log(ArrayBiD[0]);

// for(let i = 0; i <= myArray.length; i++) {
//     console.log(myArray[i]);
// }

for(let i = 0; i < ArrayBiD.length; i++) {
for(let j = 0; j < ArrayBiD[1].length; j++) {
// for(let k = 0; k < ArrayBiD[i][j].length; k++) {
// console.log(ArrayBiD[i][j]);
}

}


for (const i of myArray) {
    console.log(i);
}

for (const i of ArrayBiD) {
for (const j of i) {
    console.log(j);
}

}

for (const i in myArray) {
// console.log(i);
console.log(myArray[i]);
}