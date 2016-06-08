function Cell(x, y) {
  this.x = x;
  this.y = y;
  this.links = {};
}

Cell.prototype.link = function link(cell, linkBoth = true) {
  this.links[cell] = true;
  if (linkBoth) {
    cell.link(this);
  }
  return this;
};

Cell.prototype.unlink = function unlink(cell, unLinkBoth = true) {
  delete this.links[cell];
  if (unLinkBoth) {
    cell.unlink(this);
  }
  return this;
};

Cell.prototype.isLinked = function isLinked(cell) {
  return this.links[cell] || false;
};

Cell.prototype.neigbours = function neigbours() {
  return; // TODO
};

export default Cell;
