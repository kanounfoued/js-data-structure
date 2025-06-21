// it is conventional, not mandatory to name the .d.ts file the same as js file. because typescript can collect all definitions from .d.ts files in the project as long as they are set into the right folder.

// .d.ts files are really helpfull while migrating from js to ts files, by giving a type definition to js variables and function to let typescript recognize them.

// to add types to the global scope, add types into:
// index.d.ts
// global.d.ts
// types.d.ts

export function add(a: number, b: number): number;

// ----------------- JS files ------------------
// these files can also be used with js files to check the type of variables or function you are using.

// to let the IDE complains about types error we need to add @ts-check at the top of the file.
