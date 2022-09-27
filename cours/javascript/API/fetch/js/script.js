// HTTPS
// GET recevoir
// POST envoyer
// PUT modifier
// DELETE supprimer

// JSON
// [{}, {}, {}]

// API REST



function getPokemon(pokemonName){
    console.log("getPokemon : ", pokemonName)
    // fetch
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        const name = data.name
        console.log("name : ", name)
        const title = document.querySelector("h2")
        title.innerHTML = name
        console.log(data.sprites.front_default)
        const imageURL = data.sprites.front_default
        const imageDOM = document.querySelector("img")
        imageDOM.src = imageURL
    });
}

// select form element
const form = document.querySelector("form")
console.log("form : ", form)
// add event listener on form element
form.addEventListener("submit", function(event) {
    // prevent default behavior
    event.preventDefault()
    console.log("form submitted")
    // get value from input
    const input = document.querySelector("input")
    const inputValue = input.value
    console.log("inputValue : ", inputValue)
    getPokemon(inputValue)

    localStorage.setItem("pokemonName", inputValue)
})


const pokemonNameStorage = localStorage.getItem("pokemonName")
getPokemon(pokemonNameStorage)


navigator.geolocation.getCurrentPosition(function(position) {
    console.log("position : ", position)

    const latitude = position.coords.latitude
    const longitude = position.coords.longitude

    mapboxgl.accessToken = 'pk.eyJ1IjoidGhvbWFzMzMiLCJhIjoiY2pzYWFpcXNwMDAxbzN5cGZneGxia3U3ZCJ9.sigYT2nlLnC1siycJ3im-Q';
    const map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/streets-v11', // style URL
        center: [longitude, latitude], // starting position [lng, lat]
        zoom: 16 // starting zoom
    });

    const marker = new mapboxgl.Marker()
        .setLngLat([longitude, latitude])
        .addTo(map);



})

