import BSTreeBuilder from "./BSTreeBuilder";
import Node_Tree from "../utils/node_root";

class BSTreeBuilderRecursive<T> extends BSTreeBuilder<T> {
  constructor() {
    super();
  }

  getRoot(): Node_Tree<T> {
    return this.root;
  }

  insertNode(value: T): Node_Tree<T> {
    if (!this.root) {
      this.root = new Node_Tree<T>(value);
      return this.root;
    } else {
      // call recursive function.
      return this.recursiveBuiltTree(this.root, value);
    }
  }

  // recursive build of the tree
  private recursiveBuiltTree(node: Node_Tree<T>, value: T): Node_Tree<T> {
    if (node.getValue() >= value) {
      const leftNode: Node_Tree<T> = node.getLeft();

      if (!leftNode) {
        node.insertLeft(new Node_Tree<T>(value));
        return leftNode;
      }

      this.recursiveBuiltTree(leftNode, value);
    } else {
      const rightNode: Node_Tree<T> = node.getRight();

      if (!rightNode) {
        node.insertRight(new Node_Tree<T>(value));
        return rightNode;
      }

      this.recursiveBuiltTree(rightNode, value);
    }
  }
}

export default BSTreeBuilderRecursive;
