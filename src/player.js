import {CELL_SIZE} from "./constants.js";

class Player {
  draw(ctx) {
    const startX = this.cell.x * CELL_SIZE + 5;
    const startY = this.cell.y * CELL_SIZE + 5;

    ctx.fillRect(startX, startY, CELL_SIZE - 10, CELL_SIZE - 10);
  }

  getDesiredCell(direction) {
    switch (direction) {
      case 'north':
        return this.cell.north;

      case 'south':
        return this.cell.south;

      case 'east':
        return this.cell.east;

      case 'west':
        return this.cell.west;
    }
  }

  move(direction) {
    const desiredCell = this.getDesiredCell(direction);

    if (this.cell.isLinked(desiredCell)) {
      delete this.cell.contents;
      desiredCell.contents = this;
      this.cell = desiredCell;
    }
  }
}


export default Player;
