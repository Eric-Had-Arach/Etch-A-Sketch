
// VARIABLES GLOBALES
let x16 = document.body.querySelector('.x16');
let x32 = document.body.querySelector('.x32');
let x48 = document.body.querySelector('.x48');
let x64 = document.body.querySelector('.x64');
let buttonColor = document.body.querySelector('.color');
let buttonEraser = document.body.querySelector('.eraser');
let buttonClear = document.body.querySelector('.clear');
let buttonRainBow = document.body.querySelector('.rainbow');
let boardContainer = document.body.querySelector('.board-container');
let activeDimensionButton = 0;
let activeModeButton = 0;



// FUNCIONES
function handlerButton16() {
  activeDimensionButton = 16;
  createGrid(16);
}

function handlerButton32() {
  activeDimensionButton = 32;
  createGrid(32);
}

function handlerButton48() {
  activeDimensionButton = 48;
  createGrid(48);
}

function handlerButton64() {
  activeDimensionButton = 64;
  createGrid(64);
}

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

function handlerEraser() {
  if (activeDimensionButton!==0) {
      activeModeButton = 'eraser';
  }
}

function handlerClear() {
  for (let i=0; i<(activeDimensionButton*activeDimensionButton); i++) {
    boardContainer.children[i].style.backgroundColor = 'white';
  }
}

function handlerRainbow() {
  if (activeDimensionButton!==0) {
    activeModeButton = 'rainbow';
  }
}



// EVENTOS
x16.addEventListener('click', handlerButton16);
x32.addEventListener('click', handlerButton32);
x48.addEventListener('click', handlerButton48);
x64.addEventListener('click', handlerButton64);

//Evento de selección de color
buttonColor.addEventListener('click', function() {
  activeModeButton = 'color';
});

//Evento de cursor sobre pizarra
boardContainer.addEventListener('mouseover', function(e) {
  if (activeDimensionButton!==0 && activeModeButton!==0 && (e.target.className!=='board-container')) {
    if (activeModeButton==='color') {
      e.target.style.backgroundColor = buttonColor.value;
    }
    else if (activeModeButton==='rainbow') {
      e.target.style.backgroundColor = `rgb(${Math.round(Math.random()*255)}, ${Math.round(Math.random()*255)}, ${Math.round(Math.random()*255)})`;
    }
    else if (activeModeButton==='eraser') {
      e.target.style.backgroundColor = 'white';
    }  
  }
});

//Evento de goma de borrar
buttonEraser.addEventListener('click', handlerEraser);

//Evento de rainbow
buttonRainBow.addEventListener('click', handlerRainbow);

//Evento de limpiar pizarra
buttonClear.addEventListener('click', handlerClear);
