// Declare Display Variables
let displayHomeScore = document.getElementById("score__el--home") 
let displayAwayScore = document.getElementById("score__el--guest")

// Score variables
let homeCount = 0
let awayCount = 0

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