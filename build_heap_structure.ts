import Node_Tree from "./node_root";

class Build_Heap_Structure<S> {
  private root: Node_Tree<S>;

  constructor() {
    this.root = null;
  }

  getRoot(): Node_Tree<S> {
    return this.root;
  }

  private max_heapify<R>(arr: R[], i: number) {
    const left: R = arr[i * 2 + 1];
    const right: R = arr[i * 2 + 2];

    if (left !== undefined && left > arr[i]) {
      arr[2 * i + 1] = arr[i];
      arr[i] = left;
      this.max_heapify(arr, i * 2 + 1);
    }

    if (right !== undefined && right > arr[i]) {
      arr[2 * i + 2] = arr[i];
      arr[i] = right;
      this.max_heapify(arr, i * 2 + 2);
    }
  }

  private min_heapify<R>(arr: R[], i: number) {
    const left: R = arr[i * 2 + 1];
    const right: R = arr[i * 2 + 2];
    if (left !== undefined && left < arr[i]) {
      arr[2 * i + 1] = arr[i];
      arr[i] = left;
      this.min_heapify(arr, i * 2 + 1);
    }

    if (right !== undefined && right < arr[i]) {
      arr[2 * i + 2] = arr[i];
      arr[i] = right;
      this.min_heapify(arr, i * 2 + 2);
    }
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
      this.max_heapify(arr_heap, i);
      i--;
    }

    this.buildHeap(arr_heap);
  }

  buildMinHeap(arr_heap: S[]) {
    let i: number = parseInt(`${arr_heap.length / 2}`) - 1;

    while (i >= 0) {
      // call a static function
      this.min_heapify(arr_heap, i);
      i--;
    }

    this.buildHeap(arr_heap);
  }
}

export default Build_Heap_Structure;
