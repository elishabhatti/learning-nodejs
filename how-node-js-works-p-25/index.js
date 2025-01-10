// How Node.js Works
// Node.js is a runtime environment that allows you to run JavaScript on the server side. It uses the V8 JavaScript engine (developed by Google) to execute JavaScript code.

// Components of Node.js and How They Work
// 1. V8 Engine (JavaScript Engine)
// The V8 engine converts JavaScript code into machine code.
// This ensures fast execution of JavaScript.
// 2. Node.js Bindings (Node API)
// Node.js bindings connect the JavaScript code to lower-level APIs like the file system or network operations.
// These bindings allow Node.js to interact with the underlying operating system.
// 3. Libuv Library
// Libuv is a library used by Node.js to handle asynchronous I/O operations (e.g., file systems, networking).
// It provides an abstraction layer for non-blocking operations, making Node.js highly efficient for I/O-heavy tasks.
// 4. Event Queue
// When tasks are submitted for execution, they are added to the Event Queue.
// Tasks include timers, I/O operations, or application logic.
// 5. Event Loop
// The Event Loop is the core mechanism in Node.js. It continuously monitors the Event Queue and processes tasks.
// Non-blocking tasks (e.g., timers, small callbacks) are handled directly by the Event Loop.
// Blocking tasks (e.g., file system operations, network calls) are delegated to worker threads provided by Libuv.
// 6. Worker Threads
// For blocking tasks, Libuv offloads these to worker threads. Once the task completes, its callback is queued for the Event Loop to execute.


// Flow of Execution
// Application Start

// Your application is written in JavaScript.
// The V8 engine converts your JavaScript code into machine code for execution.
// Task Delegation

// Node.js bindings enable interaction with the operating system for operations like file system, network, etc.
// Asynchronous tasks (e.g., I/O operations) are handed over to Libuv.
// Event Queue

// Tasks like I/O, network requests, and timers are added to the Event Queue.
// Event Loop Processing

// The Event Loop continuously checks the Event Queue.
// Non-blocking tasks are executed directly.
// Blocking tasks are sent to worker threads.
// Task Completion

// Once blocking tasks are completed, their callbacks are added to the Event Queue for execution by the Event Loop.
