// Déclarer un tableau
// Si userChoice égale à pierre ET que computerChoice égale à ciseaux
// OU userChoice égale à feuille ET que computerChoice égale à pierre
// OU userChoice égale à ciseaux ET que computerChoice égale à feuille
const choicesList = ["pierre", "feuille", "ciseaux"];
let userScore = 0
let robotScore = 0
let nextRound = true
let maxScore = 2

while(nextRound === true && userScore < maxScore && robotScore < maxScore){  
    const userChoice = prompt("Choisissez pierre, feuille ou ciseaux");
    console.log("Choix de l'utilisateur : " , userChoice);
    const randomNumber = Math.floor(Math.random() * 3);
    let robotChoice = choicesList[randomNumber];
    console.log("Choix du robot : " , robotChoice);

    if (userChoice === robotChoice) {
        console.log("Egalité");
    } else if (
        userChoice === "pierre" && robotChoice === "ciseaux" || 
        userChoice === "feuille" && robotChoice === "pierre" || 
        userChoice === "ciseaux" && robotChoice === "feuille"
    ) {
        console.log("Vous avez gagné");
        userScore++
    } else {
        console.log("Vous avez perdu")
        robotScore++
    }

    console.log("Score de l'utilisateur : " , userScore);
    console.log("Score du robot : " , robotScore);

    nextRound = confirm('Voulez-vous rejouer ?');
    console.log("nextRound : ", nextRound)
}

// LVL 1
// Demander à l'utilisateur un choix entre pierre, feuille et ciseaux
// Afficher le choix de l'ordinateur
// Afficher le résultat

// LVL 2
// Proposer de rejouer

// LVL 3
// Afficher le score

// LVL 4
// l'orsque l'un des deux joueurs attient 10 points alors le joueur gagne

// console.log("userRobot : ", userRobot)

// LVL 5
// % de victoire
// % de défaite
// % d'égalité
// % de victoire par choix
// % de défaite par choix




