
    let currentDate = new Date(2026, 6, 28); // Initial date set to July 28, 2026
    let selectedDay = 28;

    const monthNames = [
        "JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", 
        "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"
    ];

    const dayNames = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

    function renderCalendar() {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();

        // Update Title (Month & Year)
        document.getElementById('currentMonthYear').textContent = `${monthNames[month]} ${year}`;

        const calendarStrip = document.getElementById('calendarStrip');
        calendarStrip.innerHTML = '';

        const daysInMonth = new Date(year, month + 1, 0).getDate();

        // Generate Day Cards for the Month
        for (let day = 1; day <= daysInMonth; day++) {
            const dateObj = new Date(year, month, day);
            const dayOfWeek = dayNames[dateObj.getDay()];

            // Generate Random Dynamic Match Count for Demo
            const matchCount = Math.floor(Math.random() * 25) + 5; 

            const card = document.createElement('div');
            card.className = `calendar-day-card ${day === selectedDay ? 'active' : ''}`;
            card.setAttribute('data-day', day);

            card.innerHTML = `
                <div class="cal-day-name">${dayOfWeek}</div>
                <div class="cal-date-number">${day < 10 ? '0' + day : day}</div>
                <span class="cal-match-count">${matchCount} Matches</span>
            `;

            // Click Event for Selecting Date Card
            card.addEventListener('click', function() {
                document.querySelectorAll('.calendar-day-card').forEach(c => c.classList.remove('active'));
                this.classList.add('active');
                selectedDay = day;
            });

            calendarStrip.appendChild(card);
        }

        // Scroll to selected active date automatically
        const activeCard = calendarStrip.querySelector('.active');
        if (activeCard) {
            activeCard.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
        }
    }

    // Previous Month Navigation
    document.getElementById('prevMonthBtn').addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() - 1);
        selectedDay = 1;
        renderCalendar();
    });

    // Next Month Navigation
    document.getElementById('nextMonthBtn').addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() + 1);
        selectedDay = 1;
        renderCalendar();
    });

    // Initial Load
    renderCalendar();
