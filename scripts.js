//Referencias globales
let x16 = document.body.querySelector('.x16');
let x32 = document.body.querySelector('.x32');
let x48 = document.body.querySelector('.x48');
let x64 = document.body.querySelector('.x64');
let gridContainer = document.body.querySelector('.grid-container');

//Variables globales
let activeButton = 0;

//Eventos de botones de medidas (crear Grid)
x16.addEventListener('click', function() {
  activeButton = 16;
  createGrid(16);
});
x32.addEventListener('click', function() {
  activeButton = 32;
  createGrid(32);
});
x48.addEventListener('click', function() {
  activeButton = 48;
  createGrid(48);
});
x64.addEventListener('click', function() {
  activeButton = 64;
  createGrid(64);
});

function createGrid(activeButton) {
  while(gridContainer.firstChild) {  //limpio grid anterior (si la hay)
    gridContainer.firstChild.remove();
  }
  //creo nueva grid
  gridContainer.style.setProperty('grid-template', `repeat(${activeButton}, 10px) / repeat(${activeButton}, 10px)`); 
  for (let i=0; i<activeButton; i++) {
    for (let j=0; j<activeButton; j++) {
      let div = document.createElement('div');
      div.style['border'] = 'solid 1px rgb(161, 161, 161)';
      gridContainer.prepend(div);
    }
  }
}



//Eventos de pintar div
//gridContainer.addEventListener('mouseover', function() {
  if (activeButton!==0) {
    if (activeButton===16) {
      for (let i=0; i<(16*16); i++) {
        gridContainer.children[i].addEventListener('mouseover', function() {
          gridContainer.children[i].style.backgroundColor = 'black';
        }); 
      } 
    }
    else if (activeButton===32) {
      for (let i=0; i<(32*32); i++) {
        gridContainer.children[i].addEventListener('mouseover', function() {
          gridContainer.children[i].style.backgroundColor = 'black';
        }); 
      } 
    } 
    else if (activeButton===48) {
      for (let i=0; i<(48*48); i++) {
        gridContainer.children[i].addEventListener('mouseover', function() {
          gridContainer.children[i].style.backgroundColor = 'black';
        }); 
      } 
    } 
    else if (activeButton===64) {
      for (let i=0; i<(64*64); i++) {
        gridContainer.children[i].addEventListener('mouseover', function() {
          gridContainer.children[i].style.backgroundColor = 'black';
        }); 
      } 
    }  
  }









