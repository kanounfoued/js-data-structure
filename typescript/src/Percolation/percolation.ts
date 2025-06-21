import { WeightedQuickUnionWithPathCompression } from "../Algorithms/WeightedQuickUnionWithPathCompression";
import { GridCellNeighbor } from "./grid-cell-neighbor";

export class PercolateSystem {
  private grid: number[][];
  private numOfOpenSites: number;
  private weightedQuickUnion: WeightedQuickUnionWithPathCompression;
  private gridCell: GridCellNeighbor;

  /**
   *
   * the system is a representation of a grid n by n
   * all of them are blocked.
   *
   *  every time new coordinates get injcted into the system and try to test if it percolates.
   */
  constructor(n: number) {
    if (n <= 0) {
      throw "n must be greater than 0";
    }

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
  public percolates(): [number, number] | null {
    const lastRow = this.grid.length - 1;

    for (let index = 0; index < this.grid[lastRow].length; index++) {
      if (!this.isOpen(lastRow, index)) {
        continue;
      }

      if (this.isFull(lastRow, index)) {
        return [lastRow, index];
      }
    }

    return null;
  }
}
