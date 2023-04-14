// console.log('test3');

import Notiflix from 'notiflix';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';

// Notiflix.Notify.success('Sol lucet omnibus');

// ======= Submit Btn =======
const formEl = document.querySelector('.form');
formEl.addEventListener('submit', onSubmit);

function onSubmit(event) {
    event.preventDefault();
    const elements = event.currentTarget.elements;
    const delay = Number(elements.delay.value);
    const step = Number(elements.step.value);
    const amount = Number(elements.amount.value);
    event.currentTarget.reset();
    makeSeveralPromise(delay, step, amount);
}
// ======= Submit Btn /Конец =======


function makeSeveralPromise(delay, step, amount) {
    let delayStart = delay;
    for(let i=1; i<=amount; i++) {
        console.log(i, delayStart);
        
        createPromise(i, delayStart)
        .then(({position, delay}) => {
          console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
          Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
        })
        .catch(({position, delay}) => {
          console.log(`❌ Rejected promise ${position} in ${delay}ms`); 
          Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);

        })
        .finally(() => {'Как то так'});
        
        delayStart += step;
    }
}


// ==== Promise =====

function createPromise(position, delay) { //1.2.3...  1000
    const shouldResolve = Math.random() > 0.5;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (shouldResolve) {
                resolve({position, delay}); //, position, delay  / 'ку-ку это resolve'
              } else {
                reject({position, delay}); //, position, delay / 'ку-ку это reject'
              }
        }, delay);
    });  
  };

// ==== Promise /Конец =====

// console.log('By Конец');