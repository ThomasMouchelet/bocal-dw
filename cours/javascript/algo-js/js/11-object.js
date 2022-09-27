let user = {
    firstName: "John",
    lastName: "Doe",
    age: 23,
    email: "test@email.com"
}

console.log(user)
console.log("Prénom : ", user.firstName)

// Ajouter une propriété
user.isAdmin = true
console.log(user)
// Supprimer une propriété
delete user.age
console.log(user)
// Modifier la valeur d'une propriété
user.firstName = "Thomas"
console.log(user)

let userList = [
    {
        firstName: "John",
        lastName: "Doe",
        age: 23,
    },
    {
        firstName: "Jane",
        lastName: "Doe",
        age: 23,
    }
]

console.log(userList[1].firstName)

let post = {
    title: "Mon premier post",
    nbLikes: 10,
    comments: [
        {
            author: "Thomas",
            content: "Super article !"
        }
    ]
}


let voiture = {
    marque: "Peugeot",
    modele: "308",
    couleur: "Noir",
    options: [
        "Climatisation",
        "GPS",
        "Bluetooth"
    ],
    rouler: function(vitesse) {
        console.log(`La voiture roule vroum vroum à ${vitesse} km/h`)
    }
}

console.log(voiture.marque)
console.log(voiture.rouler(50))


let elementH1 = {
    tagName: "h1",
    innerHTML: "Mon titre",
    style: {
        color: "red",
        fontSize: "20px"
    }
}
