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

function getHumanChoice () {
    // Ask an input from the user, strictly with the following choices: Rock, Paper or Scissors
    // Store the user's input
    // Return the user's input
    const userInput = prompt("Rock, Paper, Scissors")

    return userInput
}

let totalPlay = 0
let humanScore = 0;
let computerScore = 0;

function playRound (humanChoice, computerChoice) {
    // Takes two parameters humanChoice and computerChoice
    // Convert humanChoice case sensitivity to be consistent
    // Compare humanChoice to computerChoice ie Rock vs Paper
    // Update the scores accordingly
    // Log the result, declaring who won and why
    humanChoice = humanChoice[0].toUpperCase() + humanChoice.slice(1, humanChoice.length).toLowerCase()

    if (humanChoice === "Rock") {
        if (computerChoice === "Rock") {
            console.log("It's a tie. You both chose Rock!"); 
        } else if (computerChoice === "Paper") {
            computerScore ++;
            console.log("You lose! Paper beats Rock.");
        } else if (computerChoice === "Scissors") {
            humanScore ++;
            console.log("You win! Rock beats Scissors.");    
        }
    } else if (humanChoice === "Paper") {
        if (computerChoice === "Rock") {
            humanScore ++;
            console.log("You win! Paper beats Rock.");  
        } else if (computerChoice === "Paper") {     
            console.log("It's a tie. You both chose Paper!");
        } else if (computerChoice === "Scissors") {
            computerScore ++;
            console.log("You lose! Scissors beats Paper.");      
        }
    } else if (humanChoice === "Scissors") {
        if (computerChoice === "Rock") {
            computerScore ++;
            console.log("You lose! Rock beats Scissors.");  
        } else if (computerChoice === "Paper") {
            humanScore ++;
            console.log("You win! Scissors beats Paper."); 
        } else if (computerChoice === "Scissors") {
            console.log("It's a tie. You both chose Scissors!");                 
        }
    }
    totalPlay ++
}

function showScore() {
    // Shows the updated score per round
    return `Current score: You - ${humanScore}, Computer - ${computerScore}`
}

function showWinner() {
    // After 5 rounds, will reveal which player won
    if (totalPlay === 5) {
        if (humanScore > computerScore) {
            return "Congratulations! You won best of 5!"
        } else {
            return  "Better luck next time!"
        }
    }
}

function playGame () {
    // Round 1
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    console.log(showScore())
    // Round 2
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    console.log(showScore())
    // Round 3
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    console.log(showScore())
    // Round 4
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    console.log(showScore())
    // Round 5
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    console.log(showScore())
    console.log(showWinner())
}

playGame()

