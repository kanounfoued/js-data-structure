export class QuickUnion {
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
      root = this.nodes[root];
    }

    return root;
  }

  connected(p: number, q: number): boolean {
    if (this.nodes[p] === p && this.nodes[q] === q) {
      if (p === q) return true;
      else return false;
    }

    return this.connected(this.nodes[p], this.nodes[q]);
  }

  union(p: number, q: number) {
    let root_p = this.root(p);
    let root_q = this.root(q);

    this.nodes[root_p] = root_q;
  }
}

// const qu = new QuickUnion(10);

// qu.union(4, 3);
// qu.union(3, 8);
// qu.union(6, 5);
// qu.union(9, 4);
// qu.union(2, 1);
// qu.union(5, 0);
// qu.union(7, 2);
// qu.union(6, 1);
// qu.union(7, 3);

// console.log(qu.nodes);
