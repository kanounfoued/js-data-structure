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
  const interParent = parent.getValue();
  const interChild = child.getValue();

  parent.setValue({
    value: child.getValue().value,
    childrenSize: interParent.childrenSize,
  });

  child.setValue({
    ...interParent,
    childrenSize: interChild.childrenSize,
  });
}
