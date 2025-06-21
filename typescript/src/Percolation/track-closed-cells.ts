export default function getClosedCells(n: number) {
  const closedSites: Array<Array<number>> = new Array(n);

  for (let row = 0; row < n; row++) {
    closedSites[row] = new Array(n);
    for (let col = 0; col < n; col++) {
      closedSites[row][col] = row * n + col;
    }
  }

  return closedSites;
}
