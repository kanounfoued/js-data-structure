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

  /**
   * @param value
   * @returns @[Parent, Node]
   * returns both the parent and the node that holds the value.
   */
  abstract findParent(value: T): [Node_Tree<T>, Node_Tree<T>];

  abstract updateNode(oldValue: T, newValue: T): boolean;
}

export default BSTreeBuilder;
