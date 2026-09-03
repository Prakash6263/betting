
    document.addEventListener("DOMContentLoaded", function () {
        // Sidebar Toggle Handler for Mobile & Desktop
        const sidebarToggle = document.getElementById('sidebarToggle');
        const sidebar = document.getElementById('sidebar');
        const mainContent = document.getElementById('mainContent');

        sidebarToggle.addEventListener('click', function () {
            if (window.innerWidth <= 991.98) {
                sidebar.classList.toggle('mobile-show');
            } else {
                sidebar.classList.toggle('collapsed');
                mainContent.classList.toggle('expanded');
            }
        });

        
     // CHARTS INITIALIZATION
        const ctxXg = document.getElementById('xgTrendChart').getContext('2d');
        const xgChart = new Chart(ctxXg, {
            type: 'line',
            data: {
                labels: ['GW1', 'GW2', 'GW3', 'GW4', 'GW5', 'GW6', 'GW7', 'GW8', 'GW9', 'GW10'],
                datasets: [
                    {
                        label: 'Expected Goals (xG)',
                        data: [1.8, 2.4, 1.9, 2.8, 2.1, 3.1, 2.4, 2.9, 2.2, 2.85],
                        borderColor: '#00e676',
                        backgroundColor: 'rgba(0, 230, 118, 0.08)',
                        fill: true,
                        tension: 0.4,
                        borderWidth: 3
                    },
                    {
                        label: 'Actual Goals Converted',
                        data: [2.0, 2.0, 3.0, 2.0, 1.0, 4.0, 2.0, 3.0, 2.0, 3.0],
                        borderColor: '#3b82f6',
                        borderDash: [5, 5],
                        fill: false,
                        tension: 0.3,
                        borderWidth: 2
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { labels: { color: '#94a3b8', font: { family: 'Poppins' } } }
                },
                scales: {
                    x: { grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: '#94a3b8' } },
                    y: { grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: '#94a3b8' } }
                }
            }
        });

        // RADAR CHART
        const ctxRadar = document.getElementById('radarStyleChart').getContext('2d');
        new Chart(ctxRadar, {
            type: 'radar',
            data: {
                labels: ['Pressing', 'Buildup', 'Counter', 'Set Piece', 'Defense', 'Possession'],
                datasets: [{
                    label: 'Team Tactical Score',
                    data: [88, 92, 75, 84, 79, 95],
                    backgroundColor: 'rgba(59, 130, 246, 0.25)',
                    borderColor: '#3b82f6',
                    pointBackgroundColor: '#00e676'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                scales: {
                    r: {
                        angleLines: { color: 'rgba(255,255,255,0.1)' },
                        grid: { color: 'rgba(255,255,255,0.1)' },
                        pointLabels: { color: '#94a3b8', font: { family: 'Poppins', size: 11 } },
                        ticks: { display: false }
                    }
                }
            }
        });

        // DOUGHNUT CHART
        const ctxDoughnut = document.getElementById('goalSourceChart').getContext('2d');
        new Chart(ctxDoughnut, {
            type: 'doughnut',
            data: {
                labels: ['Open Play', 'Set Pieces', 'Fast Break', 'Penalty'],
                datasets: [{
                    data: [58, 26, 11, 5],
                    backgroundColor: ['#3b82f6', '#00e676', '#f59e0b', '#ef4444'],
                    borderWidth: 0
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { position: 'right', labels: { color: '#94a3b8', font: { family: 'Poppins', size: 11 } } }
                },
                cutout: '70%'
            }
        });

        // BAR CHART
        const ctxBar = document.getElementById('counterSpeedChart').getContext('2d');
        new Chart(ctxBar, {
            type: 'bar',
            data: {
                labels: ['Man City', 'Liverpool', 'Arsenal', 'Real Madrid', 'Bayern'],
                datasets: [{
                    label: 'Transition Speed (s)',
                    data: [8.2, 6.4, 7.8, 6.1, 7.1],
                    backgroundColor: '#10b981',
                    borderRadius: 6
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                indexAxis: 'y',
                plugins: { legend: { display: false } },
                scales: {
                    x: { grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: '#94a3b8' } },
                    y: { grid: { display: false }, ticks: { color: '#94a3b8' } }
                }
            }
        });
    });
