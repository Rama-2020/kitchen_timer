let minutesDisplay = document.getElementById('minutes');
let secondsDisplay = document.getElementById('seconds');
let startButton = document.getElementById('start');
let stopButton = document.getElementById('stop');
let resetButton = document.getElementById('reset');
let labelButtons = document.querySelectorAll('.label');

let alertContainer = document.getElementById('alert-container');
let closeAlertButton = document.getElementById('close-alert');

let timer;
let isReverse = false;
let totalTimeInSeconds = 0;
let fixedTimeSet = 0;

const alertSound = new Audio('Watch-sound.mp3'); // Sound URL

labelButtons.forEach(button => {
    button.addEventListener('click', () => {
        fixedTimeSet = button.getAttribute('data-time');
        setFixedTimer();
    });
});

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);
closeAlertButton.addEventListener('click', closeAlert);

function startTimer() {
    clearInterval(timer);
    timer = setInterval(function() {
        if (isReverse) {
            if (totalTimeInSeconds > 0) {
                totalTimeInSeconds--;
                updateDisplay();
            } else {
                isReverse = false;
                clearInterval(timer);
                alertSound.play();
                // alert('Time Expired')
                showAlert();
                document.body.classList.add('alert');
            }
        } else {
            totalTimeInSeconds++;
            updateDisplay();
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(timer);
}

function resetTimer() {
    clearInterval(timer);
    totalTimeInSeconds = 0;
    updateDisplay();
    document.body.classList.remove('alert');
}

function setFixedTimer() {
    isReverse = true;
    totalTimeInSeconds = 2 * fixedTimeSet;
    updateDisplay();
    document.body.classList.remove('alert');
    startTimer();
}

function updateDisplay() {
    let minutes = Math.floor(totalTimeInSeconds / 60);
    let seconds = totalTimeInSeconds % 60;
    minutesDisplay.textContent = minutes < 10 ? '0' + minutes : minutes;
    secondsDisplay.textContent = seconds < 10 ? '0' + seconds : seconds;
}

function showAlert() {
    alertContainer.style.display = 'flex';
}

function closeAlert() {
    alertContainer.style.display = 'none';
    document.body.classList.remove('alert');
}