import { CELL_SIZE } from './constants.js';

function drawBoardtoCanvas(board) {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.height, canvas.width);

  board.eachCell(cell => {
    const startX = cell.x * CELL_SIZE;
    const startY = cell.y * CELL_SIZE;
    const endX = startX + CELL_SIZE;
    const endY = startY + CELL_SIZE;

    // Draw borders
    ctx.beginPath();
    if (!(cell.isLinked(cell.north))) {
      ctx.moveTo(startX, startY);
      ctx.lineTo(endX, startY);
    }
    if (!(cell.isLinked(cell.south))) {
      ctx.moveTo(startX, endY);
      ctx.lineTo(endX, endY);
    }
    if (!(cell.isLinked(cell.east))) {
      ctx.moveTo(endX, startY);
      ctx.lineTo(endX, endY);
    }
    if (!(cell.isLinked(cell.west))) {
      ctx.moveTo(startX, startY);
      ctx.lineTo(startX, endY);
    }
    ctx.stroke();

    // Draw player
    if (cell.contents) {
      cell.contents.draw(ctx);
    }
  });
}

export default drawBoardtoCanvas;
