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
