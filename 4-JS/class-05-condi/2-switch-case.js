const weekDay = new
Date().getDay()


console.log(weekDay);


let month = 1;

switch (month) {
 case month >= 0 || month <=2:
    console.log("Domingo");
    break;
 case 1:
    console.log("Segunda");
    break;
 case 2:
    console.log("Terça");
    break;
 case 3:
    console.log("Quarta");
    break;
 case 4:
    console.log("Quinta");
    break;
 case 5:
    console.log("Sexta");
    break;
 case 6:
    console.log("Sábado");
    break;
    default:
    console.log("Dia não encontrado");
}

const option = prompt(`
Digite a opção desejada:

 1- Consulta
 2- Atendimento
 3- Encerrar
`);

switch (option) {
    case "1":
    alert("Vamos agendar sua consulta");
    break;
    case "2":
    alert("Vamos transferir para um de nossos atendentes");
    break;
    case "3":
    alert("Obrigada volta sempre!");
    break;
    default:
    alert("Opção invalida!")
    break
}