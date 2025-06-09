import { WeightedQuickUnionWithPathCompression } from "../WeightedQuickUnionWithPathCompression";
import { GridCellNeighbor } from "./GridCellNeighbor";

export class PercolateSystem {
  private grid: number[][];
  private numOfOpenSites: number;
  private weightedQuickUnion: WeightedQuickUnionWithPathCompression;
  private gridCell: GridCellNeighbor;

  /**
   * all the grid is initialized with 0
   * 0 means blocked
   * 1 means open
   * 2 means full
   */

  /**
   *
   * the system is a representation of a grid n by n
   * all of them are blocked.
   *
   *  every time new coordinates get injcted into the system and try to test if it percolates.
   */
  constructor(n: number) {
    this.weightedQuickUnion = new WeightedQuickUnionWithPathCompression(n * n);
    this.gridCell = new GridCellNeighbor(n);
    this.numOfOpenSites = 0;

    this.grid = Array<number>(n)
      .fill(0)
      .map(() => Array<number>(n).fill(0));
  }

  // opens the site (row, col) if it is not open already
  public open(row: number, col: number) {
    if (this.grid[row][col] === 1) {
      return;
    }

    this.grid[row][col] = 1;
    this.numOfOpenSites++;

    // get the neighbors of the current position.
    const neighbors = this.gridCell
      .getNeighbors(row, col)
      .filter((cell) => this.isOpen(cell.row, cell.col));

    if (neighbors.length === 0) {
      return;
    }

    for (const neighbor of neighbors) {
      this.weightedQuickUnion.union(
        row * this.grid.length + col,
        neighbor.row * this.grid.length + neighbor.col
      );
    }
  }

  // is the site (row, col) open?
  public isOpen(row: number, col: number) {
    return this.grid[row][col] === 1;
  }

  // is the site (row, col) full?
  // it needs to verify if there is a path from the current position to the top row.
  public isFull(row: number, col: number) {
    for (let index = 0; index < this.grid[0].length; index++) {
      if (!this.isOpen(0, index)) {
        continue;
      }

      const areConnected = this.weightedQuickUnion.connected(
        row * this.grid.length + col,
        index
      );

      if (areConnected) {
        return true;
      }
    }

    return false;
  }

  // returns the number of open sites
  public numberOfOpenSites() {
    return this.numOfOpenSites;
  }

  // does the system percolate?
  // the system percolates if there is a full site starting from the top to the bottom.
  public percolates(): boolean {
    const lastRow = this.grid.length - 1;

    for (let index = 0; index < this.grid[lastRow].length; index++) {
      if (!this.isOpen(lastRow, index)) {
        continue;
      }

      if (this.isFull(lastRow, index)) {
        return true;
      }
    }

    return false;
  }
}

export function availableCells(n: number) {
  const cellRegister: Array<Array<number>> = new Array(n)
    .fill(0)
    .map(() => new Array(n).fill(0));

  for (let row = 0; row < n; row++) {
    for (let col = 0; col < n; col++) {
      cellRegister[row][col] = row * n + col;
    }
  }

  return cellRegister;
}

function main() {
  const n = 4;
  const percolateSystem = new PercolateSystem(n);
  const numberOfShoot = n * n;

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
