 const arrayNumbers = [7, 4, 5, 7, 8, 9, "7", 40];

//  const arraySorted = arrayNumbers.sort((a, b) => {
//     if (a > b) return 1;
//     if (a < b) return -1;
//     return 0;
//  });

 arrayNumbers.sort((a, b) => a - b);

 console.log(arrayNumbers.join("-"));
//  console.log(arraySorted.join("-"));

const arrayNames = ["Pedrinho", "Eduardo", "Luíza", "Éric"];

// arrayNames.sort((a, b) => {
//     a = a.toUpperCase();
//     b = b.toUpperCase();
//     if (a > b) return 1;
//     if (a < b) return -1;
//     return 0;
// });

arrayNames.sort((a, b) => a.localeCompare(b));

console.log(arrayNames);

const arrayAnimes = [
    {name: "Naruto", year: 1986},
    {name: "Dragon Ball", year: 1984},
    {name: "Cavaleiros do Zodiaco", year: 1997},
    {name: "Digimon", year: 1997},
    {name: "Jaspion", year: 1985},
];

const sortedArrayAnimes = arrayAnimes.sort((a, b) => {
    if (a.year > b.year) return 1;
    if (a.year < b.year) return -1;
    return 0;
});


console.table(arrayAnimes.sort((a, b) => a.year - b.year));

console.table(sortedArrayAnimes);
console.table(arrayAnimes.sort((a, b) => a.year - b.year));

console.table(arrayAnimes);
