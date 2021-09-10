 const year = document.getElementById('year');
 const days = document.getElementById('days');
 const hours = document.getElementById('hours');
 const minutes = document.getElementById('minutes');
 const seconds = document.getElementById('seconds');

 const currentYear = new Date().getFullYear();
 const nextYear = new Date(`January 01 ${currentYear + 1} 00:00:00`);

function countDown()
{
    const currentTime = new Date();
    const diff = nextYear - currentTime;

    const s = Math.floor(diff / 1000) % 60;
    const m = Math.floor(diff / 1000 / 60) % 60;
    const h = Math.floor(diff / 1000 / 60 / 60) % 24;
    const d = Math.floor(diff / 1000 / 60 / 60 / 24);
    
    seconds.innerHTML = (s < 10) ? '0' + s : s;
    minutes.innerHTML = (m < 10) ? '0' + m : m;
    hours.innerHTML = (h < 10) ? '0' + h : h;
    days.innerHTML = (d < 10) ? '0' + d : d;
}


setInterval(countDown,1000);

year.innerHTML = nextYear.getFullYear();

