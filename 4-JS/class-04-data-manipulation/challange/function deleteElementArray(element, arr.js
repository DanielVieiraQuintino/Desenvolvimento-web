function deleteElementArray(element, array) {
    const index = array.indexOf(element)
    console.log(index);
    index != -1 ? array.slice(index, 1) : "";
    return array;
}

const techs = ["HTML", 10, "CSS", 20, "JavaScript", 30]
techs.splice(1, 3, "Test")

console.log(techs.slice(1, 3));
console.log(techs.splice(1, 3));
console.log(techs);

console.log(deleteElementArray("CSS", techs));