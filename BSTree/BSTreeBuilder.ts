import Node_Tree from "../utils/node_root";

abstract class BSTreeBuilder<T> {
  protected root: Node_Tree<T>;

  constructor() {
    this.root = null;
  }

  abstract getRoot(): Node_Tree<T>;

  abstract insertNode(value: T): Node_Tree<T>;

  abstract findNode(value: T): Node_Tree<T>;

  abstract removeNode(value: T): boolean;

  abstract findParent(value: T): [Node_Tree<T>, Node_Tree<T>];
}

export default BSTreeBuilder;
