import { sample } from './utils';
import drawBoardtoCanvas from './canvas_presenter.js';

function huntAndKill(board) {
  let neighbour;
  let current = board.randomCell();
  while (current !== null) {
    const unvisitedNeighbours = current.neighbours().filter(cell => Object.keys(cell.links).length === 0);
    if (unvisitedNeighbours.length > 0) {
      neighbour = sample(unvisitedNeighbours);
      current.link(neighbour);
      current = neighbour;
    } else {
      current = null;

      board.eachCell(cell => {
        const visitedNeighbours = cell.neighbours().filter(innerCell => Object.keys(innerCell.links).length !== 0);
        if (Object.keys(cell.links).length === 0 && visitedNeighbours.length !== 0) {
          current = cell;
          neighbour = sample(visitedNeighbours);
          current.link(neighbour);

          return true; // TODO handle this better, currently we use some to break the eachCell loop, i think thats what im doing here.
        }
      });
    }
  }
  return board;
}


export default huntAndKill;
