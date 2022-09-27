const addBtn = document.querySelector('button')
console.log("addBtn : ", addBtn)
const shopperList = document.querySelector('#shopperList')
console.log("shopperList : ", shopperList)

addBtn.addEventListener('click', function() {
    console.log('addBtn clicked')

    const liElement = document.createElement('li')
    liElement.classList.add("animate__animated", 'animate__bounceInUp')
    const inputElement = document.createElement('input')    
    inputElement.placeholder = "Entrez votre article"

    // create element i
    const iElement = document.createElement('i')
    // add class fa-solid and fa-square-minus
    iElement.classList.add('fa-solid', "fa-square-minus")
    // insert i element in li element

    liElement.append(iElement)
    liElement.prepend(inputElement)
    shopperList.prepend(liElement)

    // add event listener on i element
    iElement.addEventListener('click', function(){
        console.log('Click on i element')
        liElement.classList.remove("animate__animated", "animate__bounceInUp")
        liElement.classList.add('animate__animated', "animate__shakeX")
        inputElement.style.textDecoration = "line-through"
    })

    // create element i
    const removeBtn = document.createElement('i')
    // add class fa-solid and fa-trash
    removeBtn.classList.add('fa-solid', "fa-trash")
    // insert i element in li element
    liElement.append(removeBtn)
    // add event listener on i element
    removeBtn.addEventListener("click", function(){
        // remove li element
        // liElement.classList.add('remove')

        liElement.classList.add('animate__animated', 'animate__fadeOutLeft')
        setTimeout(function(){
            liElement.remove()
        }, 400)
    })

        // LVL 2
        // effet de slide
})