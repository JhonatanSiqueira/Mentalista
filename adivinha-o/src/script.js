var contador = 0;
var numeroSecreto = parseInt(Math.random() * 11);

function Chutar() {
  var chute = parseInt(document.getElementById("valor").value);

  var resultado = document.getElementById("resultado");
  contador++;

  if (chute == numeroSecreto) {
    resultado.innerHTML = "Boa. Você acertou! Tentativas:" + contador;
  } else if (chute > 10 || chute < 0) {
    resultado.innerHTML = "Porfavor, digite um número de 0 a 10!!";
  } else {
    resultado.innerHTML = "Você errou... Tentativas:" + contador;
  }
}
