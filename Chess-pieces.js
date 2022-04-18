const BOARD_SIZE = 8;
const WHITE_TYPE = 'white';
const DARK_TYPE = 'dark_rotated';

let selectedCell;

function addImage(cell, type, name) {
  const image = document.createElement('img');
  image.src = 'images/' + type + '/' + name + '.png';
  cell.appendChild(image);
}

function addImageByIndex(cell, type, index) {
  if (index === 0 || index === 7) {
    addImage(cell, type, 'rook');
  } else if (index === 1 || index === 6) {
    addImage(cell, type, 'knight');
  } else if (index === 2 || index === 5) {
    addImage(cell, type, 'bishop');
  } else if (index === 3) {
    addImage(cell, type, 'queen');
  } else if (index === 4) {
    addImage(cell, type, 'king');
  }
}
function onCellClick(event) {
  if (selectedCell !== undefined) {
    selectedCell.classList.remove('selected');
  }
 selectedCell = event.currentTarget;
 selectedCell.classList.add('selected');
}

function createChessBoard() {
  const table1 = document.createElement('table');
  document.body.appendChild(table1);
  for (let i = 0; i < BOARD_SIZE; i++) {
    const row = table1.insertRow();
    for (let j = 0; j < BOARD_SIZE; j++) {
      const cell = row.insertCell();
      cell.id = "cell-" + i.toString() + "_" + j.toString();
      if ((i + j) % 2 === 0) {
        cell.className = 'light-cell';
      } else {
        cell.className = 'dark-cell';
      }
      cell.addEventListener('click', onCellClick);

      if (i === 0) {
        addImageByIndex(cell, DARK_TYPE, j);
      } else if (i === 1) {
        addImage(cell, DARK_TYPE, 'pawn');
      } else if (i === 6) {
        addImage(cell, WHITE_TYPE, 'pawn');
      } else if (i === 7) {
        addImageByIndex(cell, WHITE_TYPE, j);
      }
    }
  }
}
window.addEventListener('load', createChessBoard);
