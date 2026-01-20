let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice) {
  const choices = ["Rock", "Paper", "Scissors"];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  let result = "";

  if (playerChoice === computerChoice) {
    result = "It's a Draw!";
  } else if (
    (playerChoice === "Rock" && computerChoice === "Scissors") ||
    (playerChoice === "Paper" && computerChoice === "Rock") ||
    (playerChoice === "Scissors" && computerChoice === "Paper")
  ) {
    result = "You Win!";
    playerScore++;
  } else {
    result = "Computer Wins!";
    computerScore++;
  }

  document.getElementById("message").innerText =
    `You chose ${playerChoice}, Computer chose ${computerChoice}. ${result}`;

  document.getElementById("playerScore").innerText = playerScore;
  document.getElementById("computerScore").innerText = computerScore;
}
