export default function solve(grid, start, end) {
  const visitedCells = {};
  const knownCells = {
    //cell.toString() - { cell, dist, closestNeighbour }
  };
  knownCells[start.toString()] = {cell: start, dist: 0, prev: null};

  while (!Object.keys(visitedCells).includes(end.toString())) {
    const cellHash = getNextCell(knownCells);
    const cell = cellHash.cell;
    const neighbours = cell.neighbours().filter(n => {
      const hasVisted = !Object.keys(visitedCells).includes(n.toString());
      const isLinked = cell.isLinked(n);
      return hasVisted && isLinked;
    });

    neighbours.forEach(n => {
      knownCells[n.toString()] = {cell: n, dist: cellHash.dist + 1, prev: cell};
    });
    visitedCells[cell.toString()] = cellHash;
    delete knownCells[cell.toString()];
  }

  const path = [];
  let currentPos = end;
  while (!path.includes(start)) {
    path.push(currentPos);
    const cellHash = visitedCells[currentPos.toString()];
    currentPos = cellHash.prev;
  }
  return path;
}


function getNextCell(knownCells) {
  const cells = Object.values(knownCells).sort((a, b) => {
    return a.dist - b.dist;
  });

  return cells[0];
}
