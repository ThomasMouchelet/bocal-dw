const body = document.querySelector('body')
const btn = document.querySelector('button')

btn.addEventListener('click', function(){
    this.style.backgroundColor = generateRgb("btn")
    body.style.backgroundColor = generateRgb("body")
})

function randomNumber(){
    return Math.floor(Math.random() * 255)
}

function generateRgb(){
    const color1 = randomNumber()
    const color2 = randomNumber()
    const color3 = randomNumber()
    
    return `rgb(${color1}, ${color2}, ${color3})`
}

