let startTime, updatedTime, difference, tInterval;
let running = false;

const display = document.getElementById('display');
const startStopBtn = document.getElementById('startStop');
const resetBtn = document.getElementById('reset');

startStopBtn.addEventListener('click', startStop);
resetBtn.addEventListener('click', reset);

function startStop() {
    if (!running) {
        startTime = new Date().getTime();
        tInterval = setInterval(updateTime, 10);  // Actualiza cada 10 milisegundos
        startStopBtn.innerText = 'Pausar';
        running = true;
    } else {
        clearInterval(tInterval);
        startStopBtn.innerText = 'Iniciar';
        running = false;
    }
}

function reset() {
    clearInterval(tInterval);
    display.innerText = '00:00:00.000';
    startStopBtn.innerText = 'Iniciar';
    running = false;
}

function updateTime() {
    updatedTime = new Date().getTime();
    difference = updatedTime - startTime;

    let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);
    let milliseconds = Math.floor(difference % 1000);

    display.innerText = (hours < 10 ? '0' + hours : hours) + ':' +
                        (minutes < 10 ? '0' + minutes : minutes) + ':' +
                        (seconds < 10 ? '0' + seconds : seconds) + '.' +
                        (milliseconds < 100 ? (milliseconds < 10 ? '00' + milliseconds : '0' + milliseconds) : milliseconds);
}
