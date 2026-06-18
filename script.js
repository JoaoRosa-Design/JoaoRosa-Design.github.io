function toggleLang() {
  const html = document.documentElement;
  const next = html.lang === 'en' ? 'pt' : 'en';
  html.lang = next;
  localStorage.setItem('lang', next);
  applyLang(next);
}

function applyLang(lang) {
  document.querySelectorAll('[data-en]').forEach(el => {
    el.innerHTML = el.dataset[lang] ?? el.dataset.en;
  });
}

// Init on load
(function () {
  const saved = localStorage.getItem('lang') || 'en';
  document.documentElement.lang = saved;
  applyLang(saved);
})();
