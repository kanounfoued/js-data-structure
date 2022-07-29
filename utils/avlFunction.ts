import Node_Tree_With_Parent from "./node_root_with_parent";

export function calculateHeight<T>(node: Node_Tree_With_Parent<T>) {
  const rHeight = node.calculateHeight(node.getRight());
  const lHeight = node.calculateHeight(node.getLeft());

  return lHeight - rHeight;
}
