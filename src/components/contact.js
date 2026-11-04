import { $ } from '../utils/helpers.js';
import { whatsappLink } from '../utils/helpers.js';
import { clinic, categories, procedures, reviews } from '../data/content.js';

export function initContact() {
  // Dados de contato vindos de content.js
  document.querySelectorAll('[data-clinic]').forEach((el) => { el.textContent = clinic[el.dataset.clinic]; });
  document.querySelectorAll('[data-wa]').forEach((a) => { a.href = whatsappLink(clinic.whatsapp, clinic.whatsappGreeting); });
  document.querySelectorAll('[data-ig]').forEach((a) => { a.href = clinic.instagramUrl; });
  document.querySelectorAll('[data-tel]').forEach((a) => { a.href = `tel:+${clinic.whatsapp}`; });
  document.querySelectorAll('[data-privacy]').forEach((a) => { a.href = clinic.privacyUrl; });
  $('#year').textContent = new Date().getFullYear();

  // Opções do select
  const select = $('#f-proc');
  select.insertAdjacentHTML('beforeend', categories.map((c) =>
    `<optgroup label="${c.label}">${procedures[c.id].map((p) => `<option>${p.title}</option>`).join('')}</optgroup>`).join('')
    + '<option>Ainda não sei — quero uma avaliação</option>');

  // Avaliações (estrutura pronta, vazia até haver depoimentos autorizados)
  const rv = $('#reviews');
  rv.innerHTML = reviews.length
    ? reviews.map((r) => `<blockquote class="review"><p>${r.text}</p><footer>${r.author}</footer></blockquote>`).join('')
    : '<p class="review review--empty">Espaço reservado para avaliações reais e autorizadas das clientes.</p>';

  // Formulário
  const form = $('#contact-form');
  const status = $('#form-status');
  const rules = {
    name: (v) => (v.trim().length >= 3 ? '' : 'Informe seu nome completo.'),
    phone: (v) => (v.replace(/\D/g, '').length >= 10 ? '' : 'Informe um telefone com DDD.'),
    procedure: (v) => (v ? '' : 'Escolha um procedimento de interesse.'),
    message: (v) => (v.trim().length <= 500 ? '' : 'Use até 500 caracteres.'),
  };
  const check = (field) => {
    const err = rules[field.name](field.value);
    field.setAttribute('aria-invalid', err ? 'true' : 'false');
    $(`#err-${field.name}`).textContent = err;
    return !err;
  };
  [...form.elements].filter((f) => rules[f.name]).forEach((f) => {
    f.addEventListener('blur', () => check(f));
    f.addEventListener('input', () => f.getAttribute('aria-invalid') === 'true' && check(f));
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const fields = [...form.elements].filter((f) => rules[f.name]);
    const results = fields.map(check);
    if (results.includes(false)) {
      status.textContent = 'Revise os campos destacados.';
      fields[results.indexOf(false)].focus();
      return;
    }
    const d = Object.fromEntries(new FormData(form));
    const text = `${clinic.whatsappGreeting}\n\nNome: ${d.name}\nTelefone: ${d.phone}\nInteresse: ${d.procedure}${d.message ? `\nMensagem: ${d.message}` : ''}`;
    const win = window.open(whatsappLink(clinic.whatsapp, text), '_blank', 'noopener');
    // Nenhum dado é enviado por nós: só informamos o que de fato aconteceu.
    status.textContent = win
      ? 'Abrimos o WhatsApp com sua mensagem. Toque em enviar por lá para concluir.'
      : 'Não foi possível abrir o WhatsApp. Use o botão "Agendar pelo WhatsApp".';
  });
}
