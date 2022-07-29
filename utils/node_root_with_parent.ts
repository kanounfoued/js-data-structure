class Node_Tree_With_Parent<T> {
  private value: T;
  private right: Node_Tree_With_Parent<T> = null;
  private left: Node_Tree_With_Parent<T> = null;
  private parent: Node_Tree_With_Parent<T> = null;
  private height: number;

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
    this.height = 0;
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

  getHeight() {
    return this.height;
  }

  increaseHeight() {
    this.height++;
  }

  decreaseHeight() {
    this.height--;
  }

  setHeight(height: number) {
    this.height = height;
  }
}

export default Node_Tree_With_Parent;
