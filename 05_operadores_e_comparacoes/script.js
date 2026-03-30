const saidaOperadores = document.getElementById("saida");

document.getElementById("btn-aritmetica").addEventListener("click", function () {
  const soma = 10 + 5;
  const subtracao = 10 - 5;
  const multiplicacao = 10 * 5;
  const divisao = 10 / 5;
  const resto = 10 % 3;

  saidaOperadores.textContent =
    "Operadores aritmeticos:\n" +
    "10 + 5 = " + soma + "\n" +
    "10 - 5 = " + subtracao + "\n" +
    "10 * 5 = " + multiplicacao + "\n" +
    "10 / 5 = " + divisao + "\n" +
    "10 % 3 = " + resto;
});

document.getElementById("btn-comparacoes").addEventListener("click", function () {
  saidaOperadores.textContent =
    "Comparacoes obrigatorias:\n" +
    "5 == \"5\" -> " + (5 == "5") + "\n" +
    "5 === \"5\" -> " + (5 === "5") + "\n" +
    "5 != \"5\" -> " + (5 != "5") + "\n" +
    "5 !== \"5\" -> " + (5 !== "5") + "\n" +
    "0 == false -> " + (0 == false) + "\n" +
    "0 === false -> " + (0 === false) + "\n\n" +
    "Explicacao:\n" +
    "O === e mais seguro porque ele compara valor e tipo ao mesmo tempo.";
});

document.getElementById("btn-logica").addEventListener("click", function () {
  const idade = 18;
  const temDocumento = true;

  saidaOperadores.textContent =
    "Operadores logicos:\n" +
    "(idade >= 18 && temDocumento) -> " + (idade >= 18 && temDocumento) + "\n" +
    "(idade < 18 || temDocumento) -> " + (idade < 18 || temDocumento) + "\n" +
    "!(idade >= 18) -> " + !(idade >= 18);
});
