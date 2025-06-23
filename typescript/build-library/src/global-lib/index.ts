// this file represents my global lib.

// global libs functions definitions are mainly declared as any function without the need to add (import, export or require nor a define function) to use it else where.

// it is enough to attach it within global, globalThis or a window.

// also it can be declared same as down below

function multiply(a: number, b: number) {
  return a * b;
}

function divide(a: number, b: number) {
  if (b === 0) return Infinity;
  return a / b;
}
