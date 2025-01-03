// window vs global in Node.js

// did you know that javascript behaves differnlty in the browers and in the node.js
// exmaple of window object in the dom in run in the javascript  but not in the node.js
// because node.js is for server side development not client side.

// Node.js context global
// in node.js there's no windows or document WHy? because node.js runs outisde the browser
// it dosent deal with the DOM or browser specific API's

// instead node.js has a global object. it's the equivalent of window in the browser but desgined
// for a server side environment

// console.log(global);
// global.console.log("yo what's up")

// globalThis is a  new feature introduces in ECMAscript 2020 (ES11) that provides a standard way
// to access the global object in any javascript environment

// why is it useful
// consistent access: in the past, accessing the global object varied depending on the environment:
// 1. Browser: window
// 2. Node.js: global
// 3. Web Workers: self
// 4. Other Environment: Might have thier own global objects

// console.log(globalThis.module);
// commonjs

// React -> components -> resuable block of code just like functions
// Node -> module

// built in modules in Node.js

// Module Name          Usage
// os                   provides information about the operating system
// path                 provides utitly functions for working with file paths
// FS                   file system operation like reading and writing files
// HTTP                 create http servers
