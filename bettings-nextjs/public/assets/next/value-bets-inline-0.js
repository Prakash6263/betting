
    const ctx = document.getElementById('lifecycleChart').getContext('2d');
    new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Pending', 'Won', 'Lost', 'Void'],
        datasets: [{
          data: [7, 7, 5, 1],
          backgroundColor: ['#ffb300', '#00e676', '#ff5252', '#8493a8'],
          borderWidth: 0,
          hoverOffset: 2
        }]
      },
      options: {
        cutout: '75%',
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
          legend: { display: false },
          tooltip: { enabled: true }
        }
      }
    });
  