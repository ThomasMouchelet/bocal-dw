const userListDOM = document.querySelector('#userList');

const playerList = [
    "ThomasDu33",
    "John", 
    "RoxerGamerDu13"
]
// index                 0          1         2
// playerList[0] // ThomasDu33
// playerList[1] // John
// playerList[2] // RoxerGamerDu13

function showPlayerCardListInDOM(){
    userListDOM.innerHTML = ""
    playerList.forEach( (player, index) => {
        console.log(`La valeur de l'index ${index} est ${player}`)
        console.log("playerList[index] : ", playerList[index])
    
        const playerCard = document.createElement("div")
        playerCard.classList.add("player")
    
        playerCard.innerHTML = `
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/archer.png" />
            <p>${player} is a archer</p>
            <p>lvl: 1</p>
            <div class="xp">
                <div class="bar"></div>
                <p></p>
            </div>
            <button class="up">+</button>
        `
        userListDOM.append(playerCard)
    })
}

// Au chargement de la page
showPlayerCardListInDOM()

// select form
const form = document.querySelector('form')
// add event listener form submit
form.addEventListener('submit', function(event){
    event.preventDefault()
    console.log("form submit")
    // select input
    const inputPseudo = document.querySelector('#pseudo')
    // get value of input
    const pseudoValue = inputPseudo.value
    // add value to playerList array
    playerList.push(pseudoValue)

    console.log("playerList : ", playerList)
    
    // foreach
    showPlayerCardListInDOM()
})
