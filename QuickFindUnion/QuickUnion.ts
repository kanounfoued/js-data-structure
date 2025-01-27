class QuickUnion {
  components: Array<number>;

  constructor(n: number) {
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

const fu = new QuickUnion(10);
fu.union(1, 8);
