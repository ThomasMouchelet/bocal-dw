let age = prompt("Quel est votre âge?");
console.log("age : ", age);
let somme = prompt('Entrez un somme')
console.log('somme : ', somme)

while(somme >= 5){
    let commande = prompt('Entrez votre commande')
    console.log('commande : ', commande)

    if(commande == "bna" ){
        validatedCommand(5)
    }

    if(commande == "plat"){
        validatedCommand(20)
    }

    if(commande == "ba"){
        if(age >= 18){
            validatedCommand(8)
        } else {
            console.log("Boisson alcoolisée, commande refusée, âge insuffisant")
        }   
    }
}

function validatedCommand(price){
    if(somme >= price){
        console.log("commande acceptée");
        somme = somme - price
        console.log("Somme restante : ", somme)
    } else {
        console.log("commande refusée, somme insuffisante")
    }
}