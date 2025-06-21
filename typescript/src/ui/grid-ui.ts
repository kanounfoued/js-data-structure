import { CellUI } from "./cell-ui";

export class GridUI {
  private grid: Array<CellUI> = [];
  private gridNode: HTMLDivElement | undefined = undefined;

  constructor(size: number) {
    if (size <= 0) {
      throw "Size must be greater than 0";
    }

    const root = document.getElementById("root");

    if (!root) {
      return;
    }

    this.grid = new Array(size * size);
    this.gridNode = document.createElement("div");
    this.gridNode.classList.add("grid");
    root.appendChild(this.gridNode);

    for (let row = 0; row < size; row++) {
      const rowNode = document.createElement("div");
      rowNode.classList.add("row");
      this.gridNode.appendChild(rowNode);

      for (let col = 0; col < size; col++) {
        const cellIndex = row * size + col;
        this.grid[cellIndex] = new CellUI(cellIndex);
        rowNode.appendChild(this.grid[cellIndex].cellNode);
      }
    }
  }

  openSite(siteIndex: number) {
    if (siteIndex < 0) {
      throw "siteIndex must be greater than 0";
    }

    this.grid[siteIndex].openSite();
  }
}
