// demander age
let age = prompt("Quel est votre âge?");
console.log("age : ", age);
// demander commande
let commande = prompt('Entrez votre commande')
console.log('commande : ', commande)
// demander somme
let somme = prompt('Entrez un somme')
console.log('somme : ', somme)
// SI Boisson non-alcoolisée ET SI somme supérieur à 5 euros
if(commande == "bna" ){
    if(somme >= 5){
        console.log("Boisson non-alcoolisée, commande acceptée");
        somme = somme - 5
        console.log("Somme restante : ", somme)
    } else {
        console.log("Boisson non-alcoolisée, commande refusée, somme insuffisante");
    }
}
// SI Plat ET SI ....
if(commande == "plat"){
    if(somme >= 20){
        console.log("Plat, commande acceptée");
        somme = somme - 20
        console.log("Somme restante : ", somme)
    } else {
        console.log('Plat, commande refusée, somme insuffisante')
    }
}
// SI Boisson alcoolisée ET SI ....
if(commande == "ba"){
    if(somme >= 8){
        if(age >= 18){
            console.log("Boisson alcoolisée, commande acceptée")
            somme = somme - 8
            console.log("Somme restante : ", somme)
        } else {
            console.log("Boisson alcoolisée, commande refusée, âge insuffisant")
        }
    } else {
        console.log("Boisson alcoolisée, commande refusée, somme insuffisante")
    }   
}