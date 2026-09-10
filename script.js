const menu = document.querySelector('.menu');
menu?.addEventListener('click', () => {
  const expanded = menu.getAttribute('aria-expanded') === 'true';
  menu.setAttribute('aria-expanded', String(!expanded));
  document.querySelector('.nav').classList.toggle('is-open', !expanded);
});
