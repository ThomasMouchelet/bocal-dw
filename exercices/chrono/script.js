// Initialiser la variable pour les secondes
let secondes = 0;
// Initialiser la variable pour les minutes
let minutes = 0;

let showSecondes = "00"
let showMinutes = "00"

console.log(`Début du chronomètre à ${minutes} minutes et ${secondes} secondes`);
// setInterval, toute les 1000ms
    // Ajouter 1 seconde à la variable secondes
    // SI secondes est supérieur ou égale à 60
        // Ajouter 1 minute à la variable minutes
        // Réinitialiser la variable secondes à 0

setInterval(function(){
    secondes++
    
    if(secondes >= 60){
        minutes++
        secondes = 0
    }

    if(secondes < 10){
        showSecondes = "0" + secondes
    } else {
        showSecondes = secondes
    }

    if(minutes < 10){
        showMinutes = "0" + minutes
    } else {
        showMinutes = minutes
    }

    console.log(`Chrono : ${showMinutes}:${showSecondes}`);
}, 100)



// lvl 2
//console.log("Chrono: 00:00")