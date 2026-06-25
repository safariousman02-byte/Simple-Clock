const time = document.getElementById('time');
const date = document.getElementById('date');
const btn = document.getElementById('btn');

function getTime() {
    // Get current time from your computer (no API needed!)
    const now = new Date();
    
    time.textContent = now.toLocaleTimeString();
    date.textContent = now.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

btn.onclick = getTime;
getTime();

// Auto-update every second (optional)
setInterval(getTime, 1000);