const BOARD_SIZE = 8;
const WHITE_PLAYER = 'white';
const DARK_PLAYER = 'dark_rotated';

let selectedCell;
let pieces = [];

class Piece {
  constructor(row, col, type, player) {
    this.row = row;
    this.col = col;
    this.type = type;
    this.player = player;
  }
}

function getInitialBoard() {
  let result = [];
  addPieces(result, 0, DARK_PLAYER);
  addPieces(result, 7, WHITE_PLAYER);

  for (let i = 0; i < BOARD_SIZE ; i++) {
    result.push(new Piece(1, i, "pawn", DARK_PLAYER))
    result.push(new Piece(6, i, "pawn", WHITE_PLAYER))
  }
return result;
}
function addPieces(result, row, player) {
  result.push(new Piece(row, 0, "rook", player))
  result.push(new Piece(row, 1, "knight", player))
  result.push(new Piece(row, 2, "bishop", player))
  result.push(new Piece(row, 3, "queen", player))
  result.push(new Piece(row, 4, "king", player))
  result.push(new Piece(row, 5, "bishop", player))
  result.push(new Piece(row, 6, "knight", player))
  result.push(new Piece(row, 7, "rook", player))
}

function addImage(cell, player, name) {
  const image = document.createElement('img');
  image.src = 'images/' + player + '/' + name + '.png';
  cell.appendChild(image);
}

function addImageByIndex(cell, player, index) {
  if (index === 0 || index === 7) {
    addImage(cell, player, 'rook');
  } else if (index === 1 || index === 6) {
    addImage(cell, player, 'knight');
  } else if (index === 2 || index === 5) {
    addImage(cell, player, 'bishop');
  } else if (index === 3) {
    addImage(cell, player, 'king');
  } else if (index === 4) {
    addImage(cell, player, 'queen');
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
    }
  }
  pieces = getInitialBoard();

  for (let piece of pieces) {
    addImage(table1.rows[piece.row].cells[piece.col], piece.player, piece.type);
  }
}

window.addEventListener('load', createChessBoard);