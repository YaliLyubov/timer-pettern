const timerElement = document.querySelector('.simple_timer');
const hoursElement = timerElement.querySelector('.hours');
const minutesElement = timerElement.querySelector('.minutes');
const secondsElement = timerElement.querySelector('.seconds');


let timeLeft = 600; 
// время таймера в секундах

function updateTimer() {
    const hours = Math.floor(timeLeft / 3600);
    const minutes = Math.floor((timeLeft % 3600) / 60);
    const seconds = timeLeft % 60;
    
    hoursElement.textContent = hours.toString().padStart(2, '0');
    minutesElement.textContent = minutes.toString().padStart(2, '0');
    secondsElement.textContent = seconds.toString().padStart(2, '0');
    
    if (timeLeft <= 60 && timeLeft > 0) {
        timerElement.classList.add('warning');
    } else if (timeLeft <= 0) {
        timerElement.classList.add('expired');
        hoursElement.textContent = '00';
        minutesElement.textContent = '00';
        secondsElement.textContent = '00';
        clearInterval(timerInterval);
    } else {
        timerElement.classList.remove('warning');
    }
}

const timerInterval = setInterval(() => {
    timeLeft--;
    updateTimer();
}, 1000);

updateTimer();