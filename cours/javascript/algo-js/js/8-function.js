// Fonctions natives
// alert("Hello World");
// prompt("Quel est votre nom ?")

function direBonjour(firstName, lastName) {
    console.log(`Bonjour ${firstName} ${lastName}`);
}

direBonjour("Thomas" , "Mouchelet")
direBonjour("John", "Doe")
direBonjour("Bob", "Marley")

const direBonjour2 = function(firstName, lastName) {
    console.log(`Bonjour ${firstName} ${lastName}`);
}
// Arrow function
const direBonjour3 = (firstName, lastName) => {
    console.log(`Bonjour ${firstName} ${lastName}`);
}

// (function(){
//     alert('Anonymous function');
// })()

// setTimeout(function(){
//     alert('Hello World setTimeout');
// }, 3000)

// setInterval(function(){
//     console.log('Hello World setInterval');
// }, 1000)


