class QuickUnion {
  components: Array<number>;

  constructor(n: number) {
    this.components = [];

    for (let i = 0; i < n; i++) {
      this.components[i] = i;
    }
  }

  find(p: number, q: number) {
    if (this.components[p] === p && this.components[q] === q) {
      if (p === q) return true;
      else return false;
    }

    return this.find(this.components[p], this.components[q]);
  }

  union(p: number, q: number) {
    let inter_p = p;
    while (this.components[inter_p] !== inter_p) {
      inter_p = this.components[inter_p];
    }

    let inter_q = q;
    while (this.components[inter_q] !== inter_q) {
      inter_q = this.components[inter_q];
    }

    this.components[inter_p] = inter_q;
  }
}

const qu = new QuickUnion(10);

qu.union(4, 3);
qu.union(3, 8);
qu.union(6, 5);
qu.union(9, 4);
qu.union(2, 1);
qu.union(5, 0);
qu.union(7, 2);
qu.union(6, 1);
qu.union(7, 3);

console.log(qu.components);
