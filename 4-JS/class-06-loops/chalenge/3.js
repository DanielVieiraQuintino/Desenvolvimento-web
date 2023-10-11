const ramdomNumber = Math.ceil(Math.random() * 10);
let countTry = 1;

while (true) {
    const guessNumberUser = prompt("Adivinhe um número de 1 a 10");

    console.log(guessNumberUser);

    if (guessNumberUser === null) {
        alert("Progama encerrado");    
        break;
    }

    if (guessNumberUser < 1 || guessNumberUser > 10) {
        alert("Atenção, número de 1 a 10!")
    }

    if (guessNumberUser === "" || isNan(guessNumberUser)) {
        alert("Insira um número de 1 a 10");
        continue;
    }

    const gameOver = Number(guessNumberUser) === ramdomNumber;
    if (gameOver) {
        alert(`Parabéns voce acertou em ${countTry} tentativas(s)`)
        break;
    }

    countTry++;     
}