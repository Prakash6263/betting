
    Chart.defaults.color = '#64748b';
    Chart.defaults.font.family = 'Poppins';
    Chart.defaults.font.size = 8;

    // METRIC DISTRIBUTION DUAL CHART (HISTOGRAM BARS + NORMAL CURVE LINE)
    const distCtx = document.getElementById('distributionChart').getContext('2d');
    
    // Labels representing xG per Match bins
    const labels = ['0.0', '0.2', '0.4', '0.6', '0.8', '1.0', '1.2', '1.4', '1.6', '1.8', '2.0', '2.2', '2.4', '2.6', '2.8', '3.0', '3.2', '3.4', '3.6', '3.8', '4.0'];

    new Chart(distCtx, {
      data: {
        labels: labels,
        datasets: [
          {
            type: 'line',
            label: 'Team',
            data: [0, 0.5, 1.5, 3, 5, 8, 12, 15, 14, 12, 9, 6, 4, 2, 1, 0.5, 0.2, 0, 0, 0, 0],
            borderColor: '#22c55e',
            borderWidth: 1.5,
            tension: 0.4,
            pointRadius: 0,
            yAxisID: 'y'
          },
          {
            type: 'line',
            label: 'League Average',
            data: [0, 0.2, 0.8, 2, 4, 7, 10, 13, 13, 11, 8, 5, 3, 1.5, 0.8, 0.3, 0.1, 0, 0, 0, 0],
            borderColor: '#64748b',
            borderWidth: 1,
            borderDash: [3, 3],
            tension: 0.4,
            pointRadius: 0,
            yAxisID: 'y'
          },
          {
            type: 'bar',
            label: 'All Teams',
            data: [0, 0.5, 1.2, 3.5, 5.2, 7.8, 11.5, 14.8, 13.2, 11.8, 8.5, 6.2, 3.8, 2.1, 1.2, 0.6, 0.4, 0.2, 0.1, 0, 0],
            backgroundColor: '#1d4ed8',
            barPercentage: 0.9,
            categoryPercentage: 1.0,
            yAxisID: 'y'
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
            grid: { display: false },
            ticks: { color: '#64748b' },
            title: { display: true, text: 'xG per Match', color: '#64748b', font: { size: 8 } }
          },
          y: {
            grid: { color: '#172a45' },
            min: 0,
            max: 20,
            ticks: {
              stepSize: 5,
              callback: function(value) { return value + '%'; }
            },
            title: { display: true, text: '% of matches', color: '#64748b', font: { size: 8 } }
          }
        }
      },
      plugins: [{
        // Custom plugin to draw vertical green line at Team: 1.84
        id: 'teamMarker',
        afterDraw: (chart) => {
          const ctx = chart.ctx;
          const xAxis = chart.scales.x;
          const yAxis = chart.scales.y;
          
          // Position corresponding to 1.84
          const xPixel = xAxis.getPixelForValue(9.2);
          const topY = yAxis.getPixelForValue(18);
          const bottomY = yAxis.bottom;

          ctx.save();
          ctx.beginPath();
          ctx.moveTo(xPixel, topY);
          ctx.lineTo(xPixel, bottomY);
          ctx.lineWidth = 1.5;
          ctx.strokeStyle = '#22c55e';
          ctx.stroke();

          // Green dot on top
          ctx.beginPath();
          ctx.arc(xPixel, topY, 2.5, 0, 2 * Math.PI);
          ctx.fillStyle = '#22c55e';
          ctx.fill();

          // Text label
          ctx.fillStyle = '#22c55e';
          ctx.font = 'bold 8px Poppins';
          ctx.fillText('Team: 1.84', xPixel - 18, topY - 5);
          ctx.restore();
        }
      }]
    });
  