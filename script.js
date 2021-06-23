// name parts of DOM
const startBtn = document.getElementById("start");
const hourDisplay = document.getElementById("hours");
const minuteDisplay = document.getElementById("minutes");
const secondDisplay = document.getElementById("seconds");

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

        if (--time < 0 && time!=undefined) { // if at 00:00:00 then call callback function (if exists)
            clearInterval(myInterval);
        
            if (callback) {
                callback();
            }
        }
    }, 1000);
}

function convertToSeconds() {
    var seconds = (hourDisplay.value*3600)+(minuteDisplay.value*60)+secondDisplay.value;

    startTimer(seconds, function() {alert("done")});
}

startBtn.onclick=convertToSeconds;

