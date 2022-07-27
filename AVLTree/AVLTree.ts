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

          // return the ew inserted value
          return current.getRight();
        }

        current = current.getRight();
      }
    }
  }

  fixAvlTree(node: Node_Tree_With_Parent<T> = null) {
    if (!node) return true;

    const rHeight = node.calculateHeight(node.getRight());
    const lHeight = node.calculateHeight(node.getLeft());

    // 1, 0, -1
    // Over / Under these values it should be fixed.
    const heightDiff = lHeight - rHeight;

    if ([1, 0, -1].some((value) => value === heightDiff)) {
      return this.fixAvlTree(node.getParent());
    }

    if (heightDiff < -1) {
      const child = node.getRight();
      const rChildHeight = child.calculateHeight(child.getRight());
      const lChildHeight = child.calculateHeight(child.getLeft());

      const childHeightDiff = lChildHeight - rChildHeight;

      if (childHeightDiff === 1) {
        this.rotateRight(child);
      }

      this.rotateLeft(node);
    } else if (heightDiff > 1) {
      const child = node.getLeft();
      const rChildHeight = child.calculateHeight(child.getRight());
      const lChildHeight = child.calculateHeight(child.getLeft());

      const childHeightDiff = lChildHeight - rChildHeight;

      if (childHeightDiff === -1) {
        this.rotateLeft(child);
      }

      this.rotateRight(node);
    }

    return this.fixAvlTree(node.getParent());
  }

  rotateLeft(node: Node_Tree_With_Parent<T>) {
    const rightChild = node.getRight();

    node.insertRight(rightChild.getLeft());

    rightChild.insertLeft(node);

    const nodeParent = node.getParent();

    node.setParent(rightChild);
    rightChild.setParent(nodeParent);

    if (!nodeParent) {
      this.root = rightChild;
    } else {
      // if the node was right child the rigthChild will be inserted at the right,
      if (nodeParent.getRight().getValue() === node.getValue()) {
        nodeParent.insertRight(rightChild);
      } else {
        // left otherwise
        nodeParent.insertLeft(rightChild);
      }
    }
  }

  rotateRight(node: Node_Tree_With_Parent<T>) {
    const leftChild = node.getLeft();

    node.insertLeft(leftChild.getRight());

    leftChild.insertRight(node);

    const nodeParent = node.getParent();

    leftChild.setParent(nodeParent);
    node.setParent(leftChild);

    if (!nodeParent) {
      this.root = leftChild;
    } else {
      // if the node was right child the rigthChild will be inserted at the right,
      if (nodeParent.getRight().getValue() === node.getValue()) {
        nodeParent.insertRight(leftChild);
      } else {
        // left otherwise
        nodeParent.insertLeft(leftChild);
      }
    }
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
