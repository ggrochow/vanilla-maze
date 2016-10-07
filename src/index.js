import Board from "./board.js";
import Exit from "./exit.js";
import Player from "./player.js";
import huntAndKill from "./hunt_and_kill.js";
import drawBoardToCanvas from "./canvas_presenter.js";
import {CELL_SIZE} from "./constants.js";
import solve from "./dijkstra.js";
const board = new Board(25, 25);
const player = new Player();
const exit = new Exit();

board.prepare();
board.configureCells();
board.insertObject(player);
board.placeExit(exit);

huntAndKill(board);

document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('canvas');
  canvas.height = board.rows * CELL_SIZE;
  canvas.width = board.cols * CELL_SIZE;

  drawBoardToCanvas(board);

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
    drawBoardToCanvas(board);
  });

  const solveButton = document.getElementById('solveButton');
  solveButton.addEventListener('click', () => {
    const path = solve(board, player.cell, exit.cell).reverse();
    for (let i = 0; i < path.length; i++) {
      setTimeout(() => {
        const cell = path[i];
        const breadCrumbs = new Player();
        cell.contents = breadCrumbs;
        breadCrumbs.cell = cell;

        drawBoardToCanvas(board);
      }, 100 * i)
    }
  });
});
