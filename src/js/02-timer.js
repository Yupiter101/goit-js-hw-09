console.log('test2');

import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import "flatpickr/dist/themes/material_blue.css";

import Notiflix from 'notiflix';

let myIntervalId = null;
let totalTime = 0;
let resultForDisplay = {};
let stepTime = 1000; //ms




// === библиотека календарь ===

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    minDate: "2023-02",
    // minDate: "today",
    maxDate: "2024-08",
    // maxDate: new Date().fp_incr(14), // 14 days from now
    // maxDate: "31.12.2024",
    // dateFormat: "Y-m-d H:i",
    // inline: true,
    onClose(selectedDates) {
        totalTime = selectedDates[0] - Date.now();
        if(totalTime > 0) {
            console.log('ok');
            startBtn.disabled = false;
            display();
        }
        else {
            console.log('wrong');
            Notiflix.Notify.failure( "Please choose a date in the future");
            // alert("Please choose a date in the future");
            console.log("Please choose a date in the future");
        }
    },
};

flatpickr("#datetime-picker", options);

// === библиотека календарь Конец ===


// ===== Кнопка статр =====

const startBtn = document.querySelector('[data-start]');
startBtn.disabled = true;
startBtn.addEventListener('click', onStart);


function onStart() {
    console.log('Start');
    resultForDisplay = convertMs(totalTime);
    myIntervalId = setInterval(onCountTime, stepTime);
    startBtn.disabled = true;
    fastBtn.disabled = false;

}
// ===== Кнопка статр Конец =====



// === Кнопка 10х ускорение fast button ====

const fastBtn = document.querySelector('[data-fast]');
fastBtn.disabled = true;
let fastFlag = false;
fastBtn.addEventListener('click', ()=> {
    if(fastFlag) {
        fastFlag = false;
        stepTime = 1000;
        fastBtn.textContent = 'x10';
        clearInterval(myIntervalId);
        myIntervalId = setInterval(onCountTime, stepTime);
    }
    else {
        fastFlag = true;
        stepTime = 100;
        fastBtn.textContent = '1s';
        clearInterval(myIntervalId);
        myIntervalId = setInterval(onCountTime, stepTime);
    }
});
// === Кнопка 10х ускорение Конец ====



// === Вывод информации на display ===

const daysRef = document.querySelector('[data-days]');
const hoursRef = document.querySelector('[data-hours]');
const minutesRef = document.querySelector('[data-minutes]');
const secondsRef = document.querySelector('[data-seconds]');
secondsRef.style.color = 'red';
// secondsRef.stylename = 'color: red';

function display() {
    console.log(totalTime);
    resultForDisplay = convertMs(totalTime);
    const {days, hours, minutes, seconds} = resultForDisplay;
    daysRef.textContent = addLeadingZero(days, 3);
    hoursRef.textContent = addLeadingZero(hours);
    minutesRef.textContent = addLeadingZero(minutes);
    secondsRef.textContent = addLeadingZero(seconds);
}
// === Вывод информации на display /Конец ===




function onCountTime() {
    totalTime = totalTime - 1000;
    if(totalTime <= 0) {
        totalTime = 0;
        clearInterval(myIntervalId);
        console.log('finish');
    }
    display();
}

function addLeadingZero(value, lengh = 2) {
    return String(value).padStart(lengh, '0');
}

function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  }

