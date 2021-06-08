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
}

export default Node_Tree;
