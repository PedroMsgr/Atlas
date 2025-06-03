// public/scripts/landing.js

(function() {
  // 1) MODO OSCURO
  function applyTheme(theme) {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }
  const saved = localStorage.getItem('theme') || 'light';
  applyTheme(saved);

  document.querySelectorAll('[data-toggle-theme]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const next = document.documentElement.classList.contains('dark') ? 'light' : 'dark';
      localStorage.setItem('theme', next);
      applyTheme(next);
    });
  });

  // 2) MENÚ HAMBURGUESA
  const btnMenu = document.querySelector('[data-toggle-menu]');
  const menu = document.querySelector('[data-menu-content]');
  if (btnMenu && menu) {
    btnMenu.addEventListener('click', () => {
      menu.classList.toggle('hidden');
    });
    document.addEventListener('click', (e) => {
      if (!menu.contains(e.target) && !btnMenu.contains(e.target)) {
        menu.classList.add('hidden');
      }
    });
  }

  // 3) PESTAÑAS “Proceso Legal”
  const tabs = document.querySelectorAll('[data-tab]');
  const panels = document.querySelectorAll('.tab-content');
  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const target = tab.getAttribute('data-tab');
      tabs.forEach((t) => t.classList.remove('text-blue-700','dark:text-blue-400'));
      tab.classList.add('text-blue-700','dark:text-blue-400');
      panels.forEach((p) => p.classList.add('hidden'));
      const panel = document.getElementById(target);
      if (panel) panel.classList.remove('hidden');
    });
  });
})();
