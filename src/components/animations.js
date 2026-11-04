import { $$, prefersReducedMotion } from '../utils/helpers.js';

// Revelação suave ao entrar na tela (desligada com prefers-reduced-motion).
export function initReveal() {
  const items = $$('[data-reveal]');
  if (prefersReducedMotion() || !('IntersectionObserver' in window)) return;
  const io = new IntersectionObserver(
    (entries) => entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add('is-visible'); io.unobserve(e.target); }
    }),
    { threshold: 0.12, rootMargin: '0px 0px -6% 0px' }
  );
  items.forEach((el) => { el.classList.add('reveal'); io.observe(el); });
}
