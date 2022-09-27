const titleH1 = document.querySelector("h1")

console.log("titleH1: ", titleH1)

const containerElement = document.querySelector("#container")

console.log("Container id element : ", containerElement)

containerElement.style.backgroundColor = "red"

titleH1.addEventListener("click", function(){
    console.log("You clicked the title")
    containerElement.style.backgroundColor = "blue"
})


document.addEventListener("keydown", function(event){
    console.log("You pressed a key")
    console.log(event.keyCode)

    if(event.keyCode === 40){
        containerElement.style.position = "absolute"
        containerElement.style.bottom = "-300px"
    }
})