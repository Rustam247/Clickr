let clicks = 0;
const TIMEOUT = 5000;

const display = document.getElementById("display");
const button = document.getElementById("button")
const counter = document.getElementById("counter")
const button1 = document.getElementById("button1")

button.onclick = start;

function start() {
    const startTime = Date.now();

    display.textContent = formatTime(TIMEOUT);
    button.onclick = () => counter.textContent = clicks++;

    const interval = setInterval(() =>{
        const delta = Date.now() - startTime;
        display.textContent = formatTime(TIMEOUT - delta);
    }, 100);

    const timeout = setTimeout(() => {
        button.onclick = null;
        display.textContent = "Gave Over";

        clearInterval(interval);
        clearTimeout(timeout);
    }, TIMEOUT);
}

function formatTime(ms) {
    return Number.parseFloat(ms / 1000).toFixed(2);
}

function reload(){
    location.reload(); 
   
};
button1.addEventListener('click', ()=>{
    reload();
})