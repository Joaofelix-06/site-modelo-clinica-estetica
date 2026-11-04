import { $, $$ } from '../utils/helpers.js';
import { categories, procedures } from '../data/content.js';

const card = (p) => `
  <li class="proc">
    <div class="proc__img"><img src="${p.img}" alt="${p.title}" style="object-position:${p.pos}" width="736" height="920" loading="lazy"></div>
    <h3>${p.title}</h3>
    <p>${p.text}</p>
    <a class="link-arrow" href="#contato" data-procedure="${p.title}">Saiba mais</a>
  </li>`;

export function initSpecialties() {
  const list = $('#tablist');
  const panel = $('#tabpanel');
  list.innerHTML = categories
    .map((c) => `<button role="tab" id="tab-${c.id}" aria-controls="tabpanel" aria-selected="false" tabindex="-1" data-id="${c.id}">${c.label}</button>`)
    .join('');
  const tabs = $$('[role=tab]', list);

  const select = (id, focus = false) => {
    tabs.forEach((t) => {
      const on = t.dataset.id === id;
      t.setAttribute('aria-selected', on);
      t.tabIndex = on ? 0 : -1;
      if (on && focus) t.focus();
    });
    panel.setAttribute('aria-labelledby', `tab-${id}`);
    panel.classList.add('is-changing');
    setTimeout(() => {
      panel.innerHTML = procedures[id].map(card).join('');
      panel.classList.remove('is-changing');
    }, panel.dataset.ready ? 180 : 0);
    panel.dataset.ready = '1';
  };

  tabs.forEach((t, i) => {
    t.addEventListener('click', () => select(t.dataset.id));
    t.addEventListener('keydown', (e) => {
      const k = { ArrowRight: 1, ArrowLeft: -1 }[e.key];
      if (k) { e.preventDefault(); select(tabs[(i + k + tabs.length) % tabs.length].dataset.id, true); }
      if (e.key === 'Home') { e.preventDefault(); select(tabs[0].dataset.id, true); }
      if (e.key === 'End') { e.preventDefault(); select(tabs.at(-1).dataset.id, true); }
    });
  });

  // "Saiba mais" pré-seleciona o procedimento no formulário
  panel.addEventListener('click', (e) => {
    const a = e.target.closest('[data-procedure]');
    if (a) $('#f-proc').value = a.dataset.procedure;
  });

  select(categories[0].id);
}
