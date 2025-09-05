let img= document.querySelector(".grande")
let borda= document.querySelector(".borda")
let fundo= document.querySelector(".fundo")

    function trocarImagem(endereco){
	img.src= endereco
	}

    function mudarCirculo(cor){
    borda.style.backgroundColor = cor;
    }

    function trocarFundo(cor) {
    fundo.style.Color = cor;
	}


ocument.addEventListener('DOMContentLoaded', function () {
  const btn = document.getElementById('btn-popup');
  if (btn) btn.addEventListener('click', abrirPopup);
});

document.addEventListener('DOMContentLoaded', function () {
  const btn = document.getElementById('btn-popup');
  const modal = document.getElementById('modal');
  const fechar = document.querySelector('.fechar');

  // abrir modal
  btn.addEventListener('click', () => {
    modal.classList.add('mostrar');
  });

  // fechar modal pelo "X"
  fechar.addEventListener('click', () => {
    modal.classList.remove('mostrar');
  });

  // fechar clicando fora da caixa
  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('mostrar');
    }
  });
});
