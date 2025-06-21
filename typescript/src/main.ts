import { PercolateSystem } from "./Percolation/percolation";
import { GridUI } from "./ui/grid-ui";
import getClosedCells from "./Percolation/track-closed-cells";

async function main() {
  const n = 10;
  const percolateSystem = new PercolateSystem(n);
  const numberOfShoot = (n * n) / 2 + 10;

  let unvisitedCells = getClosedCells(n);

  const ui_grid = new GridUI(n);

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

        ui_grid.openSite(row * n + col);

        clearTimeout(timer);
        resolve(null);
      }, 100);
    });
  }

  const indices = percolateSystem.percolates();

  if (indices) {
    console.log("Yes, it is percolating", indices);
  }

  console.log(percolateSystem.numberOfOpenSites());
}

main();
