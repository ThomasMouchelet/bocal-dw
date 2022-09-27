const openBtn = document.querySelector('.open');
const modal = document.querySelector('#modal');
const closeBtn = document.querySelector('#close');

openBtn.addEventListener("click", function(){
    console.log("Open button clicked");
    modal.style.display = "block"
    openBtn.style.backgroundColor = "green"
})

closeBtn.addEventListener('click', function(){
    modal.style.display = "none"
    openBtn.style.backgroundColor = "lightgrey"
})


