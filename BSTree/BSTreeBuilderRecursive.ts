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
    } else {
      return this.recursiveInsertNode(this.root, value);
    }
  }

  // recursive build of the tree
  private recursiveInsertNode(node: Node_Tree<T>, value: T): Node_Tree<T> {
    if (node.getValue() === value) return null;

    if (node.getValue() > value) {
      const leftNode: Node_Tree<T> = node.getLeft();

      if (!leftNode) {
        node.insertLeft(new Node_Tree<T>(value));
        return leftNode;
      }

      this.recursiveInsertNode(leftNode, value);
    } else {
      const rightNode: Node_Tree<T> = node.getRight();

      if (!rightNode) {
        node.insertRight(new Node_Tree<T>(value));
        return rightNode;
      }

      this.recursiveInsertNode(rightNode, value);
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

  private remove(node: Node_Tree<T>, value: T, prev: Node_Tree<T>): boolean {
    if (!node.getLeft() && !node.getRight()) {
      if (prev.getLeft() === node) prev.insertLeft(null);
      else prev.insertRight(null);

      return true;
    }

    if (node.getLeft()) {
      swapParentChild(node, node.getLeft());
      return this.remove(node.getLeft(), value, node);
    } else if (node.getRight()) {
      swapParentChild(node, node.getRight());
      return this.remove(node.getRight(), value, node);
    }

    return false;
  }

  private recursiveRemove(
    node: Node_Tree<T>,
    value: T,
    prev: Node_Tree<T>
  ): boolean {
    if (node.getValue() === value) {
      return this.remove(node, value, prev);
    }

    if (node.getValue() > value) {
      const leftNode: Node_Tree<T> = node.getLeft();

      if (!leftNode) return false;

      return this.recursiveRemove(leftNode, value, node);
    } else {
      const rightNode: Node_Tree<T> = node.getRight();

      if (!rightNode) return false;

      return this.recursiveRemove(rightNode, value, node);
    }
  }

  removeNode(value: T): boolean {
    if (!this.root) return false;
    return !!this.recursiveRemove(this.root, value, null);
  }
}

export default BSTreeBuilderRecursive;
