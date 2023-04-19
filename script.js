// Obter o botão e o campo de entrada
const botao = document.querySelector('input[type="button"]');
const expressao = document.querySelector('#expressao');

// Adicionar um ouvinte de evento de clique ao botão
botao.addEventListener('click', function() {
  // Obter a expressão do campo de entrada
  const texto = expressao.value;

  // Verificar o balanceamento dos parênteses
  if (verificarBalanceamento(texto)) {
    alert('A expressão está balanceada!');
  } else {
    alert('A expressão não está balanceada!');
  }
});

// Função para verificar o balanceamento dos parênteses
function verificarBalanceamento(texto) {
  const pilha = [];
  const abertura = ['(', '[', '{'];
  const fechamento = [')', ']', '}'];

  for (let i = 0; i < texto.length; i++) {
    const char = texto.charAt(i);

    if (abertura.includes(char)) {
      pilha.push(char);
    } else if (fechamento.includes(char)) {
      const indice = fechamento.indexOf(char);

      if (pilha.length === 0 || abertura[indice] !== pilha.pop()) {
        return false;
      }
    }
  }

  return pilha.length === 0;
}
