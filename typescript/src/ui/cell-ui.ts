export class CellUI {
  index: number;

  constructor(index: number) {
    this.index = index;
  }

  draw() {
    const cell = document.getElementById(`${this.index}`);

    if (!cell) throw "Cell does not exist in the DOM";

    cell.classList.add("red-cell");
  }
}
