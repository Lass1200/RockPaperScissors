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

function getHumanChoice() {
    let choiceHuman = prompt("Allez, choisis entre rock, paper ou scissors :").toLowerCase();
    if (choiceHuman === "rock" || choiceHuman === "paper" || choiceHuman === "scissors") {
        return choiceHuman;
    } else {
        console.log("N'entre que rock, paper ou scissors !");
        return getHumanChoice(); // Redemande le choix
    }
}

function playGame() {
    // Déclaration des variables de score dans playGame
    let humanScore = 0;
    let computerScore = 0;
     // Boucle pour jouer 5 rounds
     for (let i = 0; i < 5; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }


    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            console.log("Égalité du coup !");
        } else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "scissors" && computerChoice === "paper") ||
            (humanChoice === "paper" && computerChoice === "rock")
        ) {
            console.log("Vous avez gagné ce round ! " + humanChoice + " bat " + computerChoice);
            humanScore++; // Incrémente le score humain
        } else {
            console.log("L'ordinateur a gagné ce round ! " + computerChoice + " bat " + humanChoice);
            computerScore++; // Incrémente le score de l'ordinateur
        }
        console.log("Score actuel - Humain : " + humanScore + " | Ordinateur : " + computerScore);
    }

    // Déclaration du gagnant final
    console.log("Score final - Humain : " + humanScore + " | Ordinateur : " + computerScore);
    if (humanScore > computerScore) {
        console.log("Félicitations ! Vous avez gagné le jeu !");
    } else if (computerScore > humanScore) {
        console.log("L'ordinateur a gagné le jeu !");
    } else {
        console.log("C'est une égalité !");
    }
}

// Lancer le jeu
playGame();
