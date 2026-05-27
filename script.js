// Таймер обратного отсчёта
function updateCountdown() {
    const weddingDate = new Date('2026-08-26T17:00:00');
    const now = new Date();
    const timeLeft = weddingDate - now;

    if (timeLeft < 0) {
        document.getElementById('timer').innerHTML = 'Свадьба состоялась!';
        return;
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
