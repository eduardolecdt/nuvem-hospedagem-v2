(function() {
  const sectionPlanos = document.querySelector("section.planos");
  const toggle = sectionPlanos.querySelector("div.toggle");

  const planoBasico = sectionPlanos.querySelector("div.basico");
  const planoIntermediario = sectionPlanos.querySelector("div.intermediario");
  const planoAvancado = sectionPlanos.querySelector("div.avancado");
  const planoEspecial = sectionPlanos.querySelector("div.especial");

  const botaoBasico = planoBasico.querySelector("a");
  const botaoIntermediario = planoIntermediario.querySelector("a");
  const botaoAvancado = planoAvancado.querySelector("a");
  const botaoEspecial = planoEspecial.querySelector("a");

  var linkBasicoMensal = "https://cliente.nuvemhospedagem.com.br/store/hospedagem-de-sites/nuvem-ssd-1-basico-new?billingcycle=monthly";
  var linkIntermediarioMensal = "https://cliente.nuvemhospedagem.com.br/store/hospedagem-de-sites/nuvem-ssd-2-intermediario-1?billingcycle=monthly";
  var linkAvancadoMensal = "https://cliente.nuvemhospedagem.com.br/store/hospedagem-de-sites/nuvem-ssd-3-avancado?billingcycle=monthly";
  var linkEspecialMensal = "https://cliente.nuvemhospedagem.com.br/store/hospedagem-de-sites/nuvem-ssd-4-especial?billingcycle=monthly";

  var linkBasicoAnual = "https://cliente.nuvemhospedagem.com.br/store/hospedagem-de-sites/nuvem-ssd-1-basico-new?billingcycle=annually";
  var linkIntermediarioAnual = "https://cliente.nuvemhospedagem.com.br/store/hospedagem-de-sites/nuvem-ssd-2-intermediario-1?billingcycle=annually";
  var linkAvancadoAnual = "https://cliente.nuvemhospedagem.com.br/store/hospedagem-de-sites/nuvem-ssd-3-avancadobillingcycle=annually";
  var linkEspecialAnual = "https://cliente.nuvemhospedagem.com.br/store/hospedagem-de-sites/nuvem-ssd-4-especial?billingcycle=annually";

  var mensalAtivo = true;

  toggle.addEventListener("click", function() {
    sectionPlanos.classList.toggle("ativo");
    toggle.classList.toggle("ativo");

    if (mensalAtivo) {
      botaoBasico.href = linkBasicoAnual;
      botaoIntermediario.href = linkIntermediarioAnual;
      botaoAvancado.href = linkAvancadoAnual;
      botaoEspecial.href = linkEspecialAnual;
    } else {
      botaoBasico.href = linkBasicoMensal;
      botaoIntermediario.href = linkIntermediarioMensal;
      botaoAvancado.href = linkAvancadoMensal;
      botaoEspecial.href = linkEspecialMensal;
    }

    mensalAtivo = !mensalAtivo;
  });
})();
