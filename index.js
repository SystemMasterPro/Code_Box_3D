// Seleccionamos nustras clases a trabajar
const box = document.querySelector('.box');
const card = document.querySelector('.card');
const goku = document.querySelector('.card-character-img');
const title = document.querySelector('.card-info-title');
const subtitle = document.querySelector('.card-info-subtitle');
const buttons = document.querySelector('.card-info-seasons');
const watchButton = document.querySelector('.card-button');

// Evento encargado de dar medidas 
box.addEventListener('mousemove', (event) => {
  let x = (event.pageX - window.innerWidth / 2) / 25;
  let y = (window.innerHeight / 2 - event.pageY) / 25;

  card.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
});

// Evento al entrar a la caja 
box.addEventListener('mouseenter', (event) => {
  card.style.transition = 'all 0.2s ease';
  setTimeout(function (e) {
    card.style.transition = 'none';
  }, 400);

  addMouse([goku, title, subtitle, buttons, watchButton]);
});

// Evento al salir de la caja
box.addEventListener('mouseleave', (event) => {
  card.style.transition = 'transform 0.5s ease';
  card.style.transform = 'rotateY(0deg) rotateX(0deg)';

  removeMouse([goku, title, subtitle, buttons, watchButton]);
});

// Metodos utilizados para recorrer nuestro array y darles a nuestros elementos valores 
// Al entrar
function addMouse(elements) {
    elements.forEach(
        (element) => (element.style.transform = 'translateZ(100px)'));
}
// Al salir
function removeMouse(elements) {
    elements.forEach((element) => (element.style.transform = 'translateZ(0)'));
}
