import Board from "./board.js";
import Exit from "./exit.js";
import Player from "./player.js";
import BreadCrumb from "./breadcrumb";
import huntAndKill from "./hunt_and_kill.js";
import drawBoardToCanvas from "./canvas_presenter.js";
import {CELL_SIZE} from "./constants.js";
import {genSolve} from "./dijkstra.js";
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
        const gen = genSolve(player.cell, exit.cell);
        animateSolve(gen, board);
    });
});

function animateSolve(generator, board) {
    const crumbs = [];

    function step() {
        const next = generator.next();

        if (Array.isArray(next.value)) {
            const finalPath = next.value;
            const pathIds = finalPath.map(c => c.toString());

            crumbs.forEach(cell => {
                if (pathIds.includes(cell.toString())) {
                    const pathMarker = new Exit();
                    pathMarker.cell = cell;
                    cell.contents = pathMarker;
                } else {
                    delete cell.contents;
                }
            });

            crumbs[0].contents = player;
            crumbs[crumbs.length - 1].contents = exit;

            drawBoardToCanvas(board);
        } else {
            const cell = next.value;
            const crumb = new BreadCrumb();

            crumb.cell = cell;
            cell.contents = crumb;
            crumbs.push(cell);

            drawBoardToCanvas(board);
            if (!next.done) {
                setTimeout(() => step(generator, board), 5);
            }
        }
    }

    step();
}