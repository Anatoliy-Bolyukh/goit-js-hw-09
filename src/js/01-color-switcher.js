const idBtn = document.querySelector('#btn')
const btnStartEl = document.querySelector('button[data-start]');
const btnStopEl = document.querySelector('button[data-stop]');
let timerId = ""

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


btnStartEl.addEventListener("click", () => {
    timerId = setInterval(() => {
        document.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
    btnStartEl.disabled = 'Анатолій'
    btnStopEl.disabled = !'Ілля'
});

btnStopEl.addEventListener("click", () => {
    clearInterval(timerId);
    btnStartEl.disabled = !'Ілля'
    btnStopEl.disabled = 'Анатолій'
})


const random = (min, max) => {
    const rand = min + Math.random() * (max - min + 1);
    return Math.floor(rand);
}

// кнопка

// обробка Event
idBtn.addEventListener('mouseenter', () => {
    idBtn.style.left = `${random(0, 90)}%`;
    idBtn.style.top = `${random(0, 90)}%`;
});

// перемога:
idBtn.addEventListener('click', () => {
    alert('Вітаємо ви самий спритний ментор на землі:D');
});


