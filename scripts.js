//Variables globales con referencia a botones
let x16 = document.body.querySelector('.x16');
let x32 = document.body.querySelector('.x32');
let x48 = document.body.querySelector('.x48');
let x64 = document.body.querySelector('.x64');
let color = document.body.querySelector('.color');
let eraser = document.body.querySelector('.eraser');
let clear = document.body.querySelector('.clear');
let boardContainer = document.body.querySelector('.board-container');


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
boardContainer.addEventListener('mouseover', function(e) {
  if (activeDimensionButton!==0 && (e.target.className!=='board-container')) {
    e.target.style.backgroundColor = color.value;
  }
});

//Evento de goma de borrar
eraser.addEventListener('click', function() {
  if (activeDimensionButton!==0) {
    boardContainer.addEventListener('mouseover', function(e) {
      activeModeButton = 'eraser';
      e.target.style.backgroundColor = 'white';
    });
  }
});

//Evento de limpiar cuadrícula
clear.addEventListener('click', function() {
  if (activeDimensionButton!==0) {
    for (let i=0; i<(activeDimensionButton*activeDimensionButton); i++) {
      boardContainer.children[i].style.backgroundColor = 'white';
    }
  }
});

function createGrid(activeDimensionButton) {
  while(boardContainer.firstChild) {  //limpio grid anterior (si la hay)
    boardContainer.firstChild.remove();
  }
  //creo nueva grid
  boardContainer.style.setProperty('grid-template', `repeat(${activeDimensionButton}, 10px) / repeat(${activeDimensionButton}, 10px)`); 
  for (let i=0; i<activeDimensionButton; i++) {
    for (let j=0; j<activeDimensionButton; j++) {
      let div = document.createElement('div');
      div.style['border'] = 'solid 1px rgb(161, 161, 161)';
      boardContainer.prepend(div);
    }
  }
}













