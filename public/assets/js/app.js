const timerElement = document.querySelector('#timer');
let timeRemaining = 10 * 60;

function startCountdown() {
    const countdown = setInterval(() => {
        timeRemaining--;

        const minutes = Math.floor(timeRemaining / 60);
        const seconds = timeRemaining % 60;

        timerElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

        if (timeRemaining <= 0) {
            clearInterval(countdown);
        }
    }, 1000);
}

startCountdown();