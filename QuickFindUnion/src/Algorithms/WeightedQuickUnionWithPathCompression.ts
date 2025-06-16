export class WeightedQuickUnionWithPathCompression {
  nodes: Array<number>;
  weights: Array<number>;

  constructor(n: number) {
    this.nodes = [];
    this.weights = [];

    for (let i = 0; i < n; i++) {
      this.nodes[i] = i;
      this.weights[i] = 1;
    }
  }

  isValid(p: number) {
    return p >= 0 && p < this.nodes.length;
  }

  root(p: number) {
    let root = p;

    while (root !== this.nodes[root]) {
      const grand_parent = this.nodes[this.nodes[root]];
      const parent = this.nodes[root];
      // substract the number of weights from the parent if and only if
      // parent !== grand_parent of the current node.
      if (grand_parent !== parent) {
        this.weights[parent] -= this.weights[root];
      }

      this.nodes[root] = grand_parent;
      root = parent;
    }

    return root;
  }

  union(p: number, q: number) {
    if (!this.isValid(p)) {
      return;
    }

    if (!this.isValid(q)) {
      return;
    }

    const p_root_id = this.root(p);
    const q_root_id = this.root(q);

    if (p_root_id === q_root_id) return;

    if (this.weights[p_root_id] > this.weights[q_root_id]) {
      this.weights[p_root_id] += this.weights[q_root_id];
      this.nodes[q_root_id] = p_root_id;
      return p_root_id;
    }

    this.weights[q_root_id] += this.weights[p_root_id];
    this.nodes[p_root_id] = q_root_id;
    return q_root_id;
  }

  connected(p: number, q: number) {
    const p_root_id = this.root(p);
    const q_root_id = this.root(q);

    return p_root_id === q_root_id;
  }
}

// const wquwpc = new WeightedQuickUnionWithPathCompression(10);

// wquwpc.union(4, 3);
// wquwpc.union(3, 8);
// wquwpc.union(6, 5);
// wquwpc.union(9, 4);
// wquwpc.union(2, 1);
// wquwpc.union(5, 0);
// wquwpc.union(7, 2);
// wquwpc.union(6, 1);
// wquwpc.union(7, 3);

// wquwpc.connected(6, 8);

// console.log(wquwpc.nodes);
// console.log(wquwpc.weights);
