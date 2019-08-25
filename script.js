// setInterval(function() {
//     let timerDate = new Date("august 25, 2019 00:00:00").getTime() - new Date().getTime();

//     let sec = Math.floor(timerDate / 1000);
//     let mints = Math.floor(sec / 60);
//     let hrs = Math.floor(mints / 60);

//     sec %= 60;
//     mints %= 60;
//     hrs %= 24;

//     document.querySelector("#hours").innerHTML = hrs;
//     document.querySelector("#mints").innerHTML = mints;
//     document.querySelector("#seconds").innerHTML = sec;
// }, 1000);

// timer setting function
let tSeconds = 60;
let timerCount;
let isRunning = false;
let interval;

function setTimer() {

    let tMints = Math.round((tSeconds - 30) / 60);
    let remainSeconds = tSeconds % 60;

    let tHurs = Math.round((tMints - 30) / 60);
    let remainMints = tHurs % 60;

    document.querySelector(".timerhrs").innerHTML = remainMints;
    document.querySelector(".timermint").innerHTML = tSeconds;
    document.querySelector(".timerCounter").innerHTML = remainSeconds;

    // document.querySelector("#sec").innerHTML = tSeconds;

    if (tSeconds == 0) {
        clearInterval(timerCount);
        document.querySelector(".timerCounter").innerHTML = "00";
    } else {
        tSeconds--;
    }
}


function start() {
    if (isRunning === false) {
        document.querySelector(".timerCounter").innerHTML = "";
        interval = setInterval(setTimer, 1000);
        isRunning = true;
    }

    if (tMints == 0) {
        document.querySelector(".timermint").innerHTML = "";
        tMints--;

    }

}

function stop() {
    clearInterval(interval);
    isRunning = false;

}

function resetWatch() {

    clearInterval(interval);
    tSeconds = 0;
    tMints = 0;
    tHurs = 0;
    document.querySelector(".timerhrs").innerHTML = "00";
    document.querySelector(".timermint").innerHTML = "00";
    document.querySelector(".timerCounter").innerHTML = "00";
}