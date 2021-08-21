// Get Days 
function getDay() {
    var num = document.getElementById('day').value;
    var res = document.getElementById('result');

    if (num == null || num == "") {
        res.value = 'Please enter the day';
    } else if (num == 1) {
        res.value = 'The day entered is Monday';
    } else if (num == 2) {
        res.value = 'The day entered is Tuesday';
    } else if (num == 3) {
        res.value = 'The day entered is Wednesday';
    } else if (num == 4) {
        res.value = 'The day entered is Thursday';
    } else if (num == 5) {
        res.value = 'The day entered is Friday';
    } else if (num == 6) {
        res.value = 'The day entered is Saturday';
    } else if (num == 7) {
        res.value = 'The day entered is Sunday';
    } else if (num < 1 || num > 7) {
        res.value = 'Please enter the day within the range 1 to 7'
    } else {
        res.value = 'Invalid Input';
    }
}


// Count Words 
function getWords() {
    var num = document.getElementById('words').value;
    num = num.split(' ').length;
    alert('The word count is ' + num);
}