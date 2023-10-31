const ArrayNumbers = Array.from({length: 25}, (value,
index, array) => index + 1).sort(() => Math.random() - 0.5)
.filter((value, index) => index < 15).sort((a, b) => a - b);

console.log(ArrayNumbers.join("-"));