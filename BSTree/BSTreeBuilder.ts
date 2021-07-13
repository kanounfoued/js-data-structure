import Node_Tree from "../utils/node_root";

abstract class BSTreeBuilder<T> {
  protected root: Node_Tree<T>;

  constructor() {
    this.root = null;
  }

  abstract getRoot(): Node_Tree<T>;

  abstract insertNode(value: T);
}

export default BSTreeBuilder;
