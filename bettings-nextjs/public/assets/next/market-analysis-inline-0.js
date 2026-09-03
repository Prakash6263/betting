
    const ctx = document.getElementById('oddsChart').getContext('2d');
    
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['18:00', '21:00', '00:00\nMay 10', '03:00', '06:00', '09:00\nMay 11', '12:00', '15:00', '18:00'],
        datasets: [
          {
            label: 'Chelsea (2)',
            data: [3.60, 3.55, 3.50, 3.50, 3.55, 3.45, 3.40, 3.35, 3.29],
            borderColor: '#29b6f6',
            borderWidth: 2,
            pointRadius: 0,
            tension: 0.1
          },
          {
            label: 'Draw (X)',
            data: [3.10, 3.12, 3.10, 3.08, 3.10, 3.15, 3.18, 3.20, 3.37],
            borderColor: '#a0aec0',
            borderWidth: 2,
            pointRadius: 0,
            tension: 0.1
          },
          {
            label: 'Arsenal (1)',
            data: [2.50, 2.65, 2.60, 2.50, 2.45, 2.50, 2.50, 2.15, 2.08],
            borderColor: '#ff4d4d',
            borderWidth: 2,
            pointRadius: 0,
            tension: 0.1
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false }
        },
        scales: {
          x: {
            grid: { color: '#16233b' },
            ticks: { color: '#7e8f9f', font: { size: 10 } }
          },
          y: {
            min: 1.50,
            max: 4.00,
            grid: { color: '#16233b' },
            ticks: { color: '#7e8f9f', font: { size: 10 } }
          }
        }
      }
    });
  