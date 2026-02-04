(function() {
  const sectionVelocidade = document.querySelector("section.velocidade");
  const video = sectionVelocidade.querySelector("video");

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
          video.play();
          observer.disconnect();
        }
      });
    });

    const sectionAbove = document.querySelector("section.velocidade").previousElementSibling;

    if (sectionAbove) {
      observer.observe(sectionAbove);
    }
  }
})();