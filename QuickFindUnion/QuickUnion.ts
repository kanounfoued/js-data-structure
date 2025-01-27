class QuickUnion {
  components: Array<number>;

  constructor(n: number) {
    // this.components = [1, 1, 1, 8, 3, 0, 5, 1, 8, 8];
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

  union(p: number, q: number) {}
}

// 0 1 2 3 4 5 6 7 8 9
const arr = [1, 8, 1, 8, 3, 0, 5, 1, 8, 8];

const fu = new QuickUnion(10);

// console.log(fu.find(6, 9));
