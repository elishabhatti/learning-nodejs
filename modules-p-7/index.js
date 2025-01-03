// node.js  module
// just like every thing in react js are components and in node.js every thing are modules
// reusable block of code

// understanding the node.js module system
// self-containe code unit:
// each file in node.js is treated as a seprate module.
// variables. functions or object in one file are not accessable in another file
// unless you explicity export them

// encapsulation:
// node.js uses the commonjs module system (module.export and require) to
// ensure the code in one file does not pollute or interfere with the global scope.
// this makes your code modular, maintainable, and easier to debug.

// what exactly is a module in node.js?
// a module in node.js represents a file containing code that is self-cotaine resusable and encapsulated.
// node.js uses the common js module system
// means reqeire method will be used not import export
// this module system came before e6 module was introduced in javascript;
// that's why its syntax is different.
// modules in node.js are created by defining seprate files for differnet funtionalities.
// you must export anything you want to make accessible to other module

// for example
// used here
// these are module
// common js
const add = require("./math");
console.log(add(2, 3));
