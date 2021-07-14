import BSTreeBuilder from "./BSTreeBuilder";
import Node_Tree from "../utils/node_root";

class BSTreeBuilderIterative<T> extends BSTreeBuilder<T> {
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
      let current: Node_Tree<T> = this.root;

      while (current !== null) {
        if (current.getValue() >= value) {
          if (!current.getLeft()) {
            current.insertLeft(new Node_Tree<T>(value));
            return current;
          }

          current = current.getLeft();
        } else if (current.getValue() < value) {
          if (!current.getRight()) {
            current.insertRight(new Node_Tree<T>(value));
            return current;
          }

          current = current.getRight();
        }
      }
    }
  }

  findNode(value: T): Node_Tree<T> {
    return null;
  }

  removeNode(value: T): boolean {
    return false;
  }
}

export default BSTreeBuilderIterative;
