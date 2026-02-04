// EMAIL PROFISSIONAL
(function () {
  /* ---- State ---- */

  const STATE = {
    seletor: '',
    email5gb: {
      nome: '10Gb',
      contas: '5',
      precos: {
        mensal: { real: '24', centavo: '90', desconto: '0%',  valorTotal: '24,90' },
        trimestral: { real: '23', centavo: '65', desconto: '5%', valorTotal: '70,96' },
        semestral: { real: '22', centavo: '65', desconto: '8%', valorTotal: '135,95' },
        anual: { real: '20', centavo: '91', desconto: '16%', valorTotal: '250,99' },
      },
      linkBotao: {
        mensal: { caminho: 'https://cliente.nuvemhospedagem.com.br/cart.php?a=add&pid=56&billingcycle=monthly' },
        trimestral: { caminho: 'https://cliente.nuvemhospedagem.com.br/cart.php?a=add&pid=56&billingcycle=quarterly' },
        semestral: { caminho: 'https://cliente.nuvemhospedagem.com.br/cart.php?a=add&pid=56&billingcycle=semiannually' },
        anual: { caminho: 'https://cliente.nuvemhospedagem.com.br/cart.php?a=add&pid=56&billingcycle=annually' },
      }
    },
    email10gb: {
      nome: '20Gb',
      contas: '10',
      precos: {
        mensal: { real: '49', centavo: '90', desconto: '0%', valorTotal: '49, 90' },
        trimestral: { real: '47', centavo: '40', desconto: '5%', valorTotal: '142,21' },
        semestral: { real: '36', centavo: '70', desconto: '8%', valorTotal: '272,00' },
        anual: { real: '33', centavo: '90', desconto: '16%', valorTotal: '498,85' }
      },
      linkBotao: {
        mensal: { caminho: 'https://cliente.nuvemhospedagem.com.br/cart.php?a=add&pid=57&billingcycle=monthly' },
        trimestral: { caminho: 'https://cliente.nuvemhospedagem.com.br/cart.php?a=add&pid=57&billingcycle=quarterly' },
        semestral: { caminho: 'https://cliente.nuvemhospedagem.com.br/cart.php?a=add&pid=57&billingcycle=semiannually' },
        anual: { caminho: 'https://cliente.nuvemhospedagem.com.br/cart.php?a=add&pid=57&billingcycle=annually' },
      }
    },
    email100gb: {
      nome: '50Gb',
      contas: '25',
      precos: {
          mensal: { real: '79', centavo: '90', desconto: '0%', valorTotal: '79, 90' },
          trimestral: { real: '75', centavo: '90', desconto: '5%', valorTotal: '227,70' },
          semestral: { real: '72', centavo: '70', desconto: '8%', valorTotal: '436,25' },
          anual: { real: '67', centavo: '11', desconto: '16%', valorTotal: '805,39' }
      },
      linkBotao: {
          mensal: { caminho: 'https://cliente.nuvemhospedagem.com.br/cart.php?a=add&pid=58&billingcycle=monthly' },
          trimestral: { caminho: 'https://cliente.nuvemhospedagem.com.br/cart.php?a=add&pid=58&billingcycle=quarterly' },
          semestral: { caminho: 'https://cliente.nuvemhospedagem.com.br/cart.php?a=add&pid=58&billingcycle=semiannually' },
          anual: { caminho: 'https://cliente.nuvemhospedagem.com.br/cart.php?a=add&pid=58&billingcycle=annually' },
      }
    },
  }

  /* ---- Elements ---- */

  const sectionPlanos = document.querySelector('section[name="planos"]')
  
  const buttonConsultarEmail5gb = sectionPlanos.querySelector('button[name="consultarEmail5gb"]')
  const buttonConsultarEmail10gb = sectionPlanos.querySelector('button[name="consultarEmail10gb"]')
  const buttonConsultarEmail100gb = sectionPlanos.querySelector('button[name="consultarEmail100gb"]')
  const buttonAssinar = sectionPlanos.querySelector('button[name="assinar"]')
  const buttonMensal = sectionPlanos.querySelector('button[name="mensal"]')
  const buttonTrimestral = sectionPlanos.querySelector('button[name="trimestral"]')
  const buttonSemestral = sectionPlanos.querySelector('button[name="semestral"]')
  const buttonAnual = sectionPlanos.querySelector('button[name="anual"]')

  const pContas = sectionPlanos.querySelector('p[name="contas"]')
  const h2NomePlano = sectionPlanos.querySelector('h2[name="nomePlano"]')
  
  const h4Real = sectionPlanos.querySelector('h4[name="real"]')
  const h3Centavo = sectionPlanos.querySelector('h3[name="centavo"]')
  const pDesconto = sectionPlanos.querySelector('p[name="desconto"]')
  const pValorTotal = sectionPlanos.querySelector('p[name="valorTotal"]')

  /* ---- Methods ---- */

  function habilitarEventos () {
    clickAssinar()
    
    clickConsultarEmail5gb()
    clickConsultarEmail10gb()
    clickConsultarEmail100gb()
    
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

  function clickConsultarEmail5gb () {
    buttonConsultarEmail5gb.addEventListener('click', callbackClickConsultarEmail5gb)
  }

  function clickConsultarEmail10gb () {
    buttonConsultarEmail10gb.addEventListener('click', callbackClickConsultarEmail10gb)
  }

  function clickConsultarEmail100gb () {
    buttonConsultarEmail100gb.addEventListener('click', callbackClickConsultarEmail100gb)
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

  function callbackClickConsultarEmail5gb () {
    STATE.seletor = 'email5gb'

    limpar()
    importarPlano(STATE.email5gb)
    ativarBotaoPlano(buttonConsultarEmail5gb)
    importarPrecos('mensal')
    ativarBotaoPreco(buttonMensal)
  }

  function callbackClickConsultarEmail10gb () {
    STATE.seletor = 'email10gb'

    limpar()
    importarPlano(STATE.email10gb)
    ativarBotaoPlano(buttonConsultarEmail10gb)
    importarPrecos('mensal')
    ativarBotaoPreco(buttonMensal)
  }

  function callbackClickConsultarEmail100gb () {
    STATE.seletor = 'email100gb'

    limpar()
    importarPlano(STATE.email100gb)
    ativarBotaoPlano(buttonConsultarEmail100gb)
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
    pContas.innerText = ''
    h2NomePlano.innerText = ''

    h4Real.innerText = ''
    h3Centavo.innerText = ''
    pDesconto.innerText = ''
    pValorTotal.innerText = ''

    buttonAssinar.removeAttribute('data-pagina')
    desativarBotoesPlanos()
    desativarBotoesPrecos()
  }

  function importarPlano (dados) {
    pContas.innerText = dados.contas
    h2NomePlano.innerText = dados.nome

    buttonAssinar.setAttribute('data-pagina', dados.linkBotao)
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
    buttonConsultarEmail5gb.classList.remove('ativo')
    buttonConsultarEmail10gb.classList.remove('ativo')
    buttonConsultarEmail100gb.classList.remove('ativo')
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

  /* ---- Start ---- */
  
  habilitarEventos()
  callbackClickConsultarEmail5gb()
}())