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

let humanScrore = 0;
let computerScore = 0;

function playRound (humanChoice, computerChoice) {
    // Takes two parameters humanChoice and computerChoice
    // Convert humanChoice case sensitivity to be consistent
    // Compare humanChoice to computerChoice ie Rock vs Paper
    // Update the scores accordingly
    // Log the result, declaring who won and why
    humanChoice = humanChoice[0].toUpperCase() + humanChoice.slice(1, humanChoice.length).toLowerCase()

    console.log(`Human choice: ${humanChoice}`)
    console.log(`Computer chouce: ${computerChoice}`)

    if (humanChoice === "Rock") {
        if (computerChoice === "Rock") {
            console.log("It's a tie. You both chose Rock!"); 
        } else if (computerChoice === "Paper") {
            computerScore ++;
            console.log("You lose! Paper beats Rock.");
        } else if (computerChoice === "Scissors") {
            humanScrore ++;
            console.log("You win! Rock beats Scissors.");    
        }
    } else if (humanChoice === "Paper") {
        if (computerChoice === "Rock") {
            humanScrore ++;
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
            humanScrore ++;
            console.log("You win! Scissors beats Paper."); 
        } else if (computerChoice === "Scissors") {
            console.log("It's a tie. You both chose Scissors!");                 
        }
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);