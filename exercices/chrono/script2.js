let secondes = 0;
let minutes = 0;

setInterval(function(){
    secondes++

    if(secondes >= 60){
        minutes++
        secondes = 0
    }

    console.log(`Chrono : ${minutes < 10 ? "0" : ""}${minutes}:${secondes < 10 ? "0" : "" }${secondes}`);
}, 100)

// Ternaire
// comparaison ? vrai : faux
