(function () {
    /* ---- State ---- */
  
    const STATE = {
      seletor: '',
      wordpressBasico: {
        nome: 'Ryzen 1',
        processamentoIndice: 2,
        memoria: '1Gb',
        espaco: '20Gb',
        transferencia: 'ilimitado',
        contasEmail: '10 e-mails',
        dominios: '1 site',
        plugins: 'Elementor Pro e WP Rocket',
        precos: {
        mensal: { real: '149', centavo: '90', desconto: '0%',  valorTotal: '149, 90' },
        trimestral: { real: '142', centavo: '40', desconto: '5%', valorTotal: '427,21' },
        semestral: { real: '137', centavo: '08', desconto: '8%', valorTotal: '822,48' },
        anual: { real: '125', centavo: '83', desconto: '16%', valorTotal: '1.510,00' },
        },
      linkBotao: {
        mensal: { caminho: 'https://cliente.nuvemhospedagem.com.br/index.php?rp=/store/hospedagem-ryzen/hospedagem-ryzen-wp-ryzen-1&billingcycle=monthly' },
        trimestral: { caminho: 'https://cliente.nuvemhospedagem.com.br/index.php?rp=/store/hospedagem-ryzen/hospedagem-ryzen-wp-ryzen-1&billingcycle=quarterly' },
        semestral: { caminho: 'https://cliente.nuvemhospedagem.com.br/index.php?rp=/store/hospedagem-ryzen/hospedagem-ryzen-wp-ryzen-1&billingcycle=semiannually' },
        anual: { caminho: 'https://cliente.nuvemhospedagem.com.br/index.php?rp=/store/hospedagem-ryzen/hospedagem-ryzen-wp-ryzen-1&billingcycle=annually' },
      }
    },
      wordpressIntermediario: {
        nome: 'Ryzen 2',
        processamentoIndice: 2,
        memoria: '2Gb',
        espaco: '50Gb',
        transferencia: 'ilimitado',
        contasEmail: '25 e-mails',
        dominios: '1 site',
        plugins: 'Elementor Pro e WP Rocket',
        precos: {
        mensal: { real: '249', centavo: '90', desconto: '0%', valorTotal: '249, 90' },
        trimestral: { real: '237', centavo: '40', desconto: '5%', valorTotal: '712,21' },
        semestral: { real: '229', centavo: '90', desconto: '8%', valorTotal: '1.379,44' },
        anual: { real: '209', centavo: '91', desconto: '16%', valorTotal: '2.518,99' }
        },
      linkBotao: {
        mensal: { caminho: 'https://cliente.nuvemhospedagem.com.br/index.php?rp=/store/hospedagem-ryzen/wp-ryzen-2&billingcycle=monthly' },
        trimestral: { caminho: 'https://cliente.nuvemhospedagem.com.br/index.php?rp=/store/hospedagem-ryzen/wp-ryzen-2&billingcycle=quarterly' },
        semestral: { caminho: 'https://cliente.nuvemhospedagem.com.br/index.php?rp=/store/hospedagem-ryzen/wp-ryzen-2&billingcycle=semiannually' },
        anual: { caminho: 'https://cliente.nuvemhospedagem.com.br/index.php?rp=/store/hospedagem-ryzen/wp-ryzen-2&billingcycle=annually' },
      }
    },
      wordpressAvancado: {
        nome: 'Ryzen 3',
        processamentoIndice: 4,
        memoria: '4Gb',
        espaco: '100Gb',
        transferencia: 'ilimitado',
        contasEmail: '100 e-mails',
        dominios: '3 sites',
        plugins: 'Elementor Pro e WP Rocket',
        precos: {
          mensal: { real: '349', centavo: '90', desconto: '0%', valorTotal: '349, 90' },
          trimestral: { real: '332', centavo: '33', desconto: '5%', valorTotal: '997,00' },
          semestral: { real: '321', centavo: '83', desconto: '8%', valorTotal: '1.931,00' },
          anual: { real: '293', centavo: '83', desconto: '16%', valorTotal: '3.526,00' }
        },
      linkBotao: {
        mensal: { caminho: 'https://cliente.nuvemhospedagem.com.br/index.php?rp=/store/hospedagem-ryzen/hospedagem-ryzen-wp-ryzen-3&billingcycle=monthly' },
        trimestral: { caminho: 'https://cliente.nuvemhospedagem.com.br/index.php?rp=/store/hospedagem-ryzen/hospedagem-ryzen-wp-ryzen-3&billingcycle=quarterly' },
        semestral: { caminho: 'https://cliente.nuvemhospedagem.com.br/index.php?rp=/store/hospedagem-ryzen/hospedagem-ryzen-wp-ryzen-3&billingcycle=semiannually' },
        anual: { caminho: 'https://cliente.nuvemhospedagem.com.br/index.php?rp=/store/hospedagem-ryzen/hospedagem-ryzen-wp-ryzen-3&billingcycle=annually' },
      }
    },
      wordpressEspecial: {
        nome: 'Ryzen 4',
        processamentoIndice: 6,
        memoria: '4Gb',
        espaco: '200Gb',
        transferencia: 'ilimitado',
        contasEmail: '150 e-mails',
        dominios: '4 sites',
        plugins: 'Elementor Pro e WP Rocket',
        precos: {
          mensal: { real: '449', centavo: '00', desconto: '0%', valorTotal: '449, 90'},
          trimestral: { real: '427', centavo: '40', desconto: '5%', valorTotal: '1.282,21' },
          semestral: { real: '413', centavo: '83', desconto: '8%', valorTotal: '2.483,00' },
          anual: { real: '377', centavo: '83', desconto: '15%', valorTotal: '4.534,00' }
        },
      linkBotao: {
        mensal: { caminho: 'https://cliente.nuvemhospedagem.com.br/index.php?rp=/store/hospedagem-ryzen/wp-ryzen-4&billingcycle=monthly' },
        trimestral: { caminho: 'https://cliente.nuvemhospedagem.com.br/index.php?rp=/store/hospedagem-ryzen/wp-ryzen-4&billingcycle=quarterly' },
        semestral: { caminho: 'https://cliente.nuvemhospedagem.com.br/index.php?rp=/store/hospedagem-ryzen/wp-ryzen-4&billingcycle=semiannually' },
        anual: { caminho: 'https://cliente.nuvemhospedagem.com.br/index.php?rp=/store/hospedagem-ryzen/wp-ryzen-4&billingcycle=annually' },
      }
    },
  }
  
    /* ---- Elements ---- */
  
    const sectionPlanos = document.querySelector('section[name="planos"]')
    
    const buttonConsultarWordpressBasico = sectionPlanos.querySelector('button[name="consultarWordpressBasico"]')
    const buttonConsultarWordpressIntermediario = sectionPlanos.querySelector('button[name="consultarWordpressIntermediario"]')
    const buttonConsultarWordpressAvancado = sectionPlanos.querySelector('button[name="consultarWordpressAvancado"]')
    const buttonConsultarWordpressEspecial = sectionPlanos.querySelector('button[name="consultarWordpressEspecial"]')
    const buttonAssinar = sectionPlanos.querySelector('button[name="assinar"]')
    const buttonMensal = sectionPlanos.querySelector('button[name="mensal"]')
    const buttonTrimestral = sectionPlanos.querySelector('button[name="trimestral"]')
    const buttonSemestral = sectionPlanos.querySelector('button[name="semestral"]')
    const buttonAnual = sectionPlanos.querySelector('button[name="anual"]')

    const pMemoria = sectionPlanos.querySelector('p[name="memoria"]')
    const pEspaco = sectionPlanos.querySelector('p[name="espaco"]')
    const pTransferencia = sectionPlanos.querySelector('p[name="transferencia"]')
    const pContasEmail = sectionPlanos.querySelector('p[name="contasEmail"]')
    const pDominios = sectionPlanos.querySelector('p[name="dominios"]')
    const pPlugins = sectionPlanos.querySelector('p[name="plugins"]')
    const h2NomePlano = sectionPlanos.querySelector('h2[name="nomePlano"]')
    const divPotencia = sectionPlanos.querySelector('div[name="potencia"]')
    
    const h4Real = sectionPlanos.querySelector('h4[name="real"]')
    const h3Centavo = sectionPlanos.querySelector('h3[name="centavo"]')
    const pDesconto = sectionPlanos.querySelector('p[name="desconto"]')
    const pValorTotal = sectionPlanos.querySelector('p[name="valorTotal"]')

    /* ---- Methods ---- */

    function habilitarEventos () {
      clickAssinar()
      
      clickConsultarWordpressBasico()
      clickConsultarWordpressIntermediario()
      clickConsultarWordpressAvancado()
      clickConsultarWordpressEspecial()
      
      clickMensal()
      clickTrimestral()
      clickSemestral()
      clickAnual()
    }
    
    /* ---- Events ---- */

    function clickAssinar () {
      buttonAssinar.addEventListener('click', callbackClickAssinar)
    }

    // Planos

    function clickConsultarWordpressBasico () {
      buttonConsultarWordpressBasico.addEventListener('click', callbackClickConsultarWordpressBasico)
    }

    function clickConsultarWordpressIntermediario () {
      buttonConsultarWordpressIntermediario.addEventListener('click', callbackClickConsultarWordpressIntermediario)
    }

    function clickConsultarWordpressAvancado () {
      buttonConsultarWordpressAvancado.addEventListener('click', callbackClickConsultarWordpressAvancado)
    }
    
    function clickConsultarWordpressEspecial () {
      buttonConsultarWordpressEspecial.addEventListener('click', callbackClickConsultarWordpressEspecial)
    }

    // Precos

    function clickMensal () {
      buttonMensal.addEventListener('click', callbackClickMensal)
    }

    function clickTrimestral () {
      buttonTrimestral.addEventListener('click', callbackClickTrimestral)
    }

    function clickSemestral () {
      buttonSemestral.addEventListener('click', callbackClickSemestral)
    }

    function clickAnual () {
      buttonAnual.addEventListener('click', callbackClickAnual)
    }

    /* ---- Callbacks ---- */

    function callbackClickAssinar () {
      const url = buttonAssinar.getAttribute('data-pagina')
      window.location.assign(url)
    }

    // Planos

    function callbackClickConsultarWordpressBasico () {
      STATE.seletor = 'wordpressBasico'

      limpar()
      importarPlano(STATE.wordpressBasico)
      ativarBotaoPlano(buttonConsultarWordpressBasico)
      importarPrecos('mensal')
      ativarBotaoPreco(buttonMensal)
    }

    function callbackClickConsultarWordpressIntermediario () {
      STATE.seletor = 'wordpressIntermediario'

      limpar()
      importarPlano(STATE.wordpressIntermediario)
      ativarBotaoPlano(buttonConsultarWordpressIntermediario)
      importarPrecos('mensal')
      ativarBotaoPreco(buttonMensal)
    }

    function callbackClickConsultarWordpressAvancado () {
      STATE.seletor = 'wordpressAvancado'

      limpar()
      importarPlano(STATE.wordpressAvancado)
      ativarBotaoPlano(buttonConsultarWordpressAvancado)
      importarPrecos('mensal')
      ativarBotaoPreco(buttonMensal)
    }
    
    function callbackClickConsultarWordpressEspecial () {
      STATE.seletor = 'wordpressEspecial'

      limpar()
      importarPlano(STATE.wordpressEspecial)
      ativarBotaoPlano(buttonConsultarWordpressEspecial)
      importarPrecos('mensal')
      ativarBotaoPreco(buttonMensal)
    }

    // Precos

    function callbackClickMensal () {
      ativarBotaoPreco(buttonMensal)
      importarPrecos('mensal')
    }

    function callbackClickTrimestral () {
      ativarBotaoPreco(buttonTrimestral)
      importarPrecos('trimestral')
    }

    function callbackClickSemestral () {
      ativarBotaoPreco(buttonSemestral)
      importarPrecos('semestral')
    }

    function callbackClickAnual () {
      ativarBotaoPreco(buttonAnual)
      importarPrecos('anual')
    }

    /* ---- View ---- */

    function limpar () {
      pMemoria.innerText = ''
      pEspaco.innerText = ''
      pTransferencia.innerText = ''
      pContasEmail.innerText = ''
      pDominios.innerText = ''
      pPlugins.innerText = ''
      h2NomePlano.innerText = ''

      h4Real.innerText = ''
      h3Centavo.innerText = ''
      pDesconto.innerText = ''
      pValorTotal.innerText = ''

      buttonAssinar.removeAttribute('data-pagina')
      desativarBotoesPlanos()
      desativarBotoesPrecos()
      limparPotenciaProcessamento()
    }

    function importarPlano (dados) {
      pMemoria.innerText = dados.memoria
      pEspaco.innerText = dados.espaco
      pTransferencia.innerText = dados.transferencia
      pContasEmail.innerText = dados.contasEmail
      pDominios.innerText = dados.dominios
      pPlugins.innerText = dados.plugins
      h2NomePlano.innerText = dados.nome

    buttonAssinar.setAttribute('data-pagina', dados.linkBotao["mensal"].caminho)
    selecionarPotenciaProcessamento(dados.processamentoIndice)
  }
    function importarPrecos (periodo) {
      const preco = STATE[STATE.seletor].precos[periodo]
      h4Real.innerText = preco.real
      h3Centavo.innerText = `,${preco.centavo}`
      pDesconto.innerText = `${preco.desconto} de desconto`
      pValorTotal.innerText = `Valor total: R$ ${preco.valorTotal}`
      importarCaminhoBotao(periodo)
    }

  function importarCaminhoBotao(periodo) {
    const url = STATE[STATE.seletor].linkBotao[periodo]
    buttonAssinar.setAttribute('data-pagina', url.caminho)
  }
    // Botao do Plano

    function ativarBotaoPlano (button) {
      desativarBotoesPlanos()
      button.classList.add('ativo')
    }

    function desativarBotoesPlanos () {
      buttonConsultarWordpressBasico.classList.remove('ativo')
      buttonConsultarWordpressIntermediario.classList.remove('ativo')
      buttonConsultarWordpressAvancado.classList.remove('ativo')
      buttonConsultarWordpressEspecial.classList.remove('ativo')
    }

    // Botao do Preco

    function ativarBotaoPreco (button) {
      desativarBotoesPrecos()
      button.classList.add('ativo')
    }

    function desativarBotoesPrecos () {
      buttonMensal.classList.remove('ativo')
      buttonTrimestral.classList.remove('ativo')
      buttonSemestral.classList.remove('ativo')
      buttonAnual.classList.remove('ativo')
    }

    // Potencia de Processamento

    function selecionarPotenciaProcessamento (indice) {
      limparPotenciaProcessamento()
      const divs = divPotencia.querySelectorAll('div')
      if (indice > divs.length) return
      for (const numero in [...Array(indice)]) {
        divs[numero].classList.add('ativo')
      }
    }

    function limparPotenciaProcessamento () {
      const divs = divPotencia.querySelectorAll('div')
      for (const div of divs) {
        div.classList.remove('ativo')
      }
    }

    /* ---- Start ---- */
    
    habilitarEventos()
    callbackClickConsultarWordpressBasico()
}())