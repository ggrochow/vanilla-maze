import Board from './board.js';
import huntAndKill from './hunt_and_kill.js';
import drawBoardtoCanvas from './canvas_presenter.js';

const board = new Board(25, 25);

board.prepare();
board.configureCells();
document.addEventListener('DOMContentLoaded', () => {
  huntAndKill(board);
  drawBoardtoCanvas(board);
});
