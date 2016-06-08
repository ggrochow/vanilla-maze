import Board from './board.js';

const board = new Board(10, 10);

board.prepare();
board.configureCells();

console.log(board);
