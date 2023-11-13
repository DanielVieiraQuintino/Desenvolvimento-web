const myTitle = document.querySelector("h1"); // element 
const myContainer = document.querySelector(".container");

console.log(myTitle);
console.log(myTitle.textContent);
console.log(myTitle.innerHTML);

console.log(myContainer);
console.log(myContainer.textContent); 
console.log(myContainer.innerHTML);

myTitle.innerText = "Document Object Model"
myTitle.innerText = "<i>Emanuel</i>"
myTitle.innerHTML = "<i>HTML</i>"

myTitle.style.color = "red";
myTitle.style.backgroundColor = "blue";

const boxesNodeList = document.querySelectorAll(".box");
// NodeList

console.log(boxesNodeList.forEach((node) => {
    node.style.color = "blue";
}));

const num1 = document.querySelector("#num1")
const num2 = document.querySelector("#num2")
const sumButton = document.querySelector(".sumButton")
const result = document.querySelector(".result")

console.log();
function sumNuber() {
    result.innerHTML = Number(num1.value) + Number(num2.value);
}

sumButton.addEventListener("click", sumNuber);
num1.addEventListener("keyup", () => {
    console.log(num1.value);
});


