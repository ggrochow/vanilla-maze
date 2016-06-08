import { CELL_SIZE } from './constants.js';

function Player() {
}

Player.prototype.draw = function draw(ctx) {
  const startX = this.cell.x * CELL_SIZE + 5;
  const startY = this.cell.y * CELL_SIZE + 5;

  ctx.fillRect(startX, startY, CELL_SIZE - 10, CELL_SIZE - 10);
};

Player.prototype.getDesiredCell = function getDesiredCell(direction) {
  let out;
  switch (direction) {
    case 'north':
      out = this.cell.north;
      break;
    case 'south':
      out = this.cell.south;
      break;
    case 'east':
      out = this.cell.east;
      break;
    case 'west':
      out = this.cell.west;
      break;
  }
  return out;
};

Player.prototype.move = function move(direction) {
  const desiredCell = this.getDesiredCell(direction);

  if (this.cell.isLinked(desiredCell)) {
    delete this.cell.contents;
    desiredCell.contents = this;
    this.cell = desiredCell;
  }
};

export default Player;
