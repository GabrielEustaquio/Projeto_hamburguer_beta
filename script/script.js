/** Ativar menu mobile */
const menu_botao = document.querySelector(".menu_botao");

const navegacao = document.querySelector(".navegacao");

function menuAtivo() {
  navegacao.classList.toggle("ativada");
}

menu_botao.addEventListener("click", menuAtivo);

/** Remove menu ao clicar */
const primeiro_link = document.querySelector(".menu li #a-1");
const segundo_link = document.querySelector(".menu li #a-2");

function removeMenuAoClicarPrimeiroLink() {
  navegacao.classList.remove("ativada");
}

function removeMenuAoClicarSegundoLink() {
  navegacao.classList.remove("ativada");
}

primeiro_link.addEventListener("click", removeMenuAoClicarPrimeiroLink);
segundo_link.addEventListener("click", removeMenuAoClicarSegundoLink);

/** Permanecer link marcado desktop */

function permanecerWidthPrimeiroLink() {
  primeiro_link.classList.toggle("clickado");
  if (segundo_link.className == "clickado") {
    segundo_link.classList.remove("clickado");
  }
}

function permanecerWidthSegundoLink() {
  segundo_link.classList.toggle("clickado");
  if (primeiro_link.className == "clickado") {
    primeiro_link.classList.remove("clickado");
  }
}

primeiro_link.addEventListener("click", permanecerWidthPrimeiroLink);
segundo_link.addEventListener("click", permanecerWidthSegundoLink);

/** Animacoes */
const article = document.querySelector("article");
article.style.opacity = 0;
article.style.transition = "1s";
function scroll() {
  const armazena = window.scrollY;
  if (armazena > 80) {
    article.style.opacity = 1;
    article.style.transform = "translateY(-60px)";
  } else {
    article.style.opacity = 0;
  }
}
window.addEventListener("scroll", scroll);

/** Perguntas frequentes */
const dt = document.querySelector("article.container .tabela .dt");
const segundodt = document.querySelector(
  "article.container .tabela .segundodt"
);
const tabela = document.querySelector(".tabela");
const dd = document.querySelector(".dd");
const segundodd = document.querySelector(".segundodd");

function adicionarTabela() {
  tabela.classList.toggle("ativaTabela");
  dd.classList.toggle("displayblock");
}

function adicionarTabelaDois() {
  tabela.classList.toggle("ativaTabeladois");
  segundodd.classList.toggle("displayblockdois");
}

segundodt.addEventListener("click", adicionarTabelaDois);
dt.addEventListener("click", adicionarTabela);

/**Animacoes perguntas */
function scrollarBaixo() {
  dt.style.opacity = 0;
  segundodt.style.opacity = 0;
  dt.style.transition = "1s";
  segundodt.style.transition = "1s";
  const armazenaScrollBaixo = window.scrollY;
  if (armazenaScrollBaixo > 500) {
    dt.style.opacity = 1;
    segundodt.style.opacity = 1;
  }
}

window.addEventListener("scroll", scrollarBaixo);

/** Desenvolvido em 15/05/2022. */
/** Gabriel. */
/** Versão 1.0 */
