class Cell {
  constructor(y, x) {
    this.y = y;
    this.x = x;
    this.links = [];
  }

  link(cell, linkBoth = true) {
    this.links.push(cell);
    if (linkBoth) {
      cell.link(this, false);
    }
    return this;
  }

  unlink(cell, unlinkBoth = true) {
    this.links = this.links.filter(c => c !== cell);
    if (unlinkBoth) {
      cell.unlink(this, false);
    }
    return this;
  }

  isLinked(cell) {
    return this.links.includes(cell);
  }

  neighbours() {
    const neighbourArray = [];
    if (this.north) {
      neighbourArray.push(this.north);
    }
    if (this.south) {
      neighbourArray.push(this.south);
    }
    if (this.east) {
      neighbourArray.push(this.east);
    }
    if (this.west) {
      neighbourArray.push(this.west);
    }
    return neighbourArray;
  }
}

export default Cell;
