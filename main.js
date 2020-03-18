console.log("main.js linked...");

let rockPaperScissors = [
  { img: "", name: "rock" },
  { img: "", name: "paper" },
  { img: "", name: "scissors" }
];

let winCount = 0;
let winPercent = 0;
let numTimesPlayed = 0;

//generate an integer between 0 and 2 and return it
function randomGen() {
  return Math.floor(Math.random() * 3);
}
function play(str) {
  let playerChoice = rockPaperScissors[str];
  let compChoi = rockPaperScissors[randomGen()];
  alert("you picked " + playerChoice.name);
  alert("the computer picked " + compChoi.name);
  choiceCompare(playerChoice.name, compChoi.name);
}
function choiceCompare(p, c) {
  let playerCh = p;
  let compCh = c;

  if (
    (p == "rock" && c == "scissors") ||
    (p == "paper" && c == "rock") ||
    (p == "scissors" && c == "paper")
  ) {
    updateCounters(1);
    alert("You won");
    return;
  } else if (
    (p == "rock" && c == "paper") ||
    (p == "paper" && c == "scissors") ||
    (p == "scissors" && c == "rock")
  ) {
    updateCounters(0);
    alert("Computer won");
    return;
  } else {
    updateCounters(2);
    alert("You are both losers.");
    return;
  }
}

function updateCounters(int) {
  let playerWon = int;
  if (playerWon === 1) {
    winCount++;
  }
  numTimesPlayed++;
  winPercent = (winCount / numTimesPlayed) * 100;

  document.getElementById("win-percent").innerHTML = winPercent.toString();
  document.getElementById("times-won").innerHTML = winCount.toString();
  document.getElementById("times-played").innerHTML = numTimesPlayed.toString();
}
