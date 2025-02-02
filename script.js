function getComputerChoice() {
  randomNumber = Math.floor(Math.random() * 3 + 1);
  if (randomNumber == 1) {
    return "rock";
  } else if (randomNumber == 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
//   humanChoice = prompt("Type your move: ").toLowerCase();

    let humanChoice;
    rock.addEventListener('click', () =>{
        humanChoice = "rock";
        computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    })
    paper.addEventListener('click', () =>{
        humanChoice = "paper";
        computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    })
    scissors.addEventListener('click', () =>{
        humanChoice = "scissors";
        computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    })

//   while (
//     !(humanChoice == "rock") &&
//     !(humanChoice == "paper") &&
//     !(humanChoice == "scissors")
//   ) {
//     humanChoice = prompt("Please, type 'rock', 'paper', or 'scissors': ");
//   }
  return humanChoice;
}

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();

// playGame();

// function playGame() {
//   let humanScore = 0;
//   let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
      console.log("It's a tie!");
    } else if (
      (humanChoice == "rock" && computerChoice == "scissors") ||
      (humanChoice == "paper" && computerChoice == "rock") ||
      (humanChoice == "scissors" && computerChoice == "paper")
    ) {
      console.log(`You win, because ${humanChoice} beats ${computerChoice}!`);
      humanScore++;
    } else {
      console.log(
        `You lose, because ${humanChoice} loses to ${computerChoice}!`
      );
      computerScore++;
    }
  }

//   for (i = 1; i < 6; i++) {
//     console.log(`Round ${i}`);
//     playRound(humanSelection, computerSelection);
//     console.log(`Score: 
//                 Human - ${humanScore}
//                 Computer - ${computerScore}`);
//     if (i < 5) {
//       humanSelection = getHumanChoice();
//       computerSelection = getComputerChoice();
//     } else {
//       if (humanScore == computerScore) {
//         console.log("It ended in a tie!");
//       } else {
//         winner = humanScore > computerScore ? "Human" : "Computer";
//         console.log(`The game ended! And the winner is... ${winner}`);
//       }
//     }
//   }
// }
