function getComputerChoice () {
    // Generate a random number between 1 to 3
    // Assign the numbers 1,2 and 3 to Rock, Paper and Scissors, respectively
    // Return the assigned value of the random number generated i.e 1 returns Rock
    const randomNum = Math.floor(Math.random() *3) + 1;

    switch (randomNum) {
        case 1 : return "Rock"
        case 2 : return "Paper"
        case 3 : return "Scissors"
    }
}

console.log(getComputerChoice())

function getHumanChoice () {
    // Ask an input from the user, strictly with the following choices: Rock, Paper or Scissors
    // Store the user's input
    // Return the user's input
    const userInput = prompt("Rock, Paper, Scissors")

    return userInput
}

console.log(getHumanChoice())
