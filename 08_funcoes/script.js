const saidaFuncoes = document.getElementById("saida");

function mostrarMensagem() {
  return "Ola! Essa funcao nao recebeu parametro.";
}

function saudar(nome) {
  return "Ola, " + nome + "!";
}

function somar(a, b) {
  return a + b;
}

document.getElementById("btn-sem-parametro").addEventListener("click", function () {
  saidaFuncoes.textContent = mostrarMensagem();
});

document.getElementById("btn-com-parametro").addEventListener("click", function () {
  const nome = document.getElementById("nome").value || "visitante";
  saidaFuncoes.textContent = saudar(nome);
});

document.getElementById("btn-com-retorno").addEventListener("click", function () {
  const a = Number(document.getElementById("numero-a").value);
  const b = Number(document.getElementById("numero-b").value);
  const resultado = somar(a, b);

  saidaFuncoes.textContent = "Resultado da funcao com retorno: " + resultado;
});
