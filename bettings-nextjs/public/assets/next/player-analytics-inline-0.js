
    Chart.defaults.color = '#64748b';
    Chart.defaults.font.family = 'Poppins';
    Chart.defaults.font.size = 8;

    // 1. RADAR CHART
    const radarCtx = document.getElementById('radarChart').getContext('2d');
    new Chart(radarCtx, {
      type: 'radar',
      data: {
        labels: ['Non-Pen Goals', 'npxG', 'xAG', 'Assists', 'SCA', 'PrgP', 'Take-Ons', 'Touches Pen'],
        datasets: [{
          label: 'Bukayo Saka',
          data: [88, 85, 94, 96, 92, 89, 81, 95],
          backgroundColor: 'rgba(34, 197, 94, 0.25)',
          borderColor: '#22c55e',
          borderWidth: 1.5,
          pointBackgroundColor: '#22c55e',
          pointRadius: 2
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          r: {
            grid: { color: '#132338' },
            angleLines: { color: '#132338' },
            pointLabels: { color: '#e2e8f0', font: { size: 7.5 } },
            ticks: { display: false },
            suggestedMin: 0,
            suggestedMax: 100
          }
        }
      }
    });

    // 2. FORM TREND (LINE CHART - EXACT SNAPSHOT CURVE)
    const trendCtx = document.getElementById('formTrendChart').getContext('2d');
    new Chart(trendCtx, {
      type: 'line',
      data: {
        labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
        datasets: [{
          label: 'Player Rating',
          data: [8.1, 7.5, 8.3, 7.5, 7.0, 7.5, 8.5, 7.1, 8.0, 7.8],
          borderColor: '#22c55e',
          borderWidth: 1.8,
          tension: 0.2,
          pointBackgroundColor: '#22c55e',
          pointRadius: 2
        }, {
          label: 'Team Avg',
          data: [6.2, 6.0, 6.3, 6.1, 5.8, 6.0, 6.2, 5.8, 6.1, 6.4],
          borderColor: '#64748b',
          borderWidth: 1,
          borderDash: [3, 3],
          pointRadius: 0
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          x: { grid: { display: false }, ticks: { color: '#64748b' } },
          y: { 
            grid: { color: '#132338' }, 
            min: 0, 
            max: 10,
            ticks: { stepSize: 2.5 }
          }
        }
      }
    });

    // 3. ROLE & PLAYING TIME EVOLUTION (BAR + LINE DUAL AXIS)
    const roleCtx = document.getElementById('roleEvolutionChart').getContext('2d');
    new Chart(roleCtx, {
      data: {
        labels: ['Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [
          {
            type: 'line',
            label: 'Primary Role',
            data: [500, 680, 580, 520, 690, 830, 800, 860, 830, 830],
            borderColor: '#ffffff',
            borderWidth: 2,
            pointBackgroundColor: '#ffffff',
            pointRadius: 3,
            yAxisID: 'y1'
          },
          {
            type: 'bar',
            label: 'Minutes',
            data: [680, 770, 750, 880, 730, 600, 430, 710, 620, 620],
            backgroundColor: '#1d4ed8',
            borderRadius: 2,
            barThickness: 12,
            yAxisID: 'y'
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          x: { grid: { display: false }, ticks: { color: '#64748b' } },
          y: {
            type: 'linear',
            position: 'left',
            grid: { color: '#132338' },
            min: 0,
            max: 1000,
            ticks: { stepSize: 250 }
          },
          y1: {
            type: 'category',
            position: 'right',
            labels: ['LW', 'RM', 'RWF', 'RW'],
            grid: { display: false },
            ticks: { color: '#64748b' }
          }
        }
      }
    });
  