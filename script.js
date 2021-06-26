//STOPWATCH----------------------------------------------------------------
var toggleBtn = document.querySelector(".toggle-btn");
var title = document.getElementById("title");
var timerBox = document.getElementById("timerBox");
var stopwatchDisplay = document.getElementById("stopwatch");
var stopwatchButtons = document.getElementById("buttons");

function toggleMe() {
    toggleBtn.classList.toggle('active');
    if (title.innerHTML == "Countdown Timer") {
        title.innerHTML = "Stopwatch";
        timerBox.style.display = "none";
        stopwatchDisplay.style.display = "block";
        stopwatchButtons.style.display = "block";
        document.getElementById("top").style.backgroundColor = "white";
        document.getElementById("bottom").style.backgroundColor = "#40e9ff";
        title.style.color = "#40e9ff";
    }
    else {
        title.innerHTML = "Countdown Timer";
        timerBox.style.display = "block";
        stopwatchDisplay.style.display = "none";
        stopwatchButtons.style.display = "none";
        document.getElementById("top").style.backgroundColor = "#40e9ff";
        document.getElementById("bottom").style.backgroundColor = "white";
        title.style.color = "white";
    }
}

const timer = document.getElementById("stopwatch");

var hour = 0;
var minute = 0;
var second = 0;
var stoptime = true;

function startStopwatch() {
    if (stoptime == true) {
        stoptime = false;
        timerCycle();
    }
}

function stopStopwatch() {
    if (stoptime == false) {
        stoptime = true;
    }
}

function timerCycle() {
    if (stoptime == false) {
        second = parseInt(second);
        minute = parseInt(minute);
        hour = parseInt(hour);

        second++;

        if (second == 60) {
            minute ++;
            second = 0
        }

        if (minute == 60) {
            hour++;
            minute = 0;
            second = 0;
        }

        if (second < 10 || second == 0) {
            second = '0' + second;
          }
        if (minute < 10 || minute == 0) {
        minute = '0' + minute;
        }
        if (hour < 10 || hour == 0) {
        hour = '0' + hour;
        }

        timer.innerHTML = hour+":"+minute+":"+second;

        setTimeout("timerCycle()", 1000);
    }
}

function resetTimer() {
    timer.innerHTML = "00:00:00";
    stoptime=true;
    hour = 0;
    second = 0;
    minute = 0;
}



//TIMER----------------------------------------------------------------------
// name parts of DOM
const startBtn = document.getElementById("start");
const hourDisplay = document.getElementById("hours");
const minuteDisplay = document.getElementById("minutes");
const secondDisplay = document.getElementById("seconds");
var mp3_url = 'https://media.geeksforgeeks.org/wp-content/uploads/20190531135120/beep.mp3';
var myAudio = new Audio(mp3_url);
myAudio.loop = true;

function stopTimer() {
    if (startBtn.innerHTML == "Stop Timer") {
        myAudio.pause();
        startBtn.innerHTML = "Start Timer";
        startBtn.onclick=convertToSeconds;
    }
}


function startTimer(timeInSeconds, callback) {
    var time = timeInSeconds;
    var hours, minutes, seconds; // declaring vars

    var myInterval = setInterval(function() { // converts current secs left into h, m and s
        hours = parseInt(time/3600, 10);
        minutes = parseInt(time/60, 10);
        seconds = parseInt(time%60, 10);

        hours = hours < 10 ? "0"+hours : hours; // displays front 0 if number < 10
        minutes = minutes < 10 ? "0"+ minutes : minutes;
        seconds = seconds < 10 ? "0"+ seconds : seconds;

        hourDisplay.value = hours; // display in textbox
        minuteDisplay.value = minutes;
        secondDisplay.value = seconds;

        if (--time < 0) { // if at 00:00:00 then call callback function (if exists)
            clearInterval(myInterval);
            if (callback) {
                callback();
                }
        }
    }, 1000);
}

function convertToSeconds() {

    var seconds = (hourDisplay.value*3600)+(minuteDisplay.value*60)+secondDisplay.value;

    startTimer(seconds, function() {
        myAudio.play();
        startBtn.innerHTML = "Stop Timer";
        startBtn.onclick=stopTimer;
    });
}

startBtn.onclick=convertToSeconds;



