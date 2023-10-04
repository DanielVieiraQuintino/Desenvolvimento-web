let myName = "Daniel"

console.log(myName.__proto__);
console.log(myName.length);
console.log(myName[1]);
console.log(myName.toLocaleLowerCase());
console.log(myName.toLocaleUpperCase());
console.log(myName.toUpperCase());

console.log(myName[1]);
console.log(myName[1] = "T");
console.log(myName[1] = "outra coisa");

let phrase = "Im a web developer"

console.log(phrase.split(" ")[0] = "WEB");
console.log(typeof phrase);
console.log(phrase.split("").reverse().join(""));

console.log(phrase.replace("web", "WEB"));
console.log(phrase);

console.log(phrase.trim());
console.log(phrase.substring(5));

console.log(phrase.includes("Web"));
console.log("web" == "Web");
console.log(phrase.toLocaleLowerCase().includes("web") ? "Test Verdadeiro" : "Test Falso");

const consoles = {
    log: () => {
        return "imprimir";
    },
    error: () => {
        return "imprimir error"
    }
}

console.log("test");
consoles.log();
console.log();