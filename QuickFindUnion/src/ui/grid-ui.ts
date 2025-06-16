export class GridUI {
  private grid: Array<Array<number>>;

  constructor(size: number) {
    let row: Array<Number> = new Array(size);
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
        cell.setAttribute("id", `${row * this.grid.length + col}`);
        cell.classList.add("cell");
        rowDiv.appendChild(cell);
      }

      grid.appendChild(rowDiv);
    }

    root.appendChild(grid);
  }
}
