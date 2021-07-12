import Node_Tree from "../utils/node_root";

class BSTreeBuilder<T> {
  private root: Node_Tree<T>;

  constructor() {
    this.root = null;
  }

  getRoot(): Node_Tree<T> {
    return this.root;
  }

  iterativeBuiltTree(value: T) {
    if (!this.root) {
      this.root = new Node_Tree<T>(value);
    }
  }

  recursiveBuiltTree(node: Node_Tree<T>, value: T) {
    if (node === null) node = new Node_Tree(value);
    else if (node.getValue() <= value) {
      this.recursiveBuiltTree(node.getLeft(), value);
    } else {
      this.recursiveBuiltTree(node.getRight(), value);
    }
  }
}

export default BSTreeBuilder;
