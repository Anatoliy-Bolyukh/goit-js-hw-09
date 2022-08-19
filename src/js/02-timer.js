import flatpickr from "flatpickr";

import "flatpickr/dist/flatpickr.min.css";



const inputEl = document.querySelector('#datetime-picker')
const startBtn = document.querySelector('button[type="button"]')
const daysEl = document.querySelector('span[data-days]')
const hoursEl = document.querySelector('span[data-hours]')
const minutesEl = document.querySelector('span[data-minutes]')
const secondsEl = document.querySelector('span[data-seconds]')

const interval = 1000;

startBtn.disabled = true
const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        if (selectedDates[0].getTime() < new Date().getTime()) {
            window.alert("Please choose a date in the future");
            startBtn.disabled = true
        } else {
            startBtn.disabled = false
        }
    },
};

startBtn.addEventListener('click', showTime)

function showTime() {
    const intervalId = setInterval(() => {
        const dataTime = new Date(inputEl.value).getTime() - Date.now()
        if (dataTime < 0) {
            setValuesToHtml();
            return;
        };
        const { days, hours, minutes, seconds } = convertMs(dataTime)
        setValuesToHtml(dataTime);
        if (dataTime < 1000) {
            return clearInterval(intervalId);
        }

        function setValuesToHtml(dataTime) {
            daysEl.textContent = addLeadingZero(dataTime ? days : '00');
            hoursEl.textContent = addLeadingZero(dataTime ? hours : '00');
            minutesEl.textContent = addLeadingZero(dataTime ? minutes : '00');
            secondsEl.textContent = addLeadingZero(dataTime ? seconds : '00');
        }
    }, interval);

}

flatpickr(inputEl, options);

function addLeadingZero(value) {
    return String(value).padStart(2, '0');
}

function convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const days = Math.floor(ms / day);
    const hours = Math.floor((ms % day) / hour);
    const minutes = Math.floor(((ms % day) % hour) / minute);
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
}
