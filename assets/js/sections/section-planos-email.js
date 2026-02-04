(function() {
    const sectionPlanos = document.querySelector("section.planos");
    const toggle = sectionPlanos.querySelector("div.toggle");
  
    const planoBasico = sectionPlanos.querySelector("div.basico");
    const planoAvancado = sectionPlanos.querySelector("div.avancado");
    const planoEspecial = sectionPlanos.querySelector("div.especial");
  
    const botaoBasico = planoBasico.querySelector("a");
    const botaoAvancado = planoAvancado.querySelector("a");
    const botaoEspecial = planoEspecial.querySelector("a");
  
    var linkBasicoMensal = "https://cliente.nuvemhospedagem.com.br/index.php/store/email-profissional/e-mail-empresarial-1?billingcycle=monthly";
    var linkAvancadoMensal = "ttps://cliente.nuvemhospedagem.com.br/index.php/store/email-profissional/e-mail-empresarial-2?billingcycle=monthly";
    var linkEspecialMensal = "https://cliente.nuvemhospedagem.com.br/index.php/store/email-profissional/e-mail-empresarial-3?billingcycle=monthly";
  
    var linkBasicoAnual = "https://cliente.nuvemhospedagem.com.br/index.php/store/email-profissional/e-mail-empresarial-1?billingcycle=annually";
    var linkAvancadoAnual = "https://cliente.nuvemhospedagem.com.br/index.php/store/email-profissional/e-mail-empresarial-2?billingcycle=annually";
    var linkEspecialAnual = "https://cliente.nuvemhospedagem.com.br/index.php/store/email-profissional/e-mail-empresarial-3?billingcycle=annually";
  
    var mensalAtivo = true;
  
    toggle.addEventListener("click", function() {
      sectionPlanos.classList.toggle("ativo");
      toggle.classList.toggle("ativo");
  
      if (mensalAtivo) {
        botaoBasico.href = linkBasicoAnual;
        botaoAvancado.href = linkAvancadoAnual;
        botaoEspecial.href = linkEspecialAnual;
      } else {
        botaoBasico.href = linkBasicoMensal;
        botaoAvancado.href = linkAvancadoMensal;
        botaoEspecial.href = linkEspecialMensal;
      }
  
      mensalAtivo = !mensalAtivo;
    });
  })();
    
