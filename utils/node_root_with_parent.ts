class Node_Tree_With_Parent<T> {
  private value: T;
  private right: Node_Tree_With_Parent<T> = null;
  private left: Node_Tree_With_Parent<T> = null;
  private parent: Node_Tree_With_Parent<T> = null;

  constructor(
    value?: T,
    parent: Node_Tree_With_Parent<T> = null,
    left: Node_Tree_With_Parent<T> = null,
    right: Node_Tree_With_Parent<T> = null
  ) {
    this.parent = parent;
    this.value = value;
    this.left = left;
    this.right = right;
  }

  setValue(value: T) {
    this.value = value;
  }

  setParent(parent: Node_Tree_With_Parent<T>) {
    this.parent = parent;
  }

  insertLeft(node: Node_Tree_With_Parent<T>) {
    this.left = node;
  }

  insertRight(node: Node_Tree_With_Parent<T>) {
    this.right = node;
  }

  getValue(): T {
    return this.value;
  }

  getParent() {
    return this.parent;
  }

  getLeft() {
    return this.left;
  }

  getRight() {
    return this.right;
  }

  calculateHeight(node: Node_Tree_With_Parent<T> = null) {
    if (!node) return -1;

    return (
      1 +
      Math.max(
        node.calculateHeight(node.getLeft()),
        node.calculateHeight(node.getRight())
      )
    );
  }
}

export default Node_Tree_With_Parent;
