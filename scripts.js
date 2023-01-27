//Referencias a botones de medidas
let x16 = document.body.querySelector('.x16');
let x32 = document.body.querySelector('.x32');
let x48 = document.body.querySelector('.x48');
let x64 = document.body.querySelector('.x64');

//Referencia a la cuadrícula
let gridContainer = document.body.querySelector('.grid-container');

//Eventos de botones de medidas (crear Grid)
x16.addEventListener('click', function() {
  createGrid(16);
});
x32.addEventListener('click', function() {
  createGrid(32);
});
x48.addEventListener('click', function() {
  createGrid(48);
});
x64.addEventListener('click', function() {
  createGrid(64);
});

//Eventos de pintar div


function createGrid(quantity) {
  while(gridContainer.firstChild) {
    gridContainer.firstChild.remove();
  }
  gridContainer.style.setProperty('grid-template', `repeat(${quantity}, 10px) / repeat(${quantity}, 10px)`);
  for (let i=0; i<quantity; i++) {
    for (let j=0; j<quantity; j++) {
      let div = document.createElement('div');
      div.style['border'] = 'solid 1px rgb(119, 118, 118)';
      gridContainer.prepend(div);
    }
  }
}

function paint() {

}





