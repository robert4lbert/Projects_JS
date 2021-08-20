const img = document.getElementById('img');
const buttons = document.getElementById('buttons');
let colorIndex = 0;
let intervalId = null;


const trafficLight = (event) => {
    _turnOn[event.target.id]();
}

const _turnOn = {
    'red': () => img.src = './img/vermelho.png',
    'yellow': () => img.src = './img/amarelo.png',
    'green': () => img.src = './img/verde.png',
    'automatic': () => intervalId = setInterval(changeColor, 1000)
}

const changeColor = () => {
    const cols = ['red', 'yellow', 'green'];
    const color = cols[colorIndex];
    _turnOn[color]();
    nextIndex();
}

const nextIndex = () => colorIndex = colorIndex < 2 ? colorIndex++ : 0;

const stopAuto = () =>{
    clearInterval(intervalId)
}

buttons.addEventListener('click', trafficLight);

