
const btnStartEl = document.querySelector('button[data-start]');
const btnStopEl = document.querySelector('button[data-stop]');
let timerId = "";

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


btnStartEl.addEventListener("click", () => {
    timerId = setInterval(() => {
        document.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
    btnStartEl.disabled = true
});

btnStopEl.addEventListener("click", () => {
    clearInterval(timerId);
    btnStartEl.disabled = false
})