function displayClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
  
    var time = hours + ":" + addLeadingZero(minutes) + ":" + addLeadingZero(seconds);
  
    document.getElementById("clock").textContent = time;
  }
  
  function addLeadingZero(number) {
    return (number < 10 ? "0" : "") + number;
  }
  
  // Update the clock every second
  setInterval(displayClock, 1000);