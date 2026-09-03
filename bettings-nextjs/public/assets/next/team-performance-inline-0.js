
    // Sidebar Toggle
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.getElementById('mainContent');
    const sidebarToggle = document.getElementById('sidebarToggle');

    sidebarToggle.addEventListener('click', () => {
      sidebar.classList.toggle('collapsed');
      mainContent.classList.toggle('expanded');
    });

    // Trend Chart Setup
    const ctx = document.getElementById('trendChart').getContext('2d');
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Match -19', '-15', '-10', '-5', 'Last'],
        datasets: [
          {
            label: 'Arsenal xG',
            data: [1.8, 2.1, 1.9, 2.2, 2.3],
            borderColor: '#ff4d4d',
            borderWidth: 1.5,
            pointRadius: 2,
            tension: 0.2
          },
          {
            label: 'Arsenal xGA',
            data: [1.2, 1.4, 1.1, 1.3, 1.0],
            borderColor: '#ff4d4d',
            borderWidth: 1.5,
            borderDash: [3, 3],
            pointRadius: 0,
            tension: 0.2
          },
          {
            label: 'Chelsea xG',
            data: [0.9, 1.2, 1.1, 1.4, 1.5],
            borderColor: '#29b6f6',
            borderWidth: 1.5,
            pointRadius: 2,
            tension: 0.2
          },
          {
            label: 'Chelsea xGA',
            data: [1.5, 1.6, 1.4, 1.3, 1.2],
            borderColor: '#29b6f6',
            borderWidth: 1.5,
            borderDash: [3, 3],
            pointRadius: 0,
            tension: 0.2
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          x: {
            grid: { color: '#141e33' },
            ticks: { color: '#6c7d93', font: { size: 8.5 } }
          },
          y: {
            min: 0.0,
            max: 2.5,
            grid: { color: '#141e33' },
            ticks: { color: '#6c7d93', font: { size: 8.5 } }
          }
        }
      }
    });
  