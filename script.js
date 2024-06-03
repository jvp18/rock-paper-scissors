const buttons = document.querySelectorAll("button");

const resultContainer = document.querySelector("#result")
const resultText = document.createElement("span");

const userScore = document.querySelector("#user-score")
const compScore = document.querySelector("#computer-score")

const endGame = document.querySelector("#end-game")


let humanScore = 0;
let computerScore = 0;


function getComputerChoice () {
    // Generate a random number between 1 to 3
    // Assign the numbers 1,2 and 3 to Rock, Paper and Scissors, respectively
    // Return the assigned value of the random number generated i.e 1 returns Rock
    const randomNum = Math.floor(Math.random() *3) + 1;

    switch (randomNum) {
        case 1 : return "Rock";
        case 2 : return "Paper";
        case 3 : return "Scissors";
    }
}


function showHumanScore () {
    userScore.textContent = humanScore
}


function showComputerScore () {
    compScore.textContent = computerScore
}


function showWinner() {
    // After 5 rounds, will reveal which player won
    if (humanScore === 5 || computerScore === 5) {
        if (humanScore === 5) {
            endGame.textContent = "Congratulations! You won best of 5!"
        } else {
            endGame.textContent =  "Better luck next time!"
        }
    }
}


function playRound (humanChoice, computerChoice) {
    // Takes two parameters humanChoice and computerChoice
    // Convert humanChoice case sensitivity to be consistent
    // Compare humanChoice to computerChoice ie Rock vs Paper
    // Update the scores accordingly
    // Log the result, declaring who won and why

    if (humanChoice === "Rock") {
        if (computerChoice === "Rock") {
            resultText.textContent = "It's a tie. You both chose Rock!"; 
        } else if (computerChoice === "Paper") {
            computerScore ++;
            resultText.textContent = "You lose! Paper beats Rock."; 
        } else if (computerChoice === "Scissors") {
            humanScore ++;
            resultText.textContent = "You win! Rock beats Scissors."; 
        }
    } else if (humanChoice === "Paper") {
        if (computerChoice === "Rock") {
            humanScore ++;
            resultText.textContent = "You win! Paper beats Rock."; 
        } else if (computerChoice === "Paper") { 
            resultText.textContent = "It's a tie. You both chose Paper!";   
        } else if (computerChoice === "Scissors") {
            computerScore ++;
            resultText.textContent = "You lose! Scissors beats Paper.";  
        }
    } else if (humanChoice === "Scissors") {
        if (computerChoice === "Rock") {
            computerScore ++;
            resultText.textContent = "You lose! Rock beats Scissors."; 
        } else if (computerChoice === "Paper") {
            humanScore ++;
            resultText.textContent = "You win! Scissors beats Paper."; 
        } else if (computerChoice === "Scissors") {
            resultText.textContent = "It's a tie. You both chose Scissors!";            
        }
    }
    resultContainer.appendChild(resultText)
}


function playGame (event) {
    const humanSelection = event.target.textContent;
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    showHumanScore();
    showComputerScore();
    showWinner();
    
    if (humanScore === 5 || computerScore === 5) {
        buttons.forEach(button => {
            button.removeEventListener("click", playGame);
        });
    }
}


buttons.forEach(button => {
    button.addEventListener("click", playGame)
})






