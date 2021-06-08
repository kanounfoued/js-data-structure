import Node_Tree from "./node_root";

class Build_Heap_Structure<S> {
  private root: Node_Tree<S>;

  constructor() {
    this.root = null;
  }

  getRoot(): Node_Tree<S> {
    return this.root;
  }

  buildHeap(arr_heap: S[]) {
    this.root = new Node_Tree<S>(arr_heap[0]);
    const queue: Node_Tree<S>[] = [this.root];
    let i: number = 0;

    while (i < arr_heap.length / 2) {
      let node: Node_Tree<S> = queue.shift();

      if (arr_heap[2 * i + 1] !== undefined) {
        let leftNode: Node_Tree<S> = new Node_Tree<S>(arr_heap[2 * i + 1]);
        node.insertLeft(leftNode);
        queue.push(leftNode);
      }

      if (arr_heap[2 * i + 2] !== undefined) {
        let rightNode: Node_Tree<S> = new Node_Tree<S>(arr_heap[2 * i + 2]);
        node.insertRight(rightNode);
        queue.push(rightNode);
      }

      i++;
    }
  }

  buildMaxHeap(arr_heap: S[]) {
    let i: number = parseInt(`${arr_heap.length / 2}`) - 1;

    while (i >= 0) {
      // call a static function
      Node_Tree.max_heapify(arr_heap, i);
      i--;
    }

    this.buildHeap(arr_heap);
  }
}

export default Build_Heap_Structure;
