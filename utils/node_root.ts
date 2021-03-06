class Node_Tree<T> {
  private value: T;
  private right: Node_Tree<T> = null;
  private left: Node_Tree<T> = null;

  constructor(
    value?: T,
    left: Node_Tree<T> = null,
    right: Node_Tree<T> = null
  ) {
    this.value = value;
    this.left = left;
    this.right = right;
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

  getLeft(): Node_Tree<T> {
    return this.left;
  }

  getRight(): Node_Tree<T> {
    return this.right;
  }
}

export default Node_Tree;
