const buttons = document.querySelectorAll("button");

const resultContainer = document.querySelector("#result")
const resultText = document.createElement("span");

const userScore = document.querySelector("#user-score")
const compScore = document.querySelector("#computer-score")

const endGameDisplay = document.querySelector("#end-game")


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
    // Displays the human score in the DOM
    userScore.textContent = humanScore
}


function showComputerScore () {
    // Displays the computer score in the DOM
    compScore.textContent = computerScore
}


function showWinner() {
    // After 5 rounds, will reveal which player won
    if (humanScore === 5 || computerScore === 5) {
        if (humanScore === 5) {
            endGameDisplay.textContent = "Congratulations! You won best of 5!"
        } else {
            endGameDisplay.textContent =  "Better luck next time!"
        }
    }
}


function playRound (humanChoice, computerChoice) {
    // Takes two parameters humanChoice and computerChoice
    // Compare humanChoice to computerChoice ie Rock vs Paper
    // Update the score variables accordingly
    // Log the result and display it in the DOM

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


function endGame () {
    if (humanScore === 5 || computerScore === 5) {
        buttons.forEach(button => {
            button.removeEventListener("click", playGame);
        });
    }
}


function playGame (event) {
    const humanSelection = event.target.textContent;
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    showHumanScore();
    showComputerScore();
    showWinner();
    endGame ();
}


buttons.forEach(button => {
    button.addEventListener("click", playGame)
})






