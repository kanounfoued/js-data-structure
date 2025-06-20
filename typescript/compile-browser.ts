// this line of code can run only on browser env.
document.getElementById("root");

console.log(new Array(9).fill(0));

// the result of the compilation.
// after the file being compiled, it can not be run using the node command, because it includes browser API (document) and this command can not be recognized inside node env.

// if we want to check the result of the file we need to import the result file inside html file and check the result there.
