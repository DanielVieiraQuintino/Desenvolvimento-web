
    function degreeConvert(degree) {
    console.log(degree);
    const degreeAux = degree.split(" ").join("");
    const arrayDegree = Array.from(degreeAux)
    const scaleDegree = arrayDegree.pop().toUpperCase();
    const newDegree = Number(arrayDegree.join(""));

    if (isNaN(newDegree)) throw new Error("Valor inválido!")

    function convertToFahrenheit() {
    return (newDegree * 9) /5 + 32;
    }

    function convertFahrenheitToCelsius() {
    return ((newDegree - 32) / 5) + 32;
    }
        
    switch (scaleDegree) {
    case "C":
    return convertToFahrenheit() + "F";
    case "F":
    return convertFahrenheitToCelsius() + "C";
    default:
    throw new Error("Escala não identificada!");
}
}

    try {
    const temperature = "10c"
    const temperatureConverted = degreeConvert(temperature)
    console.log(`${temperature} = ${temperatureConverted}`);
}   catch (error) {
    console.error(error);
}