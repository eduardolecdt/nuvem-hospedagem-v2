(function() {
  const nav = document.querySelector("nav");
  const botaoMenu = nav.querySelector("button.menu");
  const opcoes = nav.querySelector("div.opcoes");
  const botoes = nav.querySelectorAll('button.abrirOpcao');
  const opcoesUnicas = nav.querySelectorAll('.opcao');

  window.addEventListener("scroll", function() {
    if (window.scrollY > 500) {
      nav.classList.add("scroll");
    } else {
      nav.classList.remove("scroll");
    }
  });

  botaoMenu.addEventListener("click", function() {
    botaoMenu.classList.toggle("ativo");
    opcoes.classList.toggle("mostrar");
  });

  botoes.forEach(function(botao, index) {
    botao.addEventListener('click', function() {
      const ativo = this.classList.contains('ativo');

      botoes.forEach(function(b) {
        b.classList.remove('ativo');
      });
      opcoesUnicas.forEach(function(opcao) {
        opcao.classList.remove('ativo');
      });
      
      if (!ativo) {
        this.classList.add('ativo');
        opcoesUnicas[index].classList.add('ativo');
      }
    });
});

})();