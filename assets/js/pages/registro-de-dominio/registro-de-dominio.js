// REGISTRO DE DOMÍNIO - CORRIGIDO
(function (){
  /* ---- Constants ---- */
  const URL = 'https://cliente.nuvemhospedagem.com.br/cart.php'
  const PARAMETROS = '?a=add&domain=register&query='

  /* ---- Elements (Seletores ajustados para o seu HTML) ---- */
  // Seleciona a seção pela classe usada no HTML
  const sectionDominio = document.querySelector('.apresentacao.dois');
  
  // Seleciona o input pela classe "inputDominio"
  const inputDominio = sectionDominio.querySelector('.inputDominio');
  
  // Seleciona o botão pela classe "confirmarDominio"
  const buttonAcessar = sectionDominio.querySelector('.confirmarDominio');

  /* ---- Events ---- */
  if(buttonAcessar && inputDominio) {
      buttonAcessar.addEventListener('click', () => {
        const dominio = inputDominio.value;
        // Evita redirecionar se estiver vazio
        if(!dominio) { 
            inputDominio.focus(); 
            return; 
        }
        const url = URL + PARAMETROS + dominio;
        navegar(url);
      });
      
      // Opcional: Permitir apertar ENTER para enviar
      inputDominio.addEventListener('keypress', (e) => {
          if (e.key === 'Enter') {
            buttonAcessar.click();
          }
      });
  } else {
      console.warn("Elementos do formulário de domínio não encontrados.");
  }

  /* ---- Aux Functions ---- */
  function navegar (url) {
    const a = document.createElement('a')
    a.href = url
    a.target = '_blank'
    a.click()
  }
  
}());