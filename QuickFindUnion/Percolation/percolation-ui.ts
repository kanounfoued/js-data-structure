import { availableCells, PercolateSystem } from "./index";

class GridUI {
  private grid: Array<Array<number>>;

  constructor(size: number) {
    let row: Array<Number> = new Array(8);
    row.fill(0);

    this.grid = row.map(() => Array<number>(size));

    for (let i = 0; i < this.grid.length; i++) {
      this.grid[i] = this.grid[i].fill(0);
    }
  }

  draw() {
    const grid = document.createElement("div");
    grid.classList.add("grid");
    const root = document.getElementById("root");

    if (!root) {
      return;
    }

    for (let row = 0; row < this.grid.length; row++) {
      const rowDiv = document.createElement("div");
      rowDiv.classList.add("row");

      for (let col = 0; col < this.grid.length; col++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        rowDiv.appendChild(cell);
      }

      grid.appendChild(rowDiv);
    }

    root.appendChild(grid);
  }
}

function main() {
  const n = 4;
  const percolateSystem = new PercolateSystem(n);
  const numberOfShoot = n * n;

  const ui_grid = new GridUI(n);
  ui_grid.draw();

  let cellRegister = availableCells(n);

  for (let i = 0; i < numberOfShoot; i++) {
    // let row = Math.floor(Math.random() * (cellRegister.length - 1));
    let row = undefined;

    do {
      row = Math.floor(Math.random() * cellRegister.length);
    } while (cellRegister[row].length === 0);

    const random = Math.floor(Math.random() * (cellRegister[row].length - 1));
    const randomNumber = cellRegister[row][random];

    const col = Math.floor(randomNumber - row * n);

    cellRegister[row].splice(random, 1);

    percolateSystem.open(row, col);
    const isPercolating = percolateSystem.percolates();

    if (isPercolating) {
      console.log("isPercolating", isPercolating);
      break;
    }
  }
}

main();
