
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

        // Theme Switcher
        // const themeToggleBtn = document.getElementById('themeToggleBtn');
        // const themeIcon = document.getElementById('themeIcon');
        // const htmlTag = document.documentElement;

        // themeToggleBtn.addEventListener('click', function () {
        //     const currentTheme = htmlTag.getAttribute('data-bs-theme');
        //     if (currentTheme === 'dark') {
        //         htmlTag.setAttribute('data-bs-theme', 'light');
        //         themeIcon.classList.remove('fa-moon');
        //         themeIcon.classList.add('fa-sun');
        //     } else {
        //         htmlTag.setAttribute('data-bs-theme', 'dark');
        //         themeIcon.classList.remove('fa-sun');
        //         themeIcon.classList.add('fa-moon');
        //     }
        // });

        // The reference dashboard does not include the legacy chart canvases.
        if (!document.getElementById('oddsChart')) return;

        // Odds Movement Chart
        const ctxOdds = document.getElementById('oddsChart').getContext('2d');
        new Chart(ctxOdds, {
            type: 'line',
            data: {
                labels: ['-72h', '-48h', '-24h', 'Now'],
                datasets: [
                    {
                        label: 'Man City Win',
                        data: [1.85, 1.78, 1.74, 1.72],
                        borderColor: '#3b82f6',
                        backgroundColor: 'rgba(59, 130, 246, 0.1)',
                        borderWidth: 2,
                        tension: 0.3,
                        pointRadius: 3
                    },
                    {
                        label: 'Draw',
                        data: [4.10, 4.20, 4.25, 4.35],
                        borderColor: '#f59e0b',
                        borderWidth: 2,
                        borderDash: [4, 4],
                        tension: 0.3,
                        pointRadius: 0
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                scales: {
                    x: { grid: { color: 'rgba(255, 255, 255, 0.05)' }, ticks: { color: '#94a3b8', font: { size: 10 } } },
                    y: { grid: { color: 'rgba(255, 255, 255, 0.05)' }, ticks: { color: '#94a3b8', font: { size: 10 } } }
                }
            }
        });

        // Bar Chart
        const ctxBar = document.getElementById('barChart').getContext('2d');
        new Chart(ctxBar, {
            type: 'bar',
            data: {
                labels: ['Man City', 'Real Madrid', 'Arsenal', 'Bayern', 'PSG', 'Inter'],
                datasets: [
                    {
                        label: 'Actual Goals Scored',
                        data: [58, 54, 51, 62, 55, 48],
                        backgroundColor: '#10b981',
                        borderRadius: 5
                    },
                    {
                        label: 'Expected Goals (xG)',
                        data: [52, 49, 48, 57, 50, 44],
                        backgroundColor: '#3b82f6',
                        borderRadius: 5
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { labels: { color: '#94a3b8', font: { size: 11 } } }
                },
                scales: {
                    x: { grid: { color: 'rgba(255, 255, 255, 0.05)' }, ticks: { color: '#94a3b8' } },
                    y: { grid: { color: 'rgba(255, 255, 255, 0.05)' }, ticks: { color: '#94a3b8' } }
                }
            }
        });

        // Doughnut Chart
        const ctxDoughnut = document.getElementById('doughnutChart').getContext('2d');
        new Chart(ctxDoughnut, {
            type: 'doughnut',
            data: {
                labels: ['Match Result (1X2)', 'Over/Under Goals', 'Asian Handicap', 'Both Teams To Score'],
                datasets: [{
                    data: [45, 25, 18, 12],
                    backgroundColor: ['#10b981', '#3b82f6', '#f59e0b', '#ef4444'],
                    borderWidth: 0
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'right',
                        labels: { color: '#94a3b8', font: { size: 11 }, padding: 15 }
                    }
                },
                cutout: '70%'
            }
        });
    });
