// Pour chaque question
// Afficher une boite de dialogue avec la question + les propositions + un champ de réponse
// Stocker la réponse dans une variable
// let userResponseQuestion1 = prompt(`
//     Question 1 : Quelle est la capitale de la France ?
//     1. Paris
//     2. Marseille
// `)
// Comparer la réponse avec la bonne réponse

// Une fois toutes les questions posées
// Afficher le nombre de bonnes réponses et le pourcentage de bonnes réponses

/**
 * Questions
 */
let goodAnswers = 0;
// Question 1
// Que doit-on écrire comme selecteur CSS pour appliquer un style aux balises de titre de niveau 2 et 3 ?
const userResponseQ1 = prompt(`
    Question 1 : Que doit-on écrire comme selecteur CSS pour appliquer un style aux balises de titre de niveau 2 et 3 ?
    1. h2, h3
    2. h2 h3
    3. h2 > h3
    4. h2 + h3
`)
console.log('Debug userResponseQ1 : ', userResponseQ1);
if(userResponseQ1 == "1"){
    showWin()
} else {
    console.log("Mauvaise réponse !");
}

// Question 2
// Quelle est la particularité de l'attribut class par rapport à l'attribut id ?
const userResponseQ2 = prompt(`
    Question 2 : Quelle est la particularité de l'attribut class par rapport à l'attribut id ?
    1. L'attribut id doit être unique sur la page
    2. L'attribut class doit être unique sur la page
    3. class peut être utilisé dans un fichier .css mais pas id
    4. Il n'y a strictement aucune différence entre les deux
`)
console.log('Debug userResponseQ2 : ', userResponseQ2);
if(userResponseQ2 == "1"){
    showWin()
} else {
    console.log("Mauvaise réponse !");
}

const userResponseQ3 = prompt(`
    Lequel de ces alignements fait prendre au texte toute la largeur disponible ?
    1. left
    2. center
    3. right
    4. justify
`)
console.log('Debug userResponseQ3 : ', userResponseQ3);
if(userResponseQ3 == "4"){
    showWin()
} else {
    console.log("Mauvaise réponse !");
}



const userResponseQ4 = prompt(`
    Laquelle de ces couleurs correspond à du blanc ?
    1. #000
    2. rgb(100, 100, 100)
    3. #FFFFFF
    4. purple
`)
console.log('Debug userResponseQ4 : ', userResponseQ4);
if(userResponseQ4 == "3"){
    showWin()
} else {
    console.log("Mauvaise réponse !");
}

// Afficher le nombre de bonnes réponses et le pourcentage de bonnes réponses
console.log("Nombre de bonnes réponses : ", goodAnswers);
console.log("Pourcentage de bonnes réponses : ", goodAnswers / 4 * 100);

function showWin(){
    console.log("Bonne réponse !");
    goodAnswers++
    console.log("Nombre de bonnes réponses : ", goodAnswers);
}




userResponseQ1 == "1"
userResponseQ2 == "1"
userResponseQ3 == "4"
userResponseQ4 == "3"

checkResponse(userResponseQ1, "1")
checkResponse(userResponseQ2, "1")
checkResponse(userResponseQ3, "4")
checkResponse(userResponseQ4, "3")

function checkResponse(userResponse, goodAnswer){
    if(userResponse == goodAnswer){
        showWin()
    } else {
        console.log("Mauvaise réponse !");
    }
}


