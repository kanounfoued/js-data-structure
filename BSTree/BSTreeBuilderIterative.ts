import BSTreeBuilder from "./BSTreeBuilder";
import Node_Tree from "../utils/node_root";
import { swapParentChild } from "./utils";

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
    if (!this.root) return null;

    let current = this.root;

    while (current !== null) {
      const nodeValue = current.getValue();

      if (nodeValue === value) {
        return current;
      } else if (nodeValue > value) {
        current = current.getLeft();
      } else {
        current = current.getRight();
      }
    }

    return null;
  }

  findParent(value: T): Node_Tree<T> {
    if (!this.root) return null;

    let current: Node_Tree<T> = this.root;
    let parent: Node_Tree<T> = null;

    while (current !== null) {
      const nodeValue: T = current.getValue();

      if (nodeValue === value) {
        return parent;
      } else if (nodeValue > value) {
        parent = current;
        current = current.getLeft();
      } else {
        parent = current;
        current = current.getRight();
      }
    }

    return null;
  }

  removeNode(value: T): boolean {
    if (!this.root) return false;

    let current: Node_Tree<T> = this.root;
    let previous = null;

    while (current !== null) {
      if (current.getValue() === value) {
        if (current.getLeft()) {
          previous = current;
          swapParentChild(current, current.getLeft());
          current = current.getLeft();
        } else if (current.getRight()) {
          previous = current;
          swapParentChild(current, current.getRight());
          current = current.getRight();
        } else {
          if (previous.getLeft() === current) {
            previous.insertLeft(null);
          } else {
            previous.insertRight(null);
          }

          return !!previous;
        }
      } else if (current.getValue() > value) {
        current = current.getLeft();
      } else {
        current = current.getRight();
      }
    }

    return false;
  }
}

export default BSTreeBuilderIterative;
