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
  result.push(new Piece(0, 0, "rook", DARK_PLAYER))
  result.push(new Piece(0, 1, "knight", DARK_PLAYER))
  result.push(new Piece(0, 2, "bishop", DARK_PLAYER))
  result.push(new Piece(0, 3, "queen", DARK_PLAYER))
  result.push(new Piece(0, 4, "king", DARK_PLAYER))
  result.push(new Piece(0, 5, "bishop", DARK_PLAYER))
  result.push(new Piece(0, 6, "knight", DARK_PLAYER))
  result.push(new Piece(0, 7, "rook", DARK_PLAYER))
  result.push(new Piece(1, 0, "pawn", DARK_PLAYER))
  result.push(new Piece(1, 1, "pawn", DARK_PLAYER))
  result.push(new Piece(1, 2, "pawn", DARK_PLAYER))
  result.push(new Piece(1, 3, "pawn", DARK_PLAYER))
  result.push(new Piece(1, 4, "pawn", DARK_PLAYER))
  result.push(new Piece(1, 5, "pawn", DARK_PLAYER))
  result.push(new Piece(1, 6, "pawn", DARK_PLAYER))
  result.push(new Piece(1, 7, "pawn", DARK_PLAYER))
  result.push(new Piece(6, 0, "pawn", WHITE_PLAYER))
  result.push(new Piece(6, 1, "pawn", WHITE_PLAYER))
  result.push(new Piece(6, 2, "pawn", WHITE_PLAYER))
  result.push(new Piece(6, 3, "pawn", WHITE_PLAYER))
  result.push(new Piece(6, 4, "pawn", WHITE_PLAYER))
  result.push(new Piece(6, 5, "pawn", WHITE_PLAYER))
  result.push(new Piece(6, 6, "pawn", WHITE_PLAYER))
  result.push(new Piece(6, 7, "pawn", WHITE_PLAYER))
  result.push(new Piece(7, 0, "rook", WHITE_PLAYER))
  result.push(new Piece(7, 1, "knight", WHITE_PLAYER))
  result.push(new Piece(7, 2, "bishop", WHITE_PLAYER))
  result.push(new Piece(7, 3, "queen", WHITE_PLAYER))
  result.push(new Piece(7, 4, "king", WHITE_PLAYER))
  result.push(new Piece(7, 5, "bishop", WHITE_PLAYER))
  result.push(new Piece(7, 6, "knight", WHITE_PLAYER))
  result.push(new Piece(7, 7, "rook", WHITE_PLAYER))

  return result;
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