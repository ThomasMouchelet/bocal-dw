const userAge = prompt('Entrez votre age')
console.log('userAge : ', userAge)

// SI age entre 12 et 25
    // console.log carte 12-25
// Sinon Si age entre 26 et 45 
    // console.log  carte 26-45
// Sinon Si age entre 46 et 65
    // console.log carte 46-65
// Sinon pas de carte

if(userAge >= 12 && userAge <= 25){
    console.log('carte 12-25')
} else if(userAge >= 26 && userAge <= 45){
    console.log('carte 26-45')
} else if(userAge >= 46 && userAge <= 65){
    console.log('carte 46-65')
} else {
    console.log('pas de carte')
}