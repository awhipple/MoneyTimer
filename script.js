var rate = 0;
var intervalId;
var startTime;

// Check if the hourly rate is provided in the URL parameters
var urlParams = new URLSearchParams(window.location.search);
if (urlParams.has('rate')) {
  rate = parseFloat(urlParams.get('rate'));
  document.getElementById("rate").value = rate;
  document.getElementById("rateDisplay").innerHTML = "$" + rate;
  document.getElementById("rate").style.display = 'none';
  document.getElementById("startBtn").style.display = 'none';
  document.getElementById("stopBtn").style.display = 'none';
  start();
}

function start() {
  if (!intervalId) { // Check if the timer is not already running
    var rateInput = document.getElementById("rate").value;
    if(rateInput !== "") {
      rate = parseFloat(rateInput);
      startTime = Date.now();
      intervalId = setInterval(calculateMoney, 100); // update every second
    }
  }
}

function stop() {
  if(intervalId) {
    clearInterval(intervalId);
    intervalId = null;
  }
}

function calculateMoney() {
  var elapsedTime = Date.now() - startTime;
  var elapsedHours = elapsedTime / (1000 * 60 * 60);
  var earnedMoney = rate * elapsedHours;
  
  document.getElementById("money").innerHTML = "$" + earnedMoney.toFixed(2);
}
