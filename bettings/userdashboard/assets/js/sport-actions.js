(() => {
  const file = location.pathname.split('/').pop().replace('.html', '');
  const sport = file === 'ice-hockey' ? 'hockey' : file === 'other-sports' ? 'other' : file;
  document.querySelectorAll('.fixture-more').forEach((button, index) => {
    const row = button.closest('.fixture-row');
    const teams = [...row.querySelectorAll('.fixture-teams-inline span')].map((node) => node.textContent.trim());
    const sportRoute = { hockey: 'ice-hockey', other: 'other-sports' }[sport] || sport;
    const target = sport === 'football' ? 'myodin-analysis.html' : `${sportRoute}-myodin-analysis.html`;
    const params = sport === 'football' ? '' : `&home=${encodeURIComponent(teams[0] || 'Home')}&away=${encodeURIComponent(teams[1] || 'Away')}`;
    const drop = document.createElement('div');
    drop.className = 'dropdown sport-action-dropdown';
    drop.innerHTML = `<a class="btn btn-sm btn-success fixture-details-btn" href="${target}${sport === 'football' ? '' : params}">Details</a><button class="fixture-more" type="button" data-bs-toggle="dropdown" aria-expanded="false" aria-label="Match actions"><i class="fa-solid fa-ellipsis"></i></button><ul class="dropdown-menu dropdown-menu-end shadow"><li><a class="dropdown-item" href="${target}${sport === 'football' ? '' : params}"><i class="fa-solid fa-chart-column text-success me-2"></i>Match details</a></li><li><a class="dropdown-item" href="${target}${sport === 'football' ? '#market' : params + '#analysis'}"><i class="fa-solid fa-chart-line text-primary me-2"></i>Myodin analysis</a></li><li><a class="dropdown-item" href="#"><i class="fa-regular fa-star text-warning me-2"></i>Add to watchlist</a></li></ul>`;
    button.replaceWith(drop);
    drop.querySelector('a[href="#"]')?.addEventListener('click', (event) => { event.preventDefault(); event.currentTarget.innerHTML = '<i class="fa-solid fa-check text-success me-2"></i>Added to watchlist'; });
  });
})();
