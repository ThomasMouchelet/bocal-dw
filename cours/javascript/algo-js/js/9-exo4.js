
function allowChoice(age, argent){
    let compteur = 0;
    // Si argent est supérieur à 8 et age est supérieur à 18
    if (argent >= 8 && age >= 18){
        // Boisson alcoolisée
        console.log("Vous pouvez prendre une boisson alcoolisée")
        compteur = compteur + 1;
    }
    // Si argent est supérieur à 5
    if(argent >= 5){
        // Boisson non alcoolisée
        console.log("Vous pouvez prendre une boisson non alcoolisée");
        compteur = compteur + 1;
    }
    // Si argent supérieur à 20
    if(argent >= 20){
        // Plat
        console.log("Vous pouvez prendre un plat");
        compteur = compteur + 1;
    }

    // Compter le nombre de possibilités de choix
    console.log(`Vous avez ${compteur} possibilité`)
    // Afficher un message si l'utilisateur n'a aucun choix possible
    if(compteur == 0){
        console.log("Vous n'avez aucun choix possible")
    }
}

// Appeler fonction
console.log('*****USER 1*****')
allowChoice(13, 20)
console.log('*****USER 2*****')
allowChoice(18, 5)
console.log('*****USER 3*****')
allowChoice(18, 3)
console.log('*****USER 4*****')
allowChoice(18, 30)