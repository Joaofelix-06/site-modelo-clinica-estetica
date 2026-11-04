export const $ = (sel, root = document) => root.querySelector(sel);
export const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
export const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export const whatsappLink = (number, text) =>
  `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
