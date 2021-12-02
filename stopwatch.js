const TIMER_STATES = [];

let seconds = 00;
let tens = 00;
let appendTens = document.getElementById("tens")
let appendSeconds = document.getElementById("seconds")

let btnStart = document.getElementById('btn-start');
let btnStop = document.getElementById('btn-stop');
let btnReset = document.getElementById('btn-reset');
let title = document.getElementById('timer');

let light = document.getElementById('oval-off');
let lightshadow = document.getElementById('oval-shadow');

let song = document.getElementById("myAudio");
document.getElementById("myAudio").loop = true;


let interval;

//Start Timer
btnStart.addEventListener('click', function () {
    clearInterval(interval);
    interval = setInterval(startTimer, 10);
    TIMER_STATES.push(true);

    if (TIMER_STATES[0] == true) {
        title.style.color = "white";
        light.style.fill = "#00DD73";
        lightshadow.style.fill = "#00DD73";
        song.play();
    }

});

btnStop.addEventListener('click', function () {
    clearInterval(interval);

    TIMER_STATES.push(false);

    if (TIMER_STATES[1] == false) {
        title.style.color = "grey";
        light.style.fill = "#E70000";
        lightshadow.style.fill = "#E70000";
        song.pause();

    }

});

btnReset.addEventListener('click', function () {
    clearInterval(interval);
    tens = "00";
    seconds = "00";
    appendTens.innerHTML = tens;
    title.style.color = "grey";

    appendSeconds.innerHTML = seconds;
    light.style.fill = "#E70000";
    lightshadow.style.fill = "#E70000";
    song.pause();

});

//Timer function
function startTimer() {
    tens++;

    if (tens <= 9) {
        appendTens.innerHTML = "0" + tens;
    }

    if (tens > 9) {
        appendTens.innerHTML = tens;

    }

    if (tens > 99) {
        console.log("seconds");
        seconds++;
        appendSeconds.innerHTML = "0" + seconds;
        tens = 0;
        appendTens.innerHTML = "0" + 0;
    }

    if (seconds > 9) {
        appendSeconds.innerHTML = seconds;
    }
}

//If timer is off set to false
//If start button clicked set timer to on and start counting
//Set a for loop to increase the count
//If pause button stop but don't erase (pause loop??)
//If erase button then set total time to 0
//**EXTRA**// 
//Store the last used time and put it next to the stop watch
//Think about extra features or search online 