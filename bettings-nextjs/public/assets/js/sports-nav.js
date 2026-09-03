(() => {
  'use strict';

  const sports = [
    ['football', 'football.html', 'fa-futbol', 'Football', '1,146'],
    ['tennis', 'tennis.html', 'fa-table-tennis-paddle-ball', 'Tennis', '366'],
    ['basketball', 'basketball.html', 'fa-basketball', 'Basketball', '189'],
    ['hockey', 'ice-hockey.html', 'fa-hockey-puck', 'Ice Hockey', '92'],
    ['handball', 'handball.html', 'fa-hand-holding', 'Handball', '76'],
    ['volleyball', 'volleyball.html', 'fa-volleyball', 'Volleyball', '68'],
    ['baseball', 'baseball.html', 'fa-baseball', 'Baseball', '42'],
    ['esports', 'esports.html', 'fa-gamepad', 'eSports', '35'],
    ['other', 'other-sports.html', 'fa-medal', 'Other Sports', '24']
  ];

  document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.getElementById('sidebar');
    if (!sidebar || sidebar.querySelector('.sports-navigation')) return;
    const currentSport = document.body.dataset.sport || new URLSearchParams(window.location.search).get('sport');
    const nav = document.createElement('section');
    nav.className = 'sports-navigation';
    nav.innerHTML = `
      <div class="sidebar-heading sports-heading"><i class="fa-solid fa-trophy me-2"></i>SPORTS</div>
      <div class="nav-menu sports-menu">
        ${sports.map(([id, href, icon, name, count]) => `
          <a href="${href}" class="nav-link sport-link ${currentSport === id ? 'active' : ''}">
            <i class="fa-solid ${icon}"></i><span class="sidebar-text">${name}</span><span class="sport-count sidebar-text">${count}</span>
          </a>`).join('')}
      </div>`;
    const preferences = [...sidebar.querySelectorAll('.sidebar-heading')]
      .find((heading) => heading.textContent.trim() === 'PREFERENCES');
    if (preferences) preferences.before(nav);
    else sidebar.append(nav);
  });
})();
