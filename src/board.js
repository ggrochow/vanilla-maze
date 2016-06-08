import Cell from './cell';
import { sample } from './utils';

function Board(rows, cols) {
  this.rows = rows;
  this.columns = cols;
}

Board.prototype.size = function size() {
  return (this.rows * this.cols);
};

Board.prototype.prepare = function prepare() {
  this.grid = [];
  for (let row = 0; row < this.rows; row++) {
    const rowArray = [];
    for (let col = 0; col < this.columns; col++) {
      rowArray[col] = new Cell(row, col);
    }
    this.grid[row] = rowArray;
  }
};

Board.prototype.get = function get(row, col) {
  /*eslint-disable */ // TODO: fix this
  if ((row >= this.rows || row < 0) || (col >= this.columns || col < 0)) {
    return;
  } else {
    return this.grid[row][col];
  }
  /*eslint-enable */
};

Board.prototype.configureCells = function configureCells() {
  this.eachCell((cell) => {
    const row = cell.x;
    const col = cell.y;
    /*eslint-disable */ // TODO: fix this
    cell.north = this.get(row - 1, col);
    cell.south = this.get(row + 1, col);
    cell.west = this.get(row, col - 1);
    cell.east = this.get(row, col + 1);
    /*eslint-enable */
  });
};

Board.prototype.eachCell = function eachCell(cb) {
  this.grid.forEach(row => {
    row.some(cell => cb(cell));
  });
};

Board.prototype.eachRow = function eachRow(cb) {
  this.grid.forEach(row => cb(row));
};

Board.prototype.randomCell = function randomCell() {
  const randomRow = sample(this.grid);
  return sample(randomRow);
};

export default Board;
