import { $, $$ } from '../utils/helpers.js';
import { results } from '../data/content.js';

const card = (r, i) => `
  <li class="slide">
    <figure class="compare" style="--pos:50%">
      <img class="compare__after" src="${r.after}" alt="Depois — ${r.caption}" width="736" height="1104" loading="lazy" draggable="false">
      <div class="compare__before">
        <img src="${r.before || r.after}" alt="Antes — ${r.caption}" width="736" height="1104" loading="lazy" draggable="false" ${r.before ? '' : 'class="is-simulated"'}>
      </div>
      <span class="compare__tag compare__tag--l">Antes</span>
      <span class="compare__tag compare__tag--r">Depois</span>
      <span class="compare__handle" aria-hidden="true"><i></i></span>
      <input class="compare__range" type="range" min="0" max="100" value="50" aria-label="Comparar antes e depois — caso ${i + 1}">
    </figure>
    <p class="caption">${r.caption}</p>
  </li>`;

export function initResults() {
  const track = $('#results-track');
  track.innerHTML = results.map(card).join('');

  $$('.compare', track).forEach((fig) => {
    const range = $('.compare__range', fig);
    range.addEventListener('input', () => fig.style.setProperty('--pos', `${range.value}%`));
  });

  const step = () => (track.querySelector('.slide')?.getBoundingClientRect().width || 300) + 20;
  $('#results-prev').addEventListener('click', () => track.scrollBy({ left: -step(), behavior: 'smooth' }));
  $('#results-next').addEventListener('click', () => track.scrollBy({ left: step(), behavior: 'smooth' }));
}
