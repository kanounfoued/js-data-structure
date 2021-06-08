class Node_Tree<T> {
  private value: T;
  private right: Node_Tree<T>;
  private left: Node_Tree<T>;

  constructor(value?: T, left?: Node_Tree<T>, right?: Node_Tree<T>) {
    this.value = value;
    this.left = left || null;
    this.right = right || null;
  }

  setValue(value: T) {
    this.value = value;
  }

  insertLeft(node: Node_Tree<T>) {
    this.left = node;
  }

  insertRight(node: Node_Tree<T>) {
    this.right = node;
  }

  getValue(): T {
    return this.value;
  }

  getLeftSide(): Node_Tree<T> {
    return this.left;
  }

  getRightSide(): Node_Tree<T> {
    return this.right;
  }

  public static max_heapify<R>(arr: R[], i: number) {
    const left: R = arr[i * 2 + 1];
    const right: R = arr[i * 2 + 2];

    if (left && left > arr[i]) {
      arr[2 * i + 1] = arr[i];
      arr[i] = left;
      this.max_heapify(arr, i * 2 + 1);
    }

    if (right && right > arr[i]) {
      arr[2 * i + 2] = arr[i];
      arr[i] = right;
      this.max_heapify(arr, i * 2 + 2);
    }
  }
}

export default Node_Tree;
