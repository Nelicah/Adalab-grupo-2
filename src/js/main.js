'use strict';

console.log('>> Ready :)');

const menuHamburguer = document.querySelector('.menu');

const menuDisplay = document.querySelector('.menu_overview');

menuHamburguer.addEventListener('click', () => {
  menuDisplay.classList.remove('hidden');
});

const iconClose = document.querySelector('.close_window');

iconClose.addEventListener('click', () => {
  menuDisplay.classList.add ('hidden');
});


//const para formulario//
const mensaje = document.querySelector('.js-mensaje');
const nombre = document.querySelector('.js-nombre');
const edad = document.querySelector('.js-edad');
const fecha = document.querySelector('.js-fecha');
const hora = document.querySelector('.js-hora');
const email = document.querySelector('.js-email');
const telefono = document.querySelector('.js-telefono');
const boton = document.querySelector('.js-boton');
const homer = document.querySelector('.homer');

boton.addEventListener('click', (event) => {
  event.preventDefault(); 
  homer.style.display = 'none';
});
