// ajouter un attribut src avec lien "images/Logo.png" sur l'élément img
const logo = document.querySelector('.logo');
console.log('logo : ', logo);

logo.src = "images/Logo.png"
logo.alt = "Blabla"

const menuLink1 = document.querySelector('.menu .menu-item:nth-of-type(1) a');
console.log('menuLink1 : ', menuLink1);

menuLink1.href = "https://www.google.com"
menuLink1.target = "__blank"

const menuLink2 = document.querySelector('.menu .menu-item:nth-of-type(2) a');
console.log('menuLink2 : ', menuLink2);

menuLink2.innerText = "Google"

const title = document.querySelector('#topHeadline');
console.log('title : ', title);
title.innerText = "Titre de mon article"

const philosophy = document.querySelector('#philosophy');
console.log('philosophy : ', philosophy);

const para1 = document.createElement('p');
console.log('para1 : ', para1);
para1.innerText = `Lorem ipsum dolor sit amet consectetur adipisicing elit.   Voluptatibus commodi et in, molestias aspernatur doloremque aliquid asperiores velit maxime quaerat. Aliquam, natus labore. Repellendus voluptates dicta officiis magnam voluptas! Dolorem?`

const titleH2 = document.querySelector('#philosophy h2:nth-of-type(2)');
philosophy.insertBefore(para1, titleH2)

titleH2.classList.add('subtitle')

const elementLi = document.createElement('li')
console.log('elementLi : ', elementLi);
elementLi.innerText = "Test insert with JS"

const philosophyList = document.querySelector('#philosophy ul');
philosophyList.append(elementLi)