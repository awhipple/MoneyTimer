var rate = 0;
var intervalId;
var startTime;

function start() {
  var rateInput = document.getElementById("rate").value;
  if(rateInput !== "") {
    rate = parseFloat(rateInput);
    startTime = Date.now();
    intervalId = setInterval(calculateMoney, 1000); // update every second
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
