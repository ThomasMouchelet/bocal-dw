const btn = document.querySelector('button');
const title = document.querySelector('h2')
const text = document.querySelector('p')
const body = document.querySelector('body')

let isDarkMode = false

btn.addEventListener('click', () => {
    console.log('clicked');
    console.log("Couleur actuel du bouton : ", btn.style.backgroundColor)
    
    if(isDarkMode == true){
        console.log('Le bouton est en blanc, on le passe en noir')
        btn.style.backgroundColor = 'rgb(0, 0, 0)'
        title.style.color = 'rgb(0, 0, 0)'
        text.style.color = 'rgb(0, 0, 0)'
        body.style.backgroundColor = 'rgb(255, 255, 255)'

        isDarkMode = false
    } else {
        console.log('Le bouton est en noir, on le passe en blanc')
        btn.style.backgroundColor = 'rgb(255, 255, 255)'
        title.style.color = 'rgb(255, 255, 255)'
        text.style.color = 'rgb(255, 255, 255)'
        body.style.backgroundColor = 'rgb(0, 0, 0)'

        isDarkMode = true
    }

    console.log('Dark mode : ', isDarkMode)
})