// lvl 1
// select button with class add-task
const btn = document.querySelector('.add-task');
console.log('btn ', btn)
// select ul element
const list = document.querySelector('#list-tasks');
console.log('list ', list);
let counter = 0
const h2 = document.querySelector('h2');
h2.innerText = showTitleWithCounter()

function showTitleWithCounter(){
    return `${counter} task${counter > 1 ? "s" : ""}`;
}

// detect click event on button
btn.addEventListener('click', function() { 
    console.log('clicked');
    counter++
    h2.innerText = showTitleWithCounter()
    // create element li
    const liElement = document.createElement('li');
    liElement.classList.add('task');
    console.log('liElement ', liElement);
    // insert text into li (innerText)
    liElement.innerText = `Task ${counter}`;
    // insert li element into ul element (append)
    list.append(liElement);
 })

// lvl 2
// in task inneText show number : 
// task 1
// task 2
// task 3

// lvl 3
// show counter of all tasks
// 3 tasks
// 4 tasks
// ...
// si 1 task
// else 2 tasks