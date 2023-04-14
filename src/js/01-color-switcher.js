
console.log('Hi');

    // npm start

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}


const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');

startBtn.addEventListener('click', onStartColor);
stopBtn.addEventListener('click', onStopColor);
let timerId = null;

function onStartColor() {
    console.log('Start');
    startBtn.disabled = true;
    stopBtn.disabled = false;
    timerId = setInterval(onChangeColor, 1000);
    
}

function onStopColor() {
    console.log('Stop');
    stopBtn.disabled = true;
    startBtn.disabled = false;
    clearInterval(timerId);
}

function onChangeColor() {
    console.log('Start timer');
    document.body.style.backgroundColor = getRandomHexColor();
}