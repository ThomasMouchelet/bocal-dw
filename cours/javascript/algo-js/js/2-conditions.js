let age = 13;

// if(true){
//     console.log("Condition is true");
// }

/*
    OPERATORS
    > Strictement suprérieur à
    < Strictement inférieur à
    >= Supérieur ou égal à
    <= Inférieur ou égal à
    == Égal à
    === Égal à et même type
    != Différent de
    !== Différent de et même type

    LOGICAL OPERATORS
    && ET
    || OU
*/

const result1 = true && true; // true
const result2 = true && false; // false
const result3 = false || true; // true

if (age >= 18) {
    console.log("You are an adult");
} else if(age <= 16) { 
    console.log("You are a teenager");
} else {
    console.log('Sinon')
}

// Ternaire 
// comparaison ? si vrai : si faux
// age >= 18 ? "You are an adult" : "You are a teenager";