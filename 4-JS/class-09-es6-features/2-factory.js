function person(name, age) {
    return {
        name,
        age: age,
        canDrive: age >= 16,
        status: () => {
            if (age > 18) {
                return "Pode dirigir";
            } else {
                return "Não pode dirigir";
            }
        },
    }; 
}

console.log(person("Emanuel", 30));
console.log(person("Neemias", 17));
console.log(person("Pedrinho", 18));
console.log(person("Odilon", 17));