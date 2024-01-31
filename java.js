const header = document.querySelector("header");
window.addEventListener("scroll" , function(){
header.classList.toggle("sticky" ,window.scrollY > 70);
});



let menu = document.querySelector('#menu');
let nav = document.querySelector('.nav');

menu.onclick = () => {
menu.classList.toggle('bx-x');
nav.classList.toggle('open');



};