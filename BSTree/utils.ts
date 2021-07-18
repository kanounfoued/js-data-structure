import Node_Tree from "../utils/node_root";
import NODE_DATA from "./types/NODE_DATA";

export function swapParentChild<T>(parent: Node_Tree<T>, child: Node_Tree<T>) {
  const inter = parent.getValue();
  parent.setValue(child.getValue());
  child.setValue(inter);
}

export function swapParentChildChildrenSize<T>(
  parent: Node_Tree<NODE_DATA<T>>,
  child: Node_Tree<NODE_DATA<T>>
) {
  const inter = parent.getValue();
  parent.setValue({
    value: child.getValue().value,
    childrenSize: inter.childrenSize - 1,
  });

  child.setValue(inter);
}
