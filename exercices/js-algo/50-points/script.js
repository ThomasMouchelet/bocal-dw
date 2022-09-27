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


// Joueur 1
let scoreJ1 = 0;
// Joueur 2
let scoreJ2 = 0;
let next = true;
let nbRound = 1;

// Tant que les deux joueurs n'ont pas atteint 50 points
while (scoreJ1 <= 50 && scoreJ2 <= 50 && next == true) {
    console.log(`***** NEXT ROUND : ${nbRound} *****`);
    nbRound++
    let dedeJ1D1 = Math.floor(Math.random() * 6) + 1;
    let dedeJ1D2 = Math.floor(Math.random() * 6) + 1;
    console.log(`Résultat du joueur 1 : ${dedeJ1D1} et ${dedeJ1D2}`);
    let dedeJ2D1 = Math.floor(Math.random() * 6) + 1;
    let dedeJ2D2 = Math.floor(Math.random() * 6) + 1;
    console.log(`Résultat du joueur 2 : ${dedeJ2D1} et ${dedeJ2D2}`);

    if(dedeJ1D1 != dedeJ1D2){
        console.log(`Le joueur 1 n'a pas de double`);
    } else {
        console.log(`Le joueur 1 marque des points`);
        // Un double 1, 2, 4, 5 = 5 points
        if(dedeJ1D1 == 1 || dedeJ1D1 == 2 || dedeJ1D1 == 4 || dedeJ1D1 == 5){
            scoreJ1 += 5;
            console.log(`Le joueur 1 marque 5 points`);
        }
        // Un double 6 = 25 points
        if(dedeJ1D1 == 6){
            scoreJ1 += 25;
            console.log(`Le joueur 1 marque 25 points`);
        }
        // S’ils obtiennent un double 3, ils repartent à zéro
        if(dedeJ1D1 == 3){
            scoreJ1 = 0;
            console.log(`Le joueur 1 repart à zéro`);
        }
    }
    
    if(dedeJ2D1 != dedeJ2D2){
        console.log(`Le joueur 2 n'a pas de double`);
    } else {
        console.log(`Le joueur 2 marque des points`);
        // Un double 1, 2, 4, 5 = 5 points
        if(dedeJ2D1 == 1 || dedeJ2D1 == 2 || dedeJ2D1 == 4 || dedeJ2D1 == 5){
            scoreJ2 += 5;
            console.log(`Le joueur 2 marque 5 points`);
        }
        // Un double 6 = 25 points
        if(dedeJ2D1 == 6){
            scoreJ2 += 25;
            console.log(`Le joueur 2 marque 25 points`);
        }
        // S’ils obtiennent un double 3, ils repartent à zéro
        if(dedeJ2D1 == 3){
            scoreJ2 = 0;
            console.log(`Le joueur 2 repart à zéro`);
        }
    }

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


