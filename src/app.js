/* 
 *  Script cotação de moedas casa de câmbio
 *  
 *  Trabalho prático do módulo Front-end da Trybe
 *  
 *  Aluno: Rafael M. Guedes
 * 
 *  Turma: 34 
 *   
 */

import { obterCotacao } from './services/api.js';
import Icon from './assets/coin.png';

// Sweet alert
import Swal from 'sweetalert2';

// Title
const createTitle = (cotacao) => {
  const head = 
  `
    <div class="title-secundary">
      <h2 class="title-list">Valores referentes a 1 ${cotacao.base}</h2>
    </div>
  `;

  return head;
}

// Exibe cotação de moedas
function exibirCotacao(cotacao) {
  const cotacaoDiv = document.getElementById('cotacao');
  cotacaoDiv.innerHTML = '';

  const title = createTitle(cotacao);

  const cotacoes = cotacao.rates;
  const cotacoesArray = Object.entries(cotacoes);
  const cotacoesHtml = cotacoesArray.map(([moeda, valor]) => 
  `<div class="wrap">
    <ul class="list">
      <li class="link-icon"> <img src="${Icon}" /> </li>
      <li class="link-moeda">${moeda}</li>
      <li class="link-valor">${valor.toFixed(3)}</li>
    </ul>
  </div>
  `
  ).join('');

  cotacaoDiv.innerHTML = title + cotacoesHtml;
}

// Evento de submissão do formulário
const form = document.getElementById('conversaoForm');
form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const moeda = document.getElementById('moeda').value.toUpperCase();
  if (!moeda) {
    Swal.fire({
      icon: 'error',
      title: 'Informe o tipo da moeda',
      text: error.message,
    });
    return;
  }
  const cotacao = await obterCotacao(moeda);
  exibirCotacao(cotacao);
});
