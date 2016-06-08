import Board from './board.js';
import huntAndKill from './hunt_and_kill.js';
const board = new Board(10, 10);

board.prepare();
board.configureCells();
huntAndKill(board);
console.log(board.randomCell());
