function displayClock(){
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    var time = hours + " : " + addLeadingZero(minutes) + " : " + addLeadingZero(seconds);
}

function addLeadingZero(number) {
    return (number < 10 ? "0" : "") + number;
}

setInterval(displayClock, 1000);