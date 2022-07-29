import { calculateHeightDiff } from "../utils/avlFunction";
import Node_Tree_With_Parent from "../utils/node_root_with_parent";

class AVLTree<T> {
  protected root: Node_Tree_With_Parent<T>;

  constructor() {
    this.root = null;
  }

  getRoot() {
    return this.root;
  }

  /**
   *
   * @param value the key to insert
   * @returns Node_Tree_With_Parent<T> | null
   */
  insertNode(value: T) {
    if (!this.root) {
      this.root = new Node_Tree_With_Parent<T>(value);
      return this.root;
    }

    let current = this.root;

    while (current !== null) {
      // Does not except duplicate values
      if (current.getValue() === value) {
        return null;
      }

      if (current.getValue() > value) {
        if (!current.getLeft()) {
          current.insertLeft(new Node_Tree_With_Parent<T>(value, current));

          this.fixAvlTree(current);

          // return the new inserted value
          return current.getLeft();
        }

        current = current.getLeft();
      } else if (current.getValue() < value) {
        if (!current.getRight()) {
          current.insertRight(new Node_Tree_With_Parent<T>(value, current));

          this.fixAvlTree(current);

          // return the new inserted value
          return current.getRight();
        }

        current = current.getRight();
      }
    }
  }

  fixAvlTree(node: Node_Tree_With_Parent<T> = null) {
    if (!node) return true;

    // Over / Under these values [1, 0, -1], it should be fixed.
    const heightDiff = calculateHeightDiff<T>(node);

    // if this is true => everything is good, go to the parent
    if ([1, 0, -1].some((height) => height === heightDiff)) {
      return this.fixAvlTree(node.getParent());
    }

    //  it means the current node is right heavy
    if (heightDiff < -1) {
      const childHeightDiff = calculateHeightDiff<T>(node.getRight());

      if (childHeightDiff === 1) {
        this.rotateRight(node.getRight());
      }

      this.rotateLeft(node);

      // it means the current node is left heavy
    } else if (heightDiff > 1) {
      const childHeightDiff = calculateHeightDiff<T>(node.getLeft());

      if (childHeightDiff === -1) {
        this.rotateLeft(node.getLeft());
      }

      this.rotateRight(node);
    }

    // after fixing the node, go to fix the parent if it breaks the rule of an AVL
    return this.fixAvlTree(node.getParent());
  }

  rotateLeft(node: Node_Tree_With_Parent<T>) {
    const child = node.getRight();

    node.insertRight(child.getLeft());
    child.insertLeft(node);

    const nodeParent = node.getParent();

    node.setParent(child);
    child.setParent(nodeParent);

    if (!nodeParent) {
      this.root = child;
    } else {
      // if the node was a right child the child var will be inserted at the right,
      if (nodeParent.getRight().getValue() === node.getValue()) {
        nodeParent.insertRight(child);
      } else {
        // left otherwise
        nodeParent.insertLeft(child);
      }
    }

    calculateHeightDiff(node);
    calculateHeightDiff(child);
  }

  rotateRight(node: Node_Tree_With_Parent<T>) {
    const child = node.getLeft();

    node.insertLeft(child.getRight());
    child.insertRight(node);

    const nodeParent = node.getParent();

    child.setParent(nodeParent);
    node.setParent(child);

    if (!nodeParent) {
      this.root = child;
    } else {
      // if the node was right child the rigthChild will be inserted at the right,
      if (nodeParent.getRight().getValue() === node.getValue()) {
        nodeParent.insertRight(child);
      } else {
        // left otherwise
        nodeParent.insertLeft(child);
      }
    }

    calculateHeightDiff(node);
    calculateHeightDiff(child);
  }

  /**
   *
   * @param value the key to  look for
   * @returns Node_Tree_With_Parent<T> | null
   */
  findNode(value: T) {
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
}

export default AVLTree;
