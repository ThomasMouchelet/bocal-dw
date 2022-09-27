const form = document.querySelector('form')
const firstNameInput = document.querySelector('#firstName')
const lastNameInput = document.querySelector('#lastName')
const userListElement = document.querySelector('#userList')
const emailInput = document.querySelector('#email')
const phoneNumberInput = document.querySelector('#phoneNumber')

const userList = []

form.addEventListener('submit', (event) => {
    event.preventDefault()
    console.log('Form submitted')

    const user = {
        firstName: firstNameInput.value,
        lastName: lastNameInput.value,
        email: emailInput.value,
        phoneNumber: phoneNumberInput.value,
        description : function(){
            return `${this.firstName} ${this.lastName} ${this.email} ${this.phoneNumber}`
        }
    }
    // Add the object to the userList array
    userList.push(user)

    console.log("userList : ", userList)

    userListElement.innerHTML = ''
    userList.forEach((user) => {
        const li = document.createElement('li')
        li.textContent = user.description()
        // Create element button
        const deleteBtn = document.createElement('button')
        // Add text to button
        deleteBtn.textContent = 'Delete'
        // append button to li
        li.append(deleteBtn)

        // addEventlistener to button
        deleteBtn.addEventListener('click', (event) => {
            console.log('Delete button clicked')
            const indexOfUser = userList.indexOf(user)
            console.log('indexOfUser : ', indexOfUser)
            // remove user into userList array
            userList.splice(indexOfUser, 1)
            console.log('userList : ', userList)
            li.remove()
        })
        userListElement.append(li)
    })
})