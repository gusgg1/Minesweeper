

export class Board {
  constructor(numberOfRows, numberOfColums, numberOfBombs) {
    this._numberOfBombs = numberOfBombs;
    this._numberOfTiles = numberOfRows * numberOfColums;
    this._playerBoard = Board.generatePlayerBoard(numberOfRows, numberOfColums);
    this._bombBoard = Board.generateBombBoard(numberOfRows, numberOfColums, numberOfBombs);
  }

  get playerBoard() {
    return this._playerBoard;
  }

  get bombBoard() {
    return this._bombBoard;
  }

  flipTile(rowIndex, columnIndex) {
    if (this._playerBoard[rowIndex][columnIndex] === '') {
      console.log('This tile has already been flipped!');
      return;
    } else if (this._bombBoard[rowIndex][columnIndex] === 'B') {
      this._playerBoard[rowIndex][columnIndex] = 'B';
    } else {
      this._playerBoard[rowIndex][columnIndex] = this.getNumberOfNeighborBombs(rowIndex, columnIndex);
    }
    this._numberOfTiles--;
  } 

  // Func calculates the number of adjacent bombs at the given rowIndex and columnIndex on the provided board:  
  getNumberOfNeighborBombs(rowIndex, columnIndex) {
    const neighborOffsets = [
      [-1, -1],
      [-1, 0],
      [-1, 1],
      [0, -1],
      [0, 1],
      [1, -1],
      [1, 0],
      [1, 1]
    ];
    const numberOfRows = this.bombBoard.length;
    const numberOfColums = this.bombBoard[0].length;
    let numberOfBombs = 0;
  
    neighborOffsets.forEach(offset => {
      const neighborRowIndex = rowIndex + offset[0];
      const neighborColumnIndex = columnIndex + offset[1];
      if (neighborRowIndex >= 0 && neighborRowIndex < numberOfRows && neighborColumnIndex >= 0 && neighborColumnIndex < numberOfColums) {
        if (this.bombBoard[neighborRowIndex][neighborColumnIndex] === 'B') {
          numberOfBombs ++;
        }
      }
    });
    return numberOfBombs;
  }  

  hasSafeTiles() {
    return this._numberOfTiles !== this._numberOfBombs;
  }

  print() {
    // map() will return an arr of formatted rows.
    console.log(this.playerBoard.map(row => row.join(' | ')).join('\n'));
  }

  static generatePlayerBoard(numberOfRows, numberOfColums) {
    let board = [];
  
    for (let i = 0; i < numberOfRows; i++) {
      let row = [];
  
      for (let j = 0; j < numberOfColums; j++) {
        row.push(' ');
      }
      board.push(row);
    }
    return board;
  }  

  static generateBombBoard(numberOfRows, numberOfColums, numberOfBombs) {
    let board = [];
  
    for (let i = 0; i < numberOfRows; i++) {
      let row = [];
  
      for (let j = 0; j < numberOfColums; j++) {
        row.push(null);
      }
      board.push(row);
    }
  
    let numberOfBombsPlaced = 0;
    while (numberOfBombsPlaced < numberOfBombs) {
      // An important note: The code in your while loop has the potential to place bombs on top of already existing bombs. This will be fixed when you learn about control flow.
      let randomRowIndex = Math.floor(Math.random() * numberOfRows);
      let randomColumIndex = Math.floor(Math.random() * numberOfColums);
  
      if(board[randomRowIndex][randomColumIndex] !== 'B') {
        board[randomRowIndex][randomColumIndex] = 'B';
        numberOfBombsPlaced++;      
      }
    }
    return board;
  }  

} // end of class