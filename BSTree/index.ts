import BSTreeBuilder from "./BSTreeBuilder";
import BSTreeBuilderRecursive from "./BSTreeBuilderRecursive";
import BSTreeBuilderIterative from "./BSTreeBuilderIterative";
import BSTreeChildrenSizeBuilder from "./Examples/BSTreeChildrenSize";
import Node_Tree from "../utils/node_root";
import NODE_DATA from "./types/NODE_DATA";
import { findNodesGreaterOrEqualValue } from "./Examples/BSTreeCallback";

// const r_tree: BSTreeBuilder<number> = new BSTreeBuilderRecursive<number>();
// r_tree.insertNode(30);
// r_tree.insertNode(40);
// r_tree.insertNode(20);
// r_tree.insertNode(21);
// r_tree.insertNode(15);
// r_tree.insertNode(35);
// r_tree.insertNode(31);

// console.log(r_tree.removeNode(100));
// console.log(r_tree.findNode(20));
// console.log(r_tree.findParent(20));
// console.log(r_tree.updateNode());
// console.log(r_tree.updateNode(21, 24));
// console.log(r_tree.getRoot());

// const i_tree: BSTreeBuilder<number> = new BSTreeBuilderIterative<number>();

// i_tree.insertNode(30);
// i_tree.insertNode(40);
// i_tree.insertNode(20);
// i_tree.insertNode(21);
// i_tree.insertNode(15);
// i_tree.insertNode(35);
// i_tree.insertNode(31);

// i_tree.updateNode(20, 24);

// console.log(i_tree.removeNode(100));
// console.log(i_tree.findNode(20));
// console.log(i_tree.findParent(31));
// console.log(i_tree.getRoot());

const children_tree: BSTreeChildrenSizeBuilder<number> = new BSTreeChildrenSizeBuilder<
  number
>();

children_tree.insertNode(30);
children_tree.insertNode(40);
children_tree.insertNode(20);
children_tree.insertNode(21);
children_tree.insertNode(15);
children_tree.insertNode(35);
children_tree.insertNode(31);

console.log(children_tree.nbrnNodes(21, findNodesGreaterOrEqualValue));

// console.log(children_tree.getRoot());
