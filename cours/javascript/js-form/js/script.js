const form = document.querySelector('form');
const inputFirstName = document.querySelector('#input-firstName');
const showFirstName = document.querySelector('#show-firstName');
const inputLastName = document.querySelector('#input-lastName');
const showLastName = document.querySelector('#show-lastName');

form.addEventListener('submit', function(event){
    event.preventDefault();
    
    const valueFirstName = inputFirstName.value;
    showFirstName.innerText = valueFirstName;

    const valueLastName = inputLastName.value;
    showLastName.innerText = valueLastName;

    if(valueFirstName.length <= 0){
        console.log('Le prénom est vide');
        const errorMessage = document.querySelector('[data-error="firstName"]');
        console.log("errorMessage", errorMessage);
        errorMessage.style.display = 'block';
    } else {
        const errorMessage = document.querySelector('[data-error="firstName"]');
        errorMessage.style.display = 'none';
        inputFirstName.value = ""
    }

    if(valueLastName.length <= 0){
        console.log('Le nom est vide');
        const errorMessage = document.querySelector('[data-error="lastName"]')
        console.log("errorMessage", errorMessage);
        errorMessage.style.display = 'block';
    } else {
        const errorMessage = document.querySelector('[data-error="lastName"]')
        errorMessage.style.display = 'none';
        inputLastName.value = ""
    }
})
