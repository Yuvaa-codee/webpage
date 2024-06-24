function updateCountdown() {
    const eventDate = new Date('2024-08-18T09:00:00').getTime();
    const now = new Date().getTime();
    const difference = eventDate - now;

    const months = Math.floor(difference / (1000 * 60 * 60 * 24 * 30));
    const days = Math.floor((difference % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('days').textContent = days.toString().padStart(2, '0');
    document.getElementById('months').textContent = months.toString().padStart(2, '0');
}

setInterval(updateCountdown, 1000);
updateCountdown();