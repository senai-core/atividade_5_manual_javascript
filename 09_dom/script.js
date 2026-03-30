document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("status").textContent =
    "Pagina carregada. Agora o DOM ja pode ser manipulado.";

  const titulo = document.getElementById("titulo");
  const resultado = document.getElementById("resultado");
  const nomeInput = document.getElementById("nome");
  const checkbox = document.getElementById("aceito");
  const card = document.querySelector("#card-principal");
  const lista = document.getElementById("lista");

  document.getElementById("btn-ler").addEventListener("click", function () {
    const formulario = document.getElementById("formulario");
    const nome = nomeInput.value;
    const marcado = checkbox.checked;

    if (!formulario.checkValidity()) {
      resultado.textContent = "Preenche o campo nome antes de continuar.";
      return;
    }

    resultado.textContent =
      "Nome digitado: " + nome + " | Checkbox marcado: " + marcado;
  });

  document.getElementById("btn-texto").addEventListener("click", function () {
    titulo.textContent = "Titulo alterado pelo JavaScript";
    resultado.textContent = "Usei textContent para trocar os textos da pagina.";
  });

  document.getElementById("btn-estilo").addEventListener("click", function () {
    titulo.style.color = "#dc2626";
    resultado.style.backgroundColor = "#fee2e2";
    resultado.textContent = "Usei style para mudar a cor do titulo e da caixa.";
  });

  document.getElementById("btn-classe").addEventListener("click", function () {
    card.classList.toggle("destaque");
    resultado.textContent = "Usei classList para adicionar ou remover destaque.";

    const itens = document.querySelectorAll(".item");
    itens.forEach(function (item) {
      item.classList.add("item-marcado");
    });
  });

  document.getElementById("btn-lista").addEventListener("click", function () {
    const novoItem = document.createElement("li");
    novoItem.textContent = "Novo item criado com createElement()";
    novoItem.classList.add("item", "item-marcado");
    lista.appendChild(novoItem);
    resultado.textContent = "Usei createElement() e appendChild() para criar item.";
  });

  document.getElementById("btn-remover").addEventListener("click", function () {
    const ultimoItem = lista.lastElementChild;

    if (ultimoItem) {
      ultimoItem.remove();
      resultado.textContent = "Usei remove() para apagar o ultimo item da lista.";
    }
  });
});
