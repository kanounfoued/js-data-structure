import BSTreeBuilder from "./BSTreeBuilder";
import Node_Tree from "../utils/node_root";

class BSTreeBuilderRecursive<T> extends BSTreeBuilder<T> {
  constructor() {
    super();
  }

  getRoot(): Node_Tree<T> {
    return this.root;
  }

  insertNode(value: T) {
    if (!this.root) {
      this.root = new Node_Tree<T>(value);
    } else {
      // call recursive function.
      this.recursiveBuiltTree(this.root, value);
    }
  }

  // recursive build of the tree
  recursiveBuiltTree(node: Node_Tree<T>, value: T) {
    if (node.getValue() >= value) {
      const leftNode: Node_Tree<T> = node.getLeft();

      if (!leftNode) node.insertLeft(new Node_Tree<T>(value));
      else this.recursiveBuiltTree(leftNode, value);
    } else {
      const rightNode: Node_Tree<T> = node.getRight();

      if (!rightNode) node.insertRight(new Node_Tree<T>(value));
      else this.recursiveBuiltTree(rightNode, value);
    }
  }
}

export default BSTreeBuilderRecursive;
