const itemListContainer = document.querySelector('#items');
const form = document.querySelector('form');
const inputText = document.querySelector('input[type="text"]');
const inputNumber = document.querySelector('input[type="number"]');

const listItem = []

form.addEventListener('submit', function(event){
    event.preventDefault();
    console.log("Form event submit");

    const userValueText = inputText.value
    console.log("userValueText : ", userValueText);
    // Récupérer la valeur de l'input number
    const userValueNumber = inputNumber.value
    console.log("userValueNumber : ", userValueNumber);
    // Création d'un objet
    const item = {
        text: userValueText,
        quantity: userValueNumber
    }
    // Ajouter une nouvelle valeur dans le tableau
    listItem.push(item);

    console.log("listItem : ", listItem);

    itemListContainer.innerText = ""
    listItem.forEach(item => {
        console.log("Item in foreach : ", item)
        const li = document.createElement('li');
        li.textContent = `${item.text} : ${item.quantity}`;
        itemListContainer.append(li);
    })
})