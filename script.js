function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3 + 1);
  if (randomNumber == 1) {
    return "rock";
  } else if (randomNumber == 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

function verifyWinner(humanPoints, computerPoints) {
  if (humanPoints == 5) {
    result.textContent = "Congratulations! You win!";
    disableButtons();
    return;
  }

  if (computerPoints == 5) {
    result.textContent = "Game over! You lose!";
    disableButtons();
    return;
  }
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice == computerChoice) {
    result.textContent = "It's a tie!";
  } else if (
    (humanChoice == "rock" && computerChoice == "scissors") ||
    (humanChoice == "paper" && computerChoice == "rock") ||
    (humanChoice == "scissors" && computerChoice == "paper")
  ) {
    result.textContent = `You win, because ${humanChoice} beats ${computerChoice}!`;
    humanPoints++;
    humanScore.textContent = `Player score: ${humanPoints}`;
  } else {
    result.textContent = `You lose, because ${humanChoice} loses to ${computerChoice}!`;
    computerPoints++;
    computerScore.textContent = `Computer score: ${computerPoints}`;
  }

  verifyWinner(humanPoints, computerPoints);
}

function disableButtons() {
  rock.disabled = true;
  paper.disabled = true;
  scissors.disabled = true;


  rock.style.color = "gray";
  paper.style.color = "gray";
  scissors.style.color = "gray";
  rock.style.transform = "scale(1)";
  paper.style.transform = "scale(1)";
  scissors.style.transform = "scale(1)";
}

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const result = document.getElementById("matchResult");
const humanScore = document.getElementById("human");
const computerScore = document.getElementById("computer");
let humanPoints = 0;
let computerPoints = 0;
let humanChoice;
let computerChoice;

rock.addEventListener("click", () => {
  humanChoice = "rock";
  computerChoice = getComputerChoice();
  playRound(humanChoice, computerChoice);
});
paper.addEventListener("click", () => {
  humanChoice = "paper";
  computerChoice = getComputerChoice();
  playRound(humanChoice, computerChoice);
});
scissors.addEventListener("click", () => {
  humanChoice = "scissors";
  computerChoice = getComputerChoice();
  playRound(humanChoice, computerChoice);
});