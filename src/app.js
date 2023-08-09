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

// Sweet alert
import Swal from 'sweetalert2'

// Exibe cotação de moedas
function exibirCotacao(cotacao) {
  const cotacaoDiv = document.getElementById('cotacao');
  cotacaoDiv.innerHTML = '';

  const head = `
    <div class="title-secundary">
      <h2>Valores referentes a 1 ${cotacao.base}</h2>
    </div>
  `;

  const cotacoes = cotacao.rates;
  const cotacoesHtml = Object.entries(cotacoes).map(([moeda, valor]) => `
    <div class="wrap">
      <h5 class="card-title">${moeda}</h5>
      <p class="card-text">${valor.toFixed(3)}</p>
    </div>
  `).join('');

  cotacaoDiv.innerHTML = head + cotacoesHtml;
}

// Evento de submissão do formulário
const form = document.getElementById('conversaoForm');
form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const moeda = document.getElementById('moeda').value;
  if (moeda === 'number') {
    return Swal.fire({
      icon: 'error',
      title: 'Informe o tipo da moeda',
      text: error.message,
    });
  }
  const cotacao = await obterCotacao(moeda);
  exibirCotacao(cotacao);
});