export class CellUI {
  index: number;
  cellNode: HTMLDivElement;

  constructor(index: number) {
    if (index < 0) {
      throw "index must be greater than 0";
    }

    this.index = index;
    this.cellNode = document.createElement("div");
    this.cellNode.setAttribute("id", `${index}`);
    this.cellNode.classList.add("cell");
  }

  openSite() {
    if (!this.cellNode) throw "cellNode not found.";

    this.cellNode.classList.add("red-cell");
  }
}
