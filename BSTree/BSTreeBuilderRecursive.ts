import BSTreeBuilder from "./BSTreeBuilder";
import Node_Tree from "../utils/node_root";
import { swapParentChild } from "./utils";

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
    }

    return this.recursiveInsertNode(this.root, value, null);
  }

  // recursive build of the tree
  private recursiveInsertNode(
    node: Node_Tree<T>,
    value: T,
    parent: Node_Tree<T>
  ): Node_Tree<T> {
    if (node === null) {
      const leaf: Node_Tree<T> = new Node_Tree<T>(value);

      if (parent.getValue() === value) {
        return null;
      }

      if (parent.getValue() > value) {
        parent.insertLeft(leaf);
      } else if (parent.getValue() < value) {
        parent.insertRight(leaf);
      }

      return leaf;
    }

    const nodeValue: T = node.getValue();

    if (nodeValue > value) {
      return this.recursiveInsertNode(node.getLeft(), value, node);
    } else {
      return this.recursiveInsertNode(node.getRight(), value, node);
    }
  }

  private recursiveFindNode(node: Node_Tree<T>, value: T): Node_Tree<T> {
    if (node === null) return node;

    const nodeValue: T = node.getValue();

    if (nodeValue === value) {
      return node;
    } else if (nodeValue > value) {
      return this.recursiveFindNode(node.getLeft(), value);
    } else {
      return this.recursiveFindNode(node.getRight(), value);
    }
  }

  findNode(value: T): Node_Tree<T> {
    return this.recursiveFindNode(this.root, value);
  }

  private remove(node: Node_Tree<T>, prev: Node_Tree<T>): boolean {
    if (node.getLeft()) {
      swapParentChild(node, node.getLeft());
      return this.remove(node.getLeft(), node);
    } else if (node.getRight()) {
      swapParentChild(node, node.getRight());
      return this.remove(node.getRight(), node);
    }

    if (prev.getLeft() === node) prev.insertLeft(null);
    else prev.insertRight(null);

    return true;
  }

  removeNode(value: T): boolean {
    const [parent, node]: [Node_Tree<T>, Node_Tree<T>] = this.findParent(value);
    if (node === null) return false;

    return this.remove(node, parent);
  }

  recursiveFindParent(
    node: Node_Tree<T>,
    value: T,
    parent: Node_Tree<T>
  ): [Node_Tree<T>, Node_Tree<T>] {
    if (node === null) return [null, null];

    const nodeValue: T = node.getValue();

    if (nodeValue === value) {
      return [parent, node];
    }

    if (nodeValue > value) {
      return this.recursiveFindParent(node.getLeft(), value, node);
    } else {
      return this.recursiveFindParent(node.getRight(), value, node);
    }
  }

  /**
   * @param value
   * @returns [parent, node]
   */
  findParent(value: T): [Node_Tree<T>, Node_Tree<T>] {
    return this.recursiveFindParent(this.root, value, null);
  }

  updateNode(oldValue: T, newValue: T): boolean {
    const doesExist: boolean = !!this.findNode(newValue);

    if (doesExist) {
      return false;
    }

    const [parent, node]: [Node_Tree<T>, Node_Tree<T>] = this.findParent(
      oldValue
    );

    if (node === null) {
      return false;
    }

    if (
      parent === null ||
      (oldValue > parent.getValue() && newValue > parent.getValue()) ||
      (oldValue < parent.getValue() && newValue < parent.getValue())
    ) {
      const leftNode: Node_Tree<T> = node.getLeft();
      const rightNode: Node_Tree<T> = node.getRight();

      if (leftNode && leftNode.getValue() > newValue) {
        return false;
      }

      if (rightNode && rightNode.getValue() < newValue) {
        return false;
      }

      node.setValue(newValue);
      return true;
    }

    node.setValue(newValue);
    return true;
  }
}

export default BSTreeBuilderRecursive;
