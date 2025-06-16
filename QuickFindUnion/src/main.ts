import { availableCells, PercolateSystem } from "./Percolation/percolation";
import { GridUI } from "./ui/grid-ui";
import { CellUI } from "./ui/cell-ui";

import "./ui/index.css";

async function main() {
  const n = 10;
  const percolateSystem = new PercolateSystem(n);
  const numberOfShoot = (n * n) / 2 + 5;

  let unvisitedCells = availableCells(n);

  const ui_grid = new GridUI(n);
  ui_grid.draw();

  for (let i = 0; i < numberOfShoot; i++) {
    await new Promise((resolve) => {
      const timer = setTimeout(() => {
        let row = undefined;

        do {
          row = Math.floor(Math.random() * unvisitedCells.length);
        } while (row === undefined || unvisitedCells[row].length === 0);

        const random = Math.floor(
          Math.random() * (unvisitedCells[row].length - 1)
        );

        const randomNumber = unvisitedCells[row][random];

        const col = Math.floor(randomNumber - row * n);

        unvisitedCells[row].splice(random, 1);

        percolateSystem.open(row, col);

        const cellUI = new CellUI(row * n + col);
        cellUI.draw();

        clearTimeout(timer);
        resolve(null);
      }, 100);
    });
  }

  const isPercolating = percolateSystem.percolates();

  if (isPercolating) {
    console.log("Yes, it is percolating");
  }

  console.log(percolateSystem.numberOfOpenSites());
}

main();
