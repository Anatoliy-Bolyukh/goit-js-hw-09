import { Notify } from 'notiflix/build/notiflix-notify-aio';

const formEl = document.querySelector('.form')
const buttonEl = document.querySelector('button[type="submit"]')
const delayEl = document.querySelector('[name="delay"]')
const stepEl = document.querySelector('[name="step"]')
const amountEl = document.querySelector('[name="amount"]')

// console.log(stepEl);

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay })
      } else {
        reject({ position, delay })
      }
    }, delay)
  })
}

buttonEl.addEventListener('click', event => {
  event.preventDefault()
  for (let i = 0; i < amountEl.value; i++) {
    createPromise(i + 1, +delayEl.value + +stepEl.value * i)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }
  formEl.reset()
})