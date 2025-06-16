class WeightedQuickUnion {
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

  root(p: number) {
    let root = p;

    // check for the root
    while (root !== this.nodes[root]) {
      root = this.nodes[root];
    }

    return root;
  }

  /**
   * @returns  the root id.
   */
  union(p: number, q: number) {
    const p_root_id = this.root(p);
    const q_root_id = this.root(q);

    if (p_root_id === q_root_id) return;

    if (this.weights[p_root_id] >= this.weights[q_root_id]) {
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

const wqu = new WeightedQuickUnion(10);

wqu.union(4, 3);
wqu.union(3, 8);
wqu.union(6, 5);
wqu.union(9, 4);
wqu.union(2, 1);
wqu.union(5, 0);
wqu.union(7, 2);
wqu.union(6, 1);
wqu.union(7, 3);
