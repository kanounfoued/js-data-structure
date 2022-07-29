import AVLTree from "./AVLTree";

const children_tree: AVLTree<number> = new AVLTree<number>();

// test avl tree
children_tree.insertNode(50);
children_tree.insertNode(90);
children_tree.insertNode(100);

// children_tree.insertNode(80);
// children_tree.insertNode(60);
// children_tree.insertNode(90);
// children_tree.insertNode(85);
// children_tree.insertNode(120);
// children_tree.insertNode(100);

// children_tree.insertNode(50);
// children_tree.insertNode(30);
// children_tree.insertNode(80);
// children_tree.insertNode(20);
// children_tree.insertNode(40);
// children_tree.insertNode(60);
// children_tree.insertNode(90);
// children_tree.insertNode(85);
// children_tree.insertNode(120);
// children_tree.insertNode(100);

// left, Right rotation
// children_tree.insertNode(90);
// children_tree.insertNode(50);
// children_tree.insertNode(100);
// children_tree.insertNode(30);
// children_tree.insertNode(70);
// children_tree.insertNode(80);

// children_tree.insertNode(80);
// children_tree.insertNode(60);
// children_tree.insertNode(100);
// children_tree.insertNode(30);
// children_tree.insertNode(70);
// children_tree.insertNode(55);

console.log(children_tree.getRoot());
// console.log(children_tree.getRoot()?.calculateHeight(children_tree.getRoot()));
// console.log(children_tree.getRoot().getLeft());
