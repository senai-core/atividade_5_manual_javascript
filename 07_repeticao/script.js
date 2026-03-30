const saidaRepeticao = document.getElementById("saida");

document.getElementById("btn-for").addEventListener("click", function () {
  let texto = "Exemplo com for:\n";

  for (let i = 1; i <= 5; i++) {
    texto += "Numero " + i + "\n";
  }

  saidaRepeticao.textContent = texto;
});

document.getElementById("btn-while").addEventListener("click", function () {
  let texto = "Exemplo com while:\n";
  let i = 1;

  while (i <= 5) {
    texto += "Numero " + i + "\n";
    i++;
  }

  saidaRepeticao.textContent = texto;
});
