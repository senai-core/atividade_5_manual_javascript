const botaoExterno = document.getElementById("botao-externo");
const saidaExterna = document.getElementById("saida");

botaoExterno.addEventListener("click", function () {
  saidaExterna.textContent =
    "Esse resultado veio de um JavaScript salvo em arquivo separado.";
});
