const myArray = Array("A", 1, () => "a");

console.log(myArray);
console.log(myArray[0]);
console.log(myArray[2]());
console.log(myArray.join("_"));

const myName = "Daniel"; 
console.log(myName.split("").reverse().join());

const arrayTechs = ["HTML", "CSS", "Git"]

arrayTechs.push("JavaScript")
arrayTechs.push("Só acredito veno!")

arrayTechs.pop()
const removeItemEND = arrayTechs.pop()
console.log(removeItemEND + " foi removido com sucesso!");

const removeItemSTART = arrayTechs.shift()
console.log(removeItemSTART + " foi removido com sucesso!");

arrayTechs.unshift("React")
arrayTechs.unshift("SQL")

console.log(arrayTechs);

console.log(arrayTechs.includes("JavaScript"));
console.log("A" == "a");

console.log(arrayTechs.indexOf("Git")); // -1 not exist

console.log(arrayTechs.keys());

console.log(arrayTechs.slice(1, 4));
console.log(arrayTechs.slice(-3, -1));
console.log(arrayTechs);

console.log(myArray.concat(arrayTechs));
