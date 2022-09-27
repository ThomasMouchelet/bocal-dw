// Le jeu des cinquante points
// 2 dés
// À tour de rôle, deux joueurs lancent deux dés.
// S’ils n’obtiennent aucun double, ils ne marquent pas de points.

// En revanche, si leurs dés affichent des doubles, 
// voici comment calculer leur score :
// Un double 1, 2, 4, 5 = 5 points
// Un double 6 = 25 points
// S’ils obtiennent un double 3, ils repartent à zéro
// Le premier joueur à atteindre 50 points gagne la partie.

// const player = {
//     score: 0,
//     d1: null,
//     d2: null,
//     function : generateRandomNumber = () => {
//         Math.floor(Math.random() * 6) + 1;
//     }
// }


// Joueur 1
let scoreJ1 = 0;
// Joueur 2
let scoreJ2 = 0;
let next = true;
let nbRound = 1;


function generateRandomNumber(){
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    return randomNumber
}

function checkPlayerRound(d1, d2, score, playerName){
    if(d1 != d2){
        console.log(`${playerName} n'a pas de double`);
    } else {
        console.log(`${playerName} marque des points`);
        // Un double 1, 2, 4, 5 = 5 points
        if(d1 == 1 || d1 == 2 || d1 == 4 || d1 == 5){
            score += 5;
            console.log(`${playerName} marque 5 points`);
        }
        // Un double 6 = 25 points
        if(d1 == 6){
            score += 25;
            console.log(`${playerName} marque 25 points`);
        }
        // S’ils obtiennent un double 3, ils repartent à zéro
        if(d1 == 3){
            score = 0;
            console.log(`${playerName} repart à zéro`);
        }
    }

    if(playerName == "Joueur 1"){
        scoreJ1 = score
    } else {
        scoreJ2 = score
    }
}


// Tant que les deux joueurs n'ont pas atteint 50 points
while (scoreJ1 <= 50 && scoreJ2 <= 50 && next == true) {
    console.log(`***** NEXT ROUND : ${nbRound} *****`);
    nbRound++

    let dedeJ1D1 = generateRandomNumber()
    let dedeJ1D2 = generateRandomNumber()
    console.log(`Résultat du joueur 1 : ${dedeJ1D1} et ${dedeJ1D2}`);
    let dedeJ2D1 = generateRandomNumber()
    let dedeJ2D2 = generateRandomNumber()
    console.log(`Résultat du joueur 2 : ${dedeJ2D1} et ${dedeJ2D2}`);

    checkPlayerRound(dedeJ1D1, dedeJ1D2, scoreJ1, "Joueur 1")
    checkPlayerRound(dedeJ2D1, dedeJ2D2, scoreJ2, "Joueur 2")

    console.log(`Score du joueur 1 : ${scoreJ1}`);
    console.log(`Score du joueur 2 : ${scoreJ2}`);
    next = confirm(`Voulez-vous continuer ?`);

    if(scoreJ1 >= 50){
        console.log(`Le joueur 1 a gagné`);
    }
    if(scoreJ2 >= 50){
        console.log(`Le joueur 2 a gagné`);
    }
}


