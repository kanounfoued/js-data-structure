import Node_Tree from "../utils/node_root";

export function swapParentChild<T>(parent: Node_Tree<T>, child: Node_Tree<T>) {
  const inter = parent.getValue();
  parent.setValue(child.getValue());
  child.setValue(inter);
}
