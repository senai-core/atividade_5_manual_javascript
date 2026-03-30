const botaoIntro = document.getElementById("botao-intro");
const tituloStatus = document.getElementById("titulo-status");
const textoStatus = document.getElementById("texto-status");
const card = document.querySelector(".card");

botaoIntro.addEventListener("click", function () {
  tituloStatus.textContent = "Pagina interativa";
  textoStatus.textContent =
    "Agora o JavaScript entrou em acao, mudou o texto e respondeu ao clique.";
  card.classList.add("ativo");
});
