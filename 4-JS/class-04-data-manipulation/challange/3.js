const dateWarsBorn = new Date(prompt("Digite  a data de nascimento (yyyy-mm-dd)"))

const dateNow = new Date();
const userAge = ((dateNow - dateWarsBorn) / 1000 / 60 / 60 / 24 / 365.25);
console.log(userAge);