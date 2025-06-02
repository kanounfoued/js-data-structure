import { WeightedQuickUnionWithPathCompression } from "../WeightedQuickUnionWithPathCompression";
import { GridCellNeighbor } from "./GridCellNeighbor";

class PercolateSystem {
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
    this.gridCell = new GridCellNeighbor(n * n);
    this.numOfOpenSites = 0;

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        this.grid[i][j] = 0;
      }
    }
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
      .filter((cell) => !this.isOpen(cell.row, cell.col));

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
  public isFull(row: number, col: number) {}

  // returns the number of open sites
  public numberOfOpenSites() {
    return this.numOfOpenSites;
  }

  // does the system percolate?
  // the system percolates if there is a full site starting from the top to the bottom.
  public percolates(): boolean {
    return false;
  }
}

function main() {
  const n = 20;
  const percolateSystem = new PercolateSystem(n);
  const numberOfShoot = (n * n) / 2;

  for (let i = 0; i < numberOfShoot; i++) {
    const row = Math.floor(Math.random() * n);
    const col = Math.floor(Math.random() * n);

    percolateSystem.open(row, col);
    const isPercolating = percolateSystem.percolates();

    if (isPercolating) {
      break;
    }
  }
}

main();
