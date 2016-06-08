function drawBoardtoCanvas(board) {
  const CELL_SIZE = 25;
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  // setup
  canvas.height = board.rows * CELL_SIZE;
  canvas.width = board.cols * CELL_SIZE;
  // endsetup
  // x = width, y = length
  board.eachCell(cell => {
    const startX = cell.x * CELL_SIZE;
    const startY = cell.y * CELL_SIZE;
    const endX = startX + CELL_SIZE;
    const endY = startY + CELL_SIZE;
    // console.log(`N:${cell.isLinked(cell.north)} S:${cell.isLinked(cell.south)} W:${cell.isLinked(cell.west)} E:${cell.isLinked(cell.east)}`)
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
  });
}

export default drawBoardtoCanvas;
