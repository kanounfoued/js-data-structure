import NODE_DATA from "../types/NODE_DATA";
import Node_Tree from "../../utils/node_root";

export const findNodesGreaterOrEqualValue = (
  value: number,
  node: Node_Tree<NODE_DATA<number>>
): [Node_Tree<NODE_DATA<number>>, number] => {
  const currentValue: NODE_DATA<number> = node.getValue();

  if (node === null) {
    return [null, 0];
  }

  const rightNode: Node_Tree<NODE_DATA<number>> = node.getRight();

  if (currentValue.value === value) {
    const children: number = rightNode
      ? currentValue.childrenSize - rightNode.getValue().childrenSize
      : currentValue.childrenSize;

    return [null, children];
  } else if (currentValue.value < value) {
    const children: number = rightNode
      ? currentValue.childrenSize - rightNode.getValue().childrenSize
      : currentValue.childrenSize;

    return [rightNode, children];
  } else {
    return [node.getLeft(), -currentValue.childrenSize];
  }
};
