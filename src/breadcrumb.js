import {CELL_SIZE} from "./constants";

class BreadCrumb {
    draw(ctx) {
        const startX = this.cell.x * CELL_SIZE;
        const startY = this.cell.y * CELL_SIZE;
        ctx.fillStyle = 'blue';
        ctx.fillRect(startX, startY, CELL_SIZE, CELL_SIZE);
        ctx.fillStyle = 'black';
    }
}

export default BreadCrumb;