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

    checkInput(valueFirstName, 'firstName', inputFirstName);
    checkInput(valueLastName, 'lastName', inputLastName); 
})

function checkInput(value, inputName, input){
    const errorMessage = document.querySelector(`[data-error="${inputName}"]`);
    if(value.length <= 0){
        errorMessage.style.display = 'block';
    } else {
        errorMessage.style.display = 'none';
        input.value = ""
    }
}