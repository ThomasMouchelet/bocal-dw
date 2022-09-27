let usersList = ["John", "Paul", "George", "Ringo"];

// Ne pas faire ça
// let nimpArray = [1, "John", true, 4.54, ["Paul", "George", "Ringo"], usersList];
console.log(usersList)
console.log(usersList[2])
console.log("Longueur de l'array : " ,  usersList.length)
// Ajouter un élément à la fin de l'array
usersList.push("Yoko");
console.log(usersList)
// Supprimer le dernier élément de l'array
usersList.pop();
console.log(usersList)
// Ajouter un élément au début de l'array
usersList.unshift("Yoko");
console.log(usersList)
// Supprimer le premier élément de l'array
usersList.shift();
console.log(usersList)
// Supprimer un élément à une position donnée
// splice(position, nbElementsASupprimer)
// supprime 1 élément à partir de l'index 2
usersList.splice(2, 1);
console.log(usersList)
// Ajouter un élément à une position donnée
// splice(position, nbElementsASupprimer, elementAInserer)
// ajoute 1 élément à partir de l'index 2
usersList.splice(2, 0, "Yoko");
console.log(usersList)
// Inverser l'ordre des éléments de l'array
usersList.reverse();
console.log(usersList)
// Trier les éléments de l'array
usersList.sort();
console.log(usersList)
// Créer un array à partir d'une chaîne de caractères
let usersString = "John,Paul,George,Ringo";
let usersArray = usersString.split(",");
console.log(usersArray)
// Créer une chaîne de caractères à partir d'un array
let usersString2 = usersArray.join(",");
console.log(usersString2)

// parcoure l'array et affiche chaque élément
let listItems = ["Pommes", "Poires", "Bananes"];
console.log(listItems[0])
console.log(listItems[1])
console.log(listItems[2])
// parcoure l'array et affiche chaque élément
for (let i = 0; i < listItems.length; i++) {
    console.log(listItems[i])
}
for (let item of listItems) {
    console.log(item)
}
listItems.forEach(function(item) {
    console.log(item)
})
listItems.map(item => {
    console.log(item)
})

