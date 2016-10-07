import Board from "./board.js";
import Player from "./player.js";
import huntAndKill from "./hunt_and_kill.js";
import drawBoardtoCanvas from "./canvas_presenter.js";
import {CELL_SIZE} from "./constants.js";

const board = new Board(25, 25);
const player = new Player();

board.prepare();
board.configureCells();
board.insertPlayer(player);
// board.insertExit();

huntAndKill(board);

document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('canvas');
  canvas.height = board.rows * CELL_SIZE;
  canvas.width = board.cols * CELL_SIZE;

  drawBoardtoCanvas(board);

  document.addEventListener('keydown', e => {
    switch (e.keyCode) {
      case 87: // w
      case 38: // up
        player.move('north');
        break;
      case 83: // s
      case 40: // down
        player.move('south');
        break;
      case 68: // d
      case 39: // right
        player.move('east');
        break;
      case 65: // a
      case 37: // left
        player.move('west');
        break;
    }
    drawBoardtoCanvas(board);
  });
});
