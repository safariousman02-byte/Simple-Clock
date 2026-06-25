
const time = document.getElementById('time');
const date = document.getElementById('date');
const btn = document.getElementById('btn');

function getTime() {

    time.textContent = 'Loading Time...'
    date.textContent = 'Loading Date...'

    fetch('https://worldtimeapi.org/api/timezone/Africa/Lagos')
        .then(res => res.json())
        .then(data => {

            const d = new Date(data.datetime);

            time.textContent = d.toLocaleTimeString();
            date.textContent = d.toLocaleDateString('en-Us', {
                weekly: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
        })
        .catch(() => {
            time.textContent = 'Unable to reach the current time...';
            date.textContent = 'Unable to reach the current date...';
        });
}


btn.onclick = getTime;
getTime();