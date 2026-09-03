
    (() => {
      const grid=document.getElementById('scheduleGrid'); if(!grid)return;
      const days=['Mon 12','Tue 13','Wed 14','Thu 15','Fri 16','Sat 17','Sun 18'], times=['All-day','08:00','10:00','12:00','14:00','16:00','18:00','20:00','22:00'];
      const events={'3-0':['live','Arsenal','vs Newcastle','1 - 1'],'7-1':['','Arsenal','vs Everton','19:30'],'7-2':['','Nottingham Forest','vs Arsenal','20:00'],'8-3':['','Arsenal','vs Chelsea','21:00'],'4-5':['','Southampton','vs Arsenal','13:30'],'6-6':['live','Arsenal','vs Man United','16:30'],'4-2':['postponed','Postponed','(New date TBA)','']};
      let offset=0,mode='week';
      function render(){const shown=mode==='day'?days.slice(0,1):days;grid.innerHTML='<div class="grid-head"></div>'+shown.map((d,i)=>`<div class="grid-head ${i===2?'selected':''}">${d}<small>May</small></div>`).join('');times.forEach((t,r)=>{grid.insertAdjacentHTML('beforeend',`<div class="grid-time">${t}</div>`+shown.map((_,c)=>{const e=events[`${r}-${c}`];return `<div class="grid-slot">${e?`<div class="grid-event ${e[0]}" data-event="${e[1]}"><small>${e[3]}</small><b>${e[1]}</b><br>${e[2]}<small>♛ Premier League</small></div>`:''}</div>`}).join(''))});document.getElementById('scheduleDate').textContent=mode==='day'?'▣　May 14, 2025　':`▣　May ${12+offset*7} – ${18+offset*7}, 2025　`}
      document.querySelectorAll('[data-view]').forEach(b=>b.addEventListener('click',()=>{mode=b.dataset.view;document.querySelectorAll('[data-view]').forEach(x=>x.classList.toggle('active',x===b));render()}));
      document.getElementById('schedulePrev').onclick=()=>{offset--;render()};document.getElementById('scheduleNext').onclick=()=>{offset++;render()};document.getElementById('scheduleToday').onclick=()=>{offset=0;mode='week';render()};render();
    })();
    