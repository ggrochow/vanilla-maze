import {CELL_SIZE} from "./constants.js";

class Exit {
  draw(ctx) {
    const startX = this.cell.x * CELL_SIZE;
    const startY = this.cell.y * CELL_SIZE;
    ctx.fillStyle = 'green';
    ctx.fillRect(startX, startY, CELL_SIZE, CELL_SIZE);
    ctx.fillStyle = 'black';
  }
}


export default Exit;
