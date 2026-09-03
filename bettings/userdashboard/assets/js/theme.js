(() => {
  'use strict';

  const storageKey = 'football-intelligence-theme';

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-bs-theme', theme);
    document.documentElement.style.colorScheme = theme;
    localStorage.setItem(storageKey, theme);

    const button = document.getElementById('themeToggleBtn');
    if (!button) return;

    const icon = button.querySelector('i');
    const isLight = theme === 'light';
    button.setAttribute('aria-label', isLight ? 'Activer le thème sombre' : 'Activer le thème clair');
    button.setAttribute('title', isLight ? 'Activer le thème sombre' : 'Activer le thème clair');
    if (icon) icon.className = `fa-solid ${isLight ? 'fa-moon' : 'fa-sun'}`;
  }

  function addToggle() {
    if (document.getElementById('themeToggleBtn')) return;

    const languageButton = document.getElementById('langDropdownBtn');
    const anchor = languageButton?.closest('.dropdown');
    if (!anchor) return;

    const button = document.createElement('button');
    button.id = 'themeToggleBtn';
    button.type = 'button';
    button.className = 'theme-toggle-btn theme-switcher';
    button.innerHTML = '<i class="fa-solid fa-sun"></i><span class="visually-hidden">Changer le thème</span>';
    anchor.insertAdjacentElement('afterend', button);
    button.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-bs-theme') || 'dark';
      applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    addToggle();
    applyTheme(localStorage.getItem(storageKey) || 'dark');

    // Sports pages keep their fixture markup in HTML; this only provides tab filtering.
    const board = document.querySelector('.fixture-board');
    const tabs = [...document.querySelectorAll('.fixture-tabs button')];
    if (!board || !tabs.length) return;

    const rows = [...board.querySelectorAll('.fixture-row')];
    rows.forEach((row) => {
      const time = row.querySelector('.fixture-time')?.textContent || '';
      row.dataset.status = time.includes('FT') ? 'finished' : time.includes('Tomorrow') ? 'upcoming' : row.querySelector('.is-live') ? 'live' : 'upcoming';
    });

    // Add additional static-style fixture rows for a fuller All view.
    const lastGroup = board.querySelector('.fixture-group:last-child');
    rows.slice(0, 2).forEach((source, index) => {
      const clone = source.cloneNode(true);
      const time = clone.querySelector('.fixture-time');
      const model = clone.querySelector('.fixture-model b');
      clone.dataset.status = index === 0 ? 'upcoming' : 'finished';
      time?.classList.remove('is-live');
      if (time) time.textContent = index === 0 ? `Tomorrow ${index ? '20:30' : '18:00'}` : 'FT';
      if (model) model.textContent = index === 0 ? '72%' : '69%';
      const versus = clone.querySelector('.fixture-versus');
      if (index === 1 && versus) versus.textContent = '2 - 1';
      lastGroup?.append(clone);
    });

    const filterRows = (filter) => {
      board.querySelectorAll('.fixture-row').forEach((row) => { row.hidden = filter !== 'all' && row.dataset.status !== filter; });
      board.querySelectorAll('.fixture-group').forEach((group) => { group.hidden = ![...group.querySelectorAll('.fixture-row')].some((row) => !row.hidden); });
    };
    tabs.forEach((tab, index) => tab.addEventListener('click', () => {
      tabs.forEach((item) => item.classList.remove('active'));
      tab.classList.add('active');
      filterRows(['all', 'live', 'upcoming', 'finished'][index]);
    }));
  });
})();
