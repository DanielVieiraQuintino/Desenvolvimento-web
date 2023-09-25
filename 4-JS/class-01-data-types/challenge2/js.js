function cadastrarJogo() {
    let jogo = {};

    jogo.name = prompt("Digite o nome do game: ");
    jogo.genre = prompt("Digite o gênero do game: ");
    jogo.gamereleaseyear = prompt("Digite o ano de lançamento do game: ");

    return jogo;
}

function imprimirCaracteristicas(jogo) {
    console.log("\nCaracterísticas do game:");
    console.log(`Nome do game: ${jogo.name}`);
    console.log(`Gênero do game: ${jogo.genre}`);
    console.log(`Ano de Lançamento do game: ${jogo.gamereleaseyear}`);
}

let jogoCadastrado = cadastrarJogo();
imprimirCaracteristicas(jogoCadastrado);