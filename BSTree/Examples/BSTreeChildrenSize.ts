import Node_Tree from "../../utils/node_root";
import NODE_DATA from "../types/NODE_DATA";
import { swapParentChildChildrenSize } from "../utils";

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

  removeNode(value: T): boolean {
    const node: Node_Tree<NODE_DATA<T>> = this.findNode(value);

    if (!node || !this.root) {
      return false;
    }

    let current = this.root;
    let previous = null;

    while (current !== null) {
      const currentValue = current.getValue();

      current.setValue({
        ...currentValue,
        childrenSize: currentValue.childrenSize - 1,
      });

      if (currentValue.value === value) {
        const leftOrRightNode = current.getLeft() || current.getRight() || null;

        if (!leftOrRightNode) {
          if (previous.getLeft() === current) previous.insertLeft(null);
          else previous.insertRight(null);

          return true;
        }

        previous = current;
        swapParentChildChildrenSize(current, leftOrRightNode);
        current = leftOrRightNode;
      } else if (currentValue.value > value) {
        previous = current;
        current = current.getLeft();
      } else {
        previous = current;
        current = current.getRight();
      }
    }

    return false;
  }

  findNode(value: T): Node_Tree<NODE_DATA<T>> {
    if (!this.root) {
      return null;
    }

    let current: Node_Tree<NODE_DATA<T>> = this.root;

    while (current !== null) {
      const currentValue: NODE_DATA<T> = current.getValue();

      if (currentValue.value === value) {
        return current;
      } else if (currentValue.value > value) {
        current = current.getLeft();
      } else {
        current = current.getRight();
      }
    }

    return null;
  }

  nbrnNodes(value: T, cb: Function): number {
    if (!this.root) {
      return 0;
    }

    let total: number = 0;
    let current: Node_Tree<NODE_DATA<T>> = this.root;

    while (current !== null) {
      const [next, nbrNodes] = cb(value, current);
      current = next;
      total = total + nbrNodes >= 0 ? total + nbrNodes : 0;
    }

    return total;
  }
}

export default BSTreeChildrenSizeBuilder;
