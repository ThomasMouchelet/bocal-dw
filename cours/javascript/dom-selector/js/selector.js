// Selectionner UN element
const elementTitle = document.querySelector('h1')
console.log("elementTitle : ", elementTitle)
const elementLi = document.querySelector('li')
console.log("elementLi : ", elementLi)
const list2 = document.querySelector('.list2')
const list22 = document.querySelector('ul:last-child')
const subElementLi = list2.querySelector('li')
console.log("subElementLi : ", subElementLi)

elementTitle.style.color = 'red'
elementTitle.innerText = 'Hello World Javascript'
elementTitle.innerHTML = 'Hello World <span>Javascript</span>'
let titleTest = "test"
elementTitle.innerHTML = `
    <div>
        <span>Hello World</span>
        <span class="test">${titleTest}</span>
    </div>
`

// elementTitle.remove()

// Selectionner PLUSIEURS elements
const elementsLi = document.querySelectorAll('li')
console.log("elementsLi : ", elementsLi)
const elementsLiList2 = document.querySelectorAll('.list2 li')
console.log("elementsLiList2 : ", elementsLiList2)

// elementsLi.style.color = 'red' // ERREUR

elementsLi.forEach((element) => {
    console.log("element in array : ", element)
    element.style.color = 'rgb(0, 0, 255)'
})


// Créer un element HTML
const newElement = document.createElement('li')
newElement.innerText = 'New Element'
console.log("newElement : ", newElement)
// Insertion dans le DOM
list2.append(newElement)
list2.prepend(newElement)

newElement.style.color = 'green'

const li1 = document.querySelector('.nav-bar li:nth-of-type(1)')
const li2 = document.querySelector('.nav-bar li:nth-of-type(2)')
const li3 = document.querySelector('.nav-bar li:nth-of-type(3)')

const listElementMenu = document.querySelectorAll('.nav-bar li')
console.log("listElementMenu : ", listElementMenu)

listElementMenu.forEach((elementLi) => {
    console.log("elementLi : ", elementLi)
    elementLi.style.backgroundColor = 'rgb(0, 0, 255)'
})