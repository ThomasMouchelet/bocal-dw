const btn = document.querySelector('button')

console.log("Select btn : ", btn)

btn.addEventListener('mouseenter', function() {
  console.log("Click btn", this)
  const translateX = Math.random() * 100 / 2
  const translateY = Math.random() * 100 / 2

  this.style.transform = `translate(${translateX}vh, ${translateY}vw)`
})














// const btnList = document.querySelectorAll('button')
// console.log("Select btnList : ", btnList)

// btnList.forEach(function(btn) {
//     btn.addEventListener('mouseenter', function() {
//         console.log("Click btn", this)
//         this.style.background = "red"
//     })
// })