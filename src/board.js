import Cell from "./cell";
import {sample} from "./utils";

class Board {
    constructor(rows = 10, cols = 10) {
        this.rows = rows;
        this.cols = cols;

        this.grid = [];
        for (let row = 0; row < this.rows; row++) {
            const rowArray = [];
            for (let col = 0; col < this.cols; col++) {
                rowArray[col] = new Cell(row, col);
            }
            this.grid[row] = rowArray;
        }
    }

    insertObject(object) {
        const cell = this.randomCell();
        cell.contents = object;
        object.cell = cell;
    }

    placeExit(object) {
        // TODO: random placement.
        const cell = this.get(0, 0);
        cell.contents = object;
        object.cell = cell;
    }

    get(row, col) {
        if ((row >= this.rows || row < 0) || (col >= this.cols || col < 0)) {
            return;
        }
        return this.grid[row][col];
    }

    configureCells() {
        this.eachCell(cell => {
            const row = cell.y;
            const col = cell.x;

            cell.north = this.get(row - 1, col);
            cell.south = this.get(row + 1, col);
            cell.west = this.get(row, col - 1);
            cell.east = this.get(row, col + 1);
        });
    }

    eachCell(cb) {
        this.grid.forEach(row => {
            row.some(cell => cb(cell));
        });
    }

    randomCell() {
        const randomRow = sample(this.grid);
        return sample(randomRow);
    }
}


export default Board;
