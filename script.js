let minutesDisplay = document.getElementById('minutes');
let secondsDisplay = document.getElementById('seconds');
let startButton = document.getElementById('start');
let stopButton = document.getElementById('stop');
let resetButton = document.getElementById('reset');

let timer;
let totalTimeInSeconds = 0;

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);

function startTimer() {
    timer = setInterval(function() {
        totalTimeInSeconds++;

        let minutes = Math.floor(totalTimeInSeconds / 60);
        let seconds = totalTimeInSeconds % 60;

        minutesDisplay.textContent = minutes < 10 ? '0' + minutes : minutes;
        secondsDisplay.textContent = seconds < 10 ? '0' + seconds : seconds;
    }, 1000);
}

function stopTimer() {
    clearInterval(timer);
}

function resetTimer() {
    clearInterval(timer);
    totalTimeInSeconds = 0;
    minutesDisplay.textContent = '00';
    secondsDisplay.textContent = '00';
}
