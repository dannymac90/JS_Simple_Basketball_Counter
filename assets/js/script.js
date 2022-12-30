// Declare Display Variables
let displayHomeScore = document.getElementById("score__el--home") 
let displayAwayScore = document.getElementById("score__el--guest")

// Score variables
let homeCount = 0
let awayCount = 0

// Home button increment functions
function homePlusOne() {
  homeCount += 1;
  displayHomeScore.textContent= homeCount
}

function homePlusTwo() {
  homeCount += 2;
  displayHomeScore.textContent = homeCount;
}

function homePlusThree() {
  homeCount += 3;
  displayHomeScore.textContent = homeCount;
}

// Away button increment functions
function awayPlusOne() {
  awayCount += 1;
  displayAwayScore.textContent = awayCount;
}

function awayPlusTwo() {
  awayCount += 2;
  displayAwayScore.textContent = awayCount;
}

function awayPlusThree() {
  awayCount += 3;
  displayAwayScore.textContent = awayCount;
}