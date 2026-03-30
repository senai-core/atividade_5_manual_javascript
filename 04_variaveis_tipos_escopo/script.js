const saidaVariaveis = document.getElementById("saida");

document.getElementById("btn-var").addEventListener("click", function () {
  var serie = "3 ano";
  saidaVariaveis.textContent =
    "Exemplo com var:\nvar serie = \"3 ano\";\nResultado: " +
    serie +
    "\n\nA var e antiga e nao respeita escopo de bloco do mesmo jeito que let e const.";
});

document.getElementById("btn-let").addEventListener("click", function () {
  let faltas = 2;
  faltas = 3;
  saidaVariaveis.textContent =
    "Exemplo com let:\nlet faltas = 2;\nfaltas = 3;\nResultado: " +
    faltas +
    "\n\nA let pode mudar de valor.";
});

document.getElementById("btn-const").addEventListener("click", function () {
  const escola = "SENAI";
  saidaVariaveis.textContent =
    "Exemplo com const:\nconst escola = \"SENAI\";\nResultado: " +
    escola +
    "\n\nA const nao deve receber outro valor depois.";
});

document.getElementById("btn-escopo").addEventListener("click", function () {
  let texto = "Escopo global e de funcao:\n";
  const turma = "3 ano A";

  function mostrarTurma() {
    let mensagem = "Dentro da funcao, a turma e " + turma + ".";
    return mensagem;
  }

  if (true) {
    var apareceFora = "var saiu do bloco";
    let soNoBloco = "let ficou no bloco";
    texto += "- Dentro do bloco: " + soNoBloco + "\n";
  }

  texto += "- " + mostrarTurma() + "\n";
  texto += "- Fora do bloco, a var ainda existe: " + apareceFora + "\n";
  texto += "- Se eu tentar usar a let fora do bloco, da erro.\n";
  texto += "// console.log(soNoBloco); -> erro de escopo";

  saidaVariaveis.textContent = texto;
});
