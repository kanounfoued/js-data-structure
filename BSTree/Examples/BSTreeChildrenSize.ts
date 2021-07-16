import Node_Tree from "../../utils/node_root";
import NODE_DATA from "../types/NODE_DATA";

// this class is building a tree with not only one single value, instead another value was added into it, which is the number of children (nodes) belongs the the current node which is their (incestor).

class BSTreeChildrenSizeBuilder<T> {
  private root: Node_Tree<NODE_DATA<T>>;

  constructor() {
    this.root = null;
  }

  getRoot(): Node_Tree<NODE_DATA<T>> {
    return this.root;
  }

  insertNode(value: T): Node_Tree<NODE_DATA<T>> {
    if (!this.root) {
      this.root = new Node_Tree<NODE_DATA<T>>({ value, childrenSize: 1 });
      return this.root;
    }

    let current: Node_Tree<NODE_DATA<T>> = this.root;

    while (current !== null) {
      const currentValue = current.getValue();

      if (currentValue.value === value) {
        return null;
      }

      current.setValue({
        ...currentValue,
        childrenSize: currentValue.childrenSize + 1,
      });

      const node: Node_Tree<NODE_DATA<T>> = new Node_Tree<NODE_DATA<T>>({
        value,
        childrenSize: 1,
      });

      if (currentValue.value > value) {
        if (current.getLeft() === null) {
          current.insertLeft(node);
          return node;
        }

        current = current.getLeft();
      } else if (currentValue.value < value) {
        if (current.getRight() === null) {
          current.insertRight(node);
          return node;
        }

        current = current.getRight();
      }
    }

    return null;
  }
}

export default BSTreeChildrenSizeBuilder;
