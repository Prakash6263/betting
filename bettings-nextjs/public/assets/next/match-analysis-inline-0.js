
        document.addEventListener("DOMContentLoaded", function () {
            const ctx = document.getElementById('liveWinProbabilityChart').getContext('2d');

            // Smooth Area Gradients
            const homeGradient = ctx.createLinearGradient(0, 0, 0, 200);
            homeGradient.addColorStop(0, 'rgba(255, 77, 77, 0.35)');
            homeGradient.addColorStop(1, 'rgba(255, 77, 77, 0.0)');

            const awayGradient = ctx.createLinearGradient(0, 0, 0, 200);
            awayGradient.addColorStop(0, 'rgba(59, 130, 246, 0.35)');
            awayGradient.addColorStop(1, 'rgba(59, 130, 246, 0.0)');

            new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ["0'", "20'", "40'", "60'", "90'"],
                    datasets: [
                        {
                            label: 'Arsenal',
                            data: [89, 45, 55, 48, 46.8, null, null],
                            borderColor: '#ff4d4d',
                            backgroundColor: homeGradient,
                            borderWidth: 2,
                            fill: true,
                            tension: 0.4,
                            pointRadius: 0,
                            pointHoverRadius: 5
                        },
                        {
                            label: 'Draw',
                            data: [90, 28, 22, 26, 27.1, null, null],
                            borderColor: '#94a3b8',
                            borderWidth: 1.5,
                            borderDash: [4, 4],
                            fill: false,
                            tension: 0.4,
                            pointRadius: 0
                        },
                        {
                            label: 'Chelsea',
                            data: [28, 27, 23, 26, 26.1, null, null],
                            borderColor: '#3b82f6',
                            backgroundColor: awayGradient,
                            borderWidth: 2,
                            fill: true,
                            tension: 0.4,
                            pointRadius: 0,
                            pointHoverRadius: 5
                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: { display: false },
                        tooltip: {
                            mode: 'index',
                            intersect: false,
                            backgroundColor: '#131c2e',
                            borderColor: '#1e293b',
                            borderWidth: 1,
                            titleColor: '#94a3b8',
                            bodyColor: '#ffffff',
                            padding: 10,
                            displayColors: true,
                            callbacks: {
                                label: function(context) {
                                    return context.dataset.label + ': ' + context.parsed.y + '%';
                                }
                            }
                        }
                    },
                    scales: {
                        x: {
                            grid: { color: 'rgba(30, 41, 90, 0.5)', drawBorder: false },
                            ticks: { color: '#94a3b8', font: { size: 10 } }
                        },
                        y: {
                            min: 0,
                            max: 100,
                            grid: { color: 'rgba(30, 41, 90, 0.5)', drawBorder: false },
                            ticks: {
                                color: '#94a3b8',
                                font: { size: 10 },
                                callback: function(value) { return value + '%'; }
                            }
                        }
                    }
                }
            });
        });
    