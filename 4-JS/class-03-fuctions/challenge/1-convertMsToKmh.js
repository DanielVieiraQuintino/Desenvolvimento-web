
function mpsToKmph(mps) {
    return mps * 3.6;
  }
  const input = prompt("Digite a velocidade em metros por segundo (m/s):");
  
  const mps = parseFloat(input);
  
  if (!isNaN(mps)) {

    const kmph = mpsToKmph(mps);

    document.write(`A velocidade em km/h é ${kmph.toFixed(2)} km/h`);
  } else {
    document.write("Entrada inválida. Certifique-se de digitar um número válido.");
  }
   