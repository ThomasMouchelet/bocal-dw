/**********
    LVL 2
**********/

// 1. initialiser la valeur de l'utilisateur
// 2. initialiser la variable du nombre aléatoire
const randomNumber = Math.floor(Math.random() * 11)
console.log('randomNumber : ', randomNumber)

// 3. TANT QUE le joueur n'a pas la bonne réponse (do while)
    // Demander un nombre à l'utilisateur
let userNumber
let nbChances = 3
 
while(randomNumber != userNumber && nbChances > 0 ){
    userNumber = prompt('Entrez un nombre entre 0 et 10')
    nbChances--
}

