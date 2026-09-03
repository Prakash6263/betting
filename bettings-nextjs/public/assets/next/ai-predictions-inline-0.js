
    const ctx = document.getElementById('calibrationChart').getContext('2d');

    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['0%', '20%', '40%', '60%', '80%', '100%'],
        datasets: [
          {
            label: 'Perfect calibration',
            data: [0, 20, 40, 60, 80, 100],
            borderColor: '#8493a8',
            borderDash: [4, 4],
            borderWidth: 1.5,
            pointRadius: 0,
            fill: false
          },
          {
            label: 'Model (All)',
            data: [2, 15, 28, 42, 65, 82, 98],
            borderColor: '#00e676',
            borderWidth: 1.5,
            pointRadius: 0,
            tension: 0.3,
            fill: false
          },
          {
            label: 'Model (Last 30 days)',
            data: [0, 10, 24, 45, 58, 79, 95],
            borderColor: '#29b6f6',
            borderWidth: 1.5,
            pointRadius: 0,
            tension: 0.3,
            fill: false
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: true,
            position: 'top',
            align: 'end',
            labels: {
              color: '#8493a8',
              boxWidth: 12,
              font: { size: 10, family: 'Poppins' }
            }
          },
          tooltip: { enabled: true }
        },
        scales: {
          x: {
            title: {
              display: true,
              text: 'Predicted probability (%)',
              color: '#8493a8',
              font: { size: 10, family: 'Poppins' }
            },
            ticks: { color: '#8493a8', font: { size: 9, family: 'Poppins' } },
            grid: { color: 'rgba(24, 37, 61, 0.5)' }
          },
          y: {
            title: {
              display: true,
              text: 'Observed frequency',
              color: '#8493a8',
              font: { size: 10, family: 'Poppins' }
            },
            ticks: {
              color: '#8493a8',
              font: { size: 9, family: 'Poppins' },
              callback: function(value) { return value + '%'; }
            },
            grid: { color: 'rgba(24, 37, 61, 0.5)' },
            min: 0,
            max: 100
          }
        }
      }
    });
  