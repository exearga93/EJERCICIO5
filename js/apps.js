let startTime, updatedTime, difference, tInterval, savedTime = 0;
let running = false;

const display = document.getElementById('display');
const iniciarPararBtn = document.getElementById('iniciarParar');
const reiniciarBtn = document.getElementById('reiniciar');

iniciarPararBtn.addEventListener('click', iniciarParar);
reiniciarBtn.addEventListener('click', reiniciar);

function iniciarParar() {
    if (!running) {
        startTime = new Date().getTime() - savedTime;
        tInterval = setInterval(updateTime, 10);  // Actualiza cada 10 milisegundos
        iniciarPararBtn.innerText = 'PAUSAR';
        running = true;
    } else {
        clearInterval(tInterval);
        savedTime = new Date().getTime() - startTime;
        iniciarPararBtn.innerText = 'INICIAR';
        running = false;
    }
}

function reiniciar() {
    clearInterval(tInterval);
    display.innerText = '00:00:00.000';
    iniciarPararBtn.innerText = 'INICIAR';
    running = false;
    savedTime = 0;
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
