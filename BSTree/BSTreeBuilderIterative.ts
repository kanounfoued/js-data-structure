import BSTreeBuilder from "./BSTreeBuilder";
import Node_Tree from "../utils/node_root";

class BSTreeBuilderIterative<T> extends BSTreeBuilder<T> {
  constructor() {
    super();
  }

  getRoot(): Node_Tree<T> {
    return this.root;
  }

  insertNode(value: T) {}

  iterativeBuiltTree(value: T) {
    if (!this.root) {
      this.root = new Node_Tree<T>(value);
    }
  }
}

export default BSTreeBuilderIterative;
