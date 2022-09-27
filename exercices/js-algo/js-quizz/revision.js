
// let 1user = "thomas"
// let gavéBien = "Bordeaux"

const userChoice = "rock"; // string ou str

console.log(`Vous avez choisi ${userChoice}`);
console.log("Type de la variable userChoice : ", typeof userChoice);

let nombreDeProduits;
console.log("Type de la variable nombreDeProduits : ", typeof nombreDeProduits);

nombreDeProduits = 3; // number
console.log("Type de la variable nombreDeProduits : ", typeof nombreDeProduits);

let isOnline = true; // boolean
let userList = null;
let average = 3.14;

let counter = 10;
counter = counter + 1;
counter = counter + 1;
counter += 2;
counter -= 2;
counter *= 2;
counter++;
counter--;
console.log("counter : ", counter);

// Comparaison
/*
    Opérateurs de comparaison
    > : strictement supérieur à
    >= : supérieur ou égal à
    < : strictement inférieur à
    <= : inférieur ou égal à
    == : égal à
    != : différent de
*/

// 12 > 10 // true
// 2 > 5 // false
// 2 == 2 // true
// 2 != 2 // false

// let xp = 100
// let lvl = 100
// // xp >= 100

// xp >= 100 && lvl < 100
//  true ET  false   => false

/*
    Opérateurs logiques
    && : ET les deux conditions doivent être vraies
    || : OU l'une des deux conditions doit être vraie
*/

// true && true // true
// true && false // false

// true || true // true
// true || false // true

// if(true){
//     // instruction
// }

let xp = 100;
let lvl = 100;
//   true   ET    false   => false
if (xp >= 100 && lvl < 100) {
  console.log("Vous avez gagné un niveau !");
  xp = 0;
  lvl++;
} else if(xp >= 100 && lvl == 50){
    console.log("Vous avez gagné un bonus !");
} else if (xp >= 100 && lvl == 60) {
  console.log("Vous avez gagné un bonus !");
} else {
    console.log("Vous avez atteint le niveau maximum !");
}
