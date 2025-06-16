class QuickUnionWithPathCompression {
  nodes: Array<number>;

  constructor(n: number) {
    this.nodes = [];

    for (let i = 0; i < n; i++) {
      this.nodes[i] = i;
    }
  }

  root(p: number) {
    let root = p;

    while (root !== this.nodes[root]) {
      // this is the trick for path compression.
      this.nodes[root] = this.nodes[this.nodes[root]];
      root = this.nodes[root];
    }

    return root;
  }

  connected(p: number, q: number) {
    const root_p = this.root(p);
    const root_q = this.root(q);
    return root_p === root_q;
  }

  union(p: number, q: number) {
    const root_p = this.root(p);
    const root_q = this.root(q);

    this.nodes[root_p] = root_q;
  }
}

const quwpc = new QuickUnionWithPathCompression(10);

quwpc.union(4, 3);
quwpc.union(3, 8);
quwpc.union(6, 5);
quwpc.union(9, 4);
quwpc.union(2, 1);
quwpc.union(5, 0);
quwpc.union(7, 2);
quwpc.union(6, 1);
quwpc.union(7, 3);
quwpc.connected(6, 7);

console.log(quwpc.nodes);
