const btn = document.querySelector('button');
btn.style.backgroundColor = 'rgb(0, 0, 0)';

const title = document.querySelector('h2')
const text = document.querySelector('p')
const body = document.querySelector('body')

btn.addEventListener('click', () => {
    console.log('clicked');
    console.log("Couleur actuel du bouton : ", btn.style.backgroundColor)
    
    // Si le boutton est en blanc
    if(btn.style.backgroundColor == 'rgb(255, 255, 255)'){
        // on le passe en noir
        console.log('Le bouton est en blanc, on le passe en noir')
        btn.style.backgroundColor = 'rgb(0, 0, 0)'
        // Mettre le titre en noir
        title.style.color = 'rgb(0, 0, 0)'
        // Mettre le texte en noir
        text.style.color = 'rgb(0, 0, 0)'
        // Mettre le fond du body en blanc
        body.style.backgroundColor = 'rgb(255, 255, 255)'
    } else { // Sinon
        // on le passe en blanc
        console.log('Le bouton est en noir, on le passe en blanc')
        btn.style.backgroundColor = 'rgb(255, 255, 255)'
        // Mettre le titre en blanc
        title.style.color = 'rgb(255, 255, 255)'
        // Mettre le texte en blanc
        text.style.color = 'rgb(255, 255, 255)'
        // Mettre le fond du body en noir
        body.style.backgroundColor = 'rgb(0, 0, 0)'
    }
})