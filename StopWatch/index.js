var hr = 0;
var min = 0;
var sec = 0;
var t;
var hr1 = 0;
var min1 = 0;
var sec1 = 0;
var t;

function print1(val) {
    if (val <= 9) {
        return '0' + val;
    } else {
        return val
    }
}

function timer() {
    if (sec1 < 59) {
        sec1++;
        document.getElementById('sec1').innerHTML = print1(sec1);
    } else {
        sec1 = 0;
        min1++;
        document.getElementById('sec1').innerHTML = print1(sec1);
    }
    if (min1 <= 59) {
        document.getElementById('min1').innerHTML = print1(min1);
    } else {
        min1 = 0;
        hr1++
        document.getElementById('min1').innerHTML = print1(min1);
    }
    if (hr1 < 24) {
        document.getElementById('hr1').innerHTML = print1(hr1);
    } else {
        stop1();
    }
}

function startTimer() {
    if (sec < 59) {
        sec++;
        document.getElementById('sec').innerHTML = print(sec);
    } else {
        sec = 0;
        min++;
        document.getElementById('sec').innerHTML = print(sec);
    }
    if (min <= 59) {
        document.getElementById('min').innerHTML = print(min);
    } else {
        min = 0;
        hr++
        document.getElementById('min').innerHTML = print(min);
    }
    if (hr < 24) {
        document.getElementById('hr').innerHTML = print(hr);
    } else {
        stop();
    }


    function print(val) {
        if (val <= 9) {
            return '0' + val;
        } else {
            return val
        }
    }



    function start() {
        t = setInterval(startTimer, 1000);
        document.getElementById('start').disabled = true;
    }

    function stop() {
        clearInterval(t);
        document.getElementById('start').disabled = false;

    }

    function reset() {
        clearInterval(t);
        min = 0;
        sec = 0;
        hr = 0;
        document.getElementById('sec').innerHTML = '00';
        document.getElementById('min').innerHTML = '00';
        document.getElementById('hr').innerHTML = '00';

    }

    function reset1() {
        clearInterval(t);
        min1 = 0;
        sec1 = 0;
        hr1 = 0;
        document.getElementById('sec1').innerHTML = '00';
        document.getElementById('min1').innerHTML = '00';
        document.getElementById('hr1').innerHTML = '00';

    }

    function stop1() {
        clearInterval(t);
        document.getElementById('start1').disabled = false;
    }

    function start1() {
        t = setInterval(timer, 1000);
        document.getElementById('start1').disabled = true;
    }