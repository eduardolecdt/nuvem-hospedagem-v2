(function() {

  const frases = [
    ".com",
    ".com.br",
    ".net",
    ".io",
    ".tech",
    ".top",
    ".net.br"
  ];
  
  let indiceFrase = 0;
  let indiceLetra = 0;
  let velocidadeDigitacao = 50; 
  
  function escreverFrase() {
    const fraseAtual = frases[indiceFrase];
    const elementoTexto = document.getElementById("textoDigitando");
    if (indiceLetra < fraseAtual.length) {
      elementoTexto.innerHTML += fraseAtual.charAt(indiceLetra);
      indiceLetra++;
      setTimeout(escreverFrase, velocidadeDigitacao);
    } else {
      setTimeout(apagarFrase, 1000); 
    }
  }
  
  function apagarFrase() {
    const elementoTexto = document.getElementById("textoDigitando");
    if (indiceLetra >= 0) {
      const textoAtual = elementoTexto.innerHTML;
      elementoTexto.innerHTML = textoAtual.substring(0, indiceLetra);
      indiceLetra--;
      setTimeout(apagarFrase, velocidadeDigitacao);
    } else {
      indiceFrase = (indiceFrase + 1) % frases.length;
      setTimeout(escreverFrase, 1000); 
    }
  }
  
  escreverFrase();

}())