import Build_Heap_Structure from "./build_heap_structure";

const arr_heap: number[] = [4, 6, 2, 0, 7, 90, 34, 1];

const t: Build_Heap_Structure<number> = new Build_Heap_Structure<number>();
t.buildMaxHeap(arr_heap);

t.buildMinHeap(arr_heap);
