function Cell(y, x) {
  this.x = x;
  this.y = y;
  this.links = [];
}

Cell.prototype.link = function link(cell, linkBoth = true) {
  this.links.push(cell);
  if (linkBoth) {
    cell.link(this, false);
  }
  return this;
};

Cell.prototype.unlink = function unlink(cell, unLinkBoth = true) {
  this.links = this.links.filter(c => c !== cell);
  if (unLinkBoth) {
    cell.unlink(this, false);
  }
  return this;
};

Cell.prototype.isLinked = function isLinked(cell) {
  return this.links.includes(cell);
};

Cell.prototype.neighbours = function neigbours() {
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
};

export default Cell;
