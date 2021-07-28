import Node_Tree from "../utils/node_root";

class AVLTree<T> {
  protected root: Node_Tree<T>;

  constructor() {
    this.root = null;
  }

  getRoot(): Node_Tree<T> {
    return this.root;
  }

  insertNode(): Node_Tree<T> {
    return null;
  }

  findNode(): Node_Tree<T> {
    return null;
  }

  removeNode(): Node_Tree<T> {
    return null;
  }
}

export default AVLTree;
