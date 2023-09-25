//  Object 

let nameStudent = "Daniel";
let age = 30;
let profission = "Web Developer \nData Analyst";

console.log(profission);

let student = {
    name: "Daniel",
    age: 30,
    profission: "Web Developer",
    attack: () => "pound",
    special: () => "hydropump",
};

console.log(student);
console.log(typeof student);
console.log(student.name);
console.log(student.age);
console.log(student["profission"]);
console.log(student.special());
console.log(student.attack());

// Array (Vector)

// let pokedex = [
// ["Charmander", 6],
// ["Bulbasour", 5],
// ["Squirtle", 4],
// ];

let pokedex = [
{ name: "Charmander", Level: 6},
{ name: "Bulbasour", Level: 5},
{ name: "Squirtle", Level: 4},
];

console.log(pokedex);
console.log(typeof pokedex);
console.log(pokedex[0]);
console.log(pokedex[2]);
console.log(pokedex[1][0]);
console.log(pokedex [0].name);
console.log(pokedex [0].level);