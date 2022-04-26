class BoardData {
    constructor() {
      this.initPieces();
    }
  
    initPieces() {
      this.pieces = [];
  
      for (let i = 0; i < BOARD_SIZE; i++) {
        this.pieces.push(new Piece(0, i, PIECES[i], BLACK_PLAYER));
        this.pieces.push(new Piece(1, i, PAWN, BLACK_PLAYER));
        this.pieces.push(new Piece(6, i, PAWN, WHITE_PLAYER));
        this.pieces.push(new Piece(7, i, PIECES[i], WHITE_PLAYER));
      }
    }
  
    getPiece(row, col) {
      for (const piece of this.pieces) {
        if (piece.row === row && piece.col === col) {
          return piece;
        }
      }
    }
  
    removePiece(row, col) {
      for (let i = 0; i < this.pieces.length; i++) {
        const piece = this.pieces[i];
        if (piece.row === row && piece.col === col) {
          this.pieces.splice(i, 1);
        }
      }
    }
  
    isEmpty(row, col) {
      return this.getPiece(row, col) === undefined;
    }
    isPlayer(row, col, player) {
      const piece = this.getPiece(row, col);
      return piece !== undefined && piece.player === player;
    }
  }
  //TODO: 