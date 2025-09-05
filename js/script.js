// Funções globais usadas pelos thumbnails
function trocarImagem(endereco){
  const img = document.querySelector(".grande");
  if (img) img.src = endereco;
}

function mudarCirculo(cor){
  const borda = document.querySelector(".borda");
  if (borda) borda.style.backgroundColor = cor;
}

function trocarFundo(cor) {
  // altera o fundo da página
  document.body.style.backgroundColor = cor;
}

// Modal
document.addEventListener('DOMContentLoaded', function () {
  const btn = document.getElementById('btn-popup');
  const modal = document.getElementById('modal');
  const fechar = document.querySelector('.fechar');

  if (btn && modal) {
    // abrir modal
    btn.addEventListener('click', () => {
      modal.classList.add('mostrar');
    });
  }

  if (fechar && modal) {
    // fechar modal pelo "X"
    fechar.addEventListener('click', () => {
      modal.classList.remove('mostrar');
    });
  }

  // fechar clicando fora da caixa
  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('mostrar');
    }
  });
});