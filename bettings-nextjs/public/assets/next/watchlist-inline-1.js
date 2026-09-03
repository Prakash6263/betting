
    function switchMainTab(tabType, btnElement) {
      // 1. Remove active class from all top tab buttons
      const buttons = document.querySelectorAll('#mainTabGroup .wl-top-tab-btn');
      buttons.forEach(btn => btn.classList.remove('active'));

      // 2. Add active class to clicked button
      btnElement.classList.add('active');

      // 3. Hide all tab content wrappers
      const contents = document.querySelectorAll('.main-tab-content');
      contents.forEach(content => content.classList.add('d-none'));

      // 4. Show selected tab content wrapper
      if (tabType === 'matches') {
        document.getElementById('tabContentMatches').classList.remove('d-none');
      } else if (tabType === 'teams') {
        document.getElementById('tabContentTeams').classList.remove('d-none');
      } else if (tabType === 'players') {
        document.getElementById('tabContentPlayers').classList.remove('d-none');
      }
    }
  