import Node_Tree_With_Parent from "./node_root_with_parent";

export function calculateHeightDiff<T>(node: Node_Tree_With_Parent<T>) {
  if (!node) return -1;

  const lHeight = !node.getLeft() ? -1 : node.getLeft().getHeight();
  const rHeight = !node.getRight() ? -1 : node.getRight()?.getHeight();

  // Update the height of the current node
  const maxHeight = Math.max(lHeight, rHeight) + 1;
  node.setHeight(maxHeight);

  // send back the diff between the left/right height
  return lHeight + 1 - (rHeight + 1);
}
