(function() {
  const sectionConfiguracoes = document.querySelector("section.configuracoes");
  const duvida = sectionConfiguracoes.querySelectorAll("div.duvida");

  duvida.forEach(function(div) {
    div.addEventListener("click", function() {
      div.classList.toggle("ativo");
    });
  });
})();