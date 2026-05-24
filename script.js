const botao = document.querySelector('#btn-alerta');

if (botao) {
  botao.addEventListener('click', () => {
    alert('Funciona!');
  });
}
