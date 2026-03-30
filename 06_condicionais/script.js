const saidaCondicionais = document.getElementById("saida");

document.getElementById("btn-if").addEventListener("click", function () {
  const idade = 18;
  let resultado = "";

  if (idade >= 18) {
    resultado = "If: com idade 18, o resultado foi 'Maior de idade'.";
  }

  saidaCondicionais.textContent = resultado;
});

document.getElementById("btn-if-else").addEventListener("click", function () {
  const nota = 6;
  let resultado = "";

  if (nota >= 7) {
    resultado = "If...else: aprovado.";
  } else {
    resultado = "If...else: reprovado, porque a nota foi 6.";
  }

  saidaCondicionais.textContent = resultado;
});

document.getElementById("btn-switch").addEventListener("click", function () {
  const dia = 2;
  let resultado = "";

  switch (dia) {
    case 1:
      resultado = "Switch: Domingo";
      break;
    case 2:
      resultado = "Switch: Segunda";
      break;
    default:
      resultado = "Switch: Outro dia";
  }

  saidaCondicionais.textContent = resultado;
});
