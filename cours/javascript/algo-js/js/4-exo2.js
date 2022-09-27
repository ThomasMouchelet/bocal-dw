/**********
    LVL 1
**********/
// 1. générer un nombre aléatoire entre 0 et 10
const randomNumber = Math.floor(Math.random() * 11)
console.log("randomNumber : ", randomNumber)
// 2.Demander un nombre à l'utilisateur
const userNumber = prompt('Entrez un nombre entre 0 et 10') 
console.log("userNumber : ", userNumber)
// Comparer le nombre de l'utilisateur et le nombre aléatoire
if(userNumber == randomNumber){
    console.log('Bravo')
} else {
    console.log('perdu')
}
/**********
    LVL 2
**********/
// 1. générer un nombre aléatoire entre 0 et 10
// 2. TANT QUE le joueur n'a pas la bonne réponse (do while)
    // Demander un nombre à l'utilisateur

/*********
    LVL 3
**********/
// 1. générer un nombre aléatoire entre 0 et 10
// 2. TANT QUE le joueur n'a pas la bonne réponse ET qu'il lui reste des tentatives
    // Demander un nombre à l'utilisateur