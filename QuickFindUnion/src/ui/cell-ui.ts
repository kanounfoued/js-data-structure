export class CellUI {
  index: number;

  constructor(index) {
    this.index = index;
  }

  draw() {
    document.getElementById(`${this.index}`).classList.add("red-cell");
  }
}
