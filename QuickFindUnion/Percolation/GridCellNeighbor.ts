export class GridCellNeighbor {
  private size: number;

  constructor(size: number) {
    this.size = size;
  }

  public getNeighbors(row: number, col: number) {
    if (row === 0) {
      return this.topCell(row, col);
    }

    if (row === this.size - 1) {
      return this.bottomCell(row, col);
    }

    if (col === 0) {
      return this.leftCenterCell(row, col);
    }

    if (col === this.size - 1) {
      return this.rightCenterCell(row, col);
    }

    return this.centerCell(row, col);
  }

  public topCell(row: number, col: number) {
    if (col === 0) {
      return this.topLeftCornerCell(row, col);
    }

    if (col === this.size - 1) {
      return this.topRightCornerCell(row, col);
    }

    return this.topCenterCell(row, col);
  }

  public bottomCell(row: number, col: number) {
    if (col === 0) {
      return this.bottomLeftCornerCell(row, col);
    }

    if (col === this.size - 1) {
      return this.bottomRightCornerCell(row, col);
    }

    return this.bottomCenterCell(row, col);
  }

  public leftCenterCell(row: number, col: number) {
    return [
      { row: row + 1, col },
      { row: row - 1, col },
      { row, col: col + 1 },
    ];
  }

  public rightCenterCell(row: number, col: number) {
    return [
      { row: row + 1, col },
      { row: row - 1, col },
      { row, col: col - 1 },
    ];
  }

  public centerCell(row: number, col: number) {
    return [
      { row: row + 1, col },
      { row: row - 1, col },
      { row, col: col - 1 },
      { row, col: col + 1 },
    ];
  }

  public topCenterCell(row: number, col: number) {
    return [
      { row, col: col - 1 },
      { row, col: col + 1 },
      { row: row + 1, col: col },
    ];
  }

  public topLeftCornerCell(row: number, col: number) {
    return [
      { row, col: col + 1 },
      { row: row + 1, col },
    ];
  }

  public topRightCornerCell(row: number, col: number) {
    return [
      { row, col: col - 1 },
      { row: row + 1, col },
    ];
  }

  public bottomCenterCell(row: number, col: number) {
    return [
      { row, col: col - 1 },
      { row, col: col + 1 },
      { row: row - 1, col: col },
    ];
  }

  public bottomLeftCornerCell(row: number, col: number) {
    return [
      { row: row - 1, col },
      { row, col: col + 1 },
    ];
  }

  public bottomRightCornerCell(row: number, col: number) {
    return [
      { row: row - 1, col: col },
      { row, col: col - 1 },
    ];
  }
}
