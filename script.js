let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choiceOrdi = Math.floor(Math.random() * 3);
    if (choiceOrdi === 0) {
        return "rock";
    } else if (choiceOrdi === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playGame() {
    const buttons = document.querySelectorAll(".choice");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const humanChoice = button.getAttribute("data-choice");
            const computerChoice = getComputerChoice();
            playRound(humanChoice, computerChoice);
        });
    });
}

function playRound(humanChoice, computerChoice) {
    const resultArea = document.getElementById("result-area");
    if (humanChoice === computerChoice) {
        resultArea.value += "Égalité du coup !\n";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")
    ) {
        resultArea.value += "Vous avez gagné ce round ! " + humanChoice + " bat " + computerChoice + "\n";
        humanScore++;
    } else {
        resultArea.value += "L'ordinateur a gagné ce round ! " + computerChoice + " bat " + humanChoice + "\n";
        computerScore++;
    }
    resultArea.value += "Score actuel - Humain : " + humanScore + " | Ordinateur : " + computerScore + "\n";
    
    // Check for winner
    if (humanScore >= 5) {
        resultArea.value += "Félicitations ! Vous avez gagné le jeu !\n";
        resetGame();
    } else if (computerScore >= 5) {
        resultArea.value += "L'ordinateur a gagné le jeu !\n";
        resetGame();
    }
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    document.getElementById("result-area").value = ""; // Reset result area
}

// Lancer le jeu
document.addEventListener("DOMContentLoaded", playGame); // Ensure the DOM is loaded
