const title = document.querySelector('.title-primary')
console.log(title)

title.style.color = 'red'
title.textContent = "<span>Title js textContent</span>"
// title.innerText = "<span>Title js innerText</span>"
// title.innerHTML = "<span>Title js innerHTML</span>"


title.addEventListener('click', function(){
    console.log('click')
})


const cardElement = document.querySelector('.card') // return html object
console.log("querySelector cardElement", cardElement)
cardElement.style.backgroundColor = 'red'

const cardElementList = document.querySelectorAll('.card')
console.log("querySelectorAll cardElementList", cardElementList)
// cardElementList.style.color = "blue" // error

const sizePolice = 50

cardElementList.forEach((cardElement) => {
  cardElement.style.color = "blue"
  cardElement.style.fontSize = `${sizePolice}px`

  cardElement.addEventListener('click', function(){
    console.log('click cardElement')
    cardElement.style.color = "green"
  })

})



// document.getElementById('title') // Object HTML
// document.getElementsByClassName('card') // NodeList
// document.getElementsByName('div') // NodeList
// document.getElementsByTagName('div') // NodeList


const form = document.querySelector('form')
const imgInput = document.querySelector('#img-input')
const imgElement = document.querySelector('img')

form.addEventListener('submit', function(event){
    event.preventDefault()
    console.log('submit')
    const sourceImg = imgInput.value
    console.log(sourceImg)
    imgElement.src = sourceImg
})

const nbGoal = document.querySelector('#nbGoal')
const typePlayer = document.querySelector('#typePlayer')

nbGoal.style.display = 'none'

typePlayer.addEventListener('change', function(){
    console.log("typePlayer.value : ", typePlayer.value)

    const typePlayerValue = typePlayer.value

    if(typePlayerValue == "attaquant"){
      nbGoal.style.display = 'inline-block'
    } else {
      nbGoal.style.display = 'none' 
    }
})