//Variables globales con referencia a botones
let x16 = document.body.querySelector('.x16');
let x32 = document.body.querySelector('.x32');
let x48 = document.body.querySelector('.x48');
let x64 = document.body.querySelector('.x64');
let clear = document.body.querySelector('.clear');
let gridContainer = document.body.querySelector('.grid-container');

//Otras variables globales
let activeDimensionButton = 0;
let activeModeButton = 0;

//Eventos de botones de medidas (crear Grid)
x16.addEventListener('click', function() {
  activeDimensionButton = 16;
  createGrid(16);
});
x32.addEventListener('click', function() {
  activeDimensionButton = 32;
  createGrid(32);
});
x48.addEventListener('click', function() {
  activeDimensionButton = 48;
  createGrid(48);
});
x64.addEventListener('click', function() {
  activeDimensionButton = 64;
  createGrid(64);
});

//Eventos de colorear div
gridContainer.addEventListener('mouseover', function(e) {
  if (activeDimensionButton!==0 && (e.target.className!=='grid-container')) {
    e.target.style.backgroundColor = 'black';
  }
});

//Evento de limpiar cuadrícula
clear.addEventListener('click', function() {
  if (activeDimensionButton!==0) {
    for (let i=0; i<(activeDimensionButton*activeDimensionButton); i++) {
      gridContainer.children[i].style.backgroundColor = 'white';
    }
  }
});

function createGrid(activeDimensionButton) {
  while(gridContainer.firstChild) {  //limpio grid anterior (si la hay)
    gridContainer.firstChild.remove();
  }
  //creo nueva grid
  gridContainer.style.setProperty('grid-template', `repeat(${activeDimensionButton}, 10px) / repeat(${activeDimensionButton}, 10px)`); 
  for (let i=0; i<activeDimensionButton; i++) {
    for (let j=0; j<activeDimensionButton; j++) {
      let div = document.createElement('div');
      div.style['border'] = 'solid 1px rgb(161, 161, 161)';
      gridContainer.prepend(div);
    }
  }
}













