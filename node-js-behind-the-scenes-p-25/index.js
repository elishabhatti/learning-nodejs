// Node.js Behind the Scenes
// Synchronous vs Asynchronous
// Synchronous Code:

// Tasks are executed sequentially.
// Each task blocks the next task until it is completed.
// Example:

// javascript
// Copy code
// const fs = require('fs');
// const data = fs.readFileSync('example.txt', 'utf-8');
// console.log('File Content:', data);
// Output (if file exists):

// arduino
// Copy code
// File Content: <file content>
// Asynchronous Code:

// Tasks don’t block the execution of other tasks.
// Makes use of callbacks, promises, or async/await.
// Example:

// javascript
// Copy code
// const fs = require('fs');
// fs.readFile('example.txt', 'utf-8', (err, data) => {
//     if (err) {
//         console.error('Error:', err);
//         return;
//     }
//     console.log('File Content:', data);
// });
// console.log('Elisha Jameel');
// Output (if file exists):

// arduino
// Copy code
// Elisha Jameel
// File Content: <file content>
// Node.js Elements
// V8:

// Google’s high-performance JavaScript engine.
// Compiles JavaScript into machine code, enabling faster execution.
// libuv:

// A C library that provides Node.js with cross-platform support for asynchronous I/O operations.
// Handles tasks like file system operations, networking, and timers.
// Includes:
// Event Loop: For non-blocking I/O operations.
// Thread Pool: For offloading heavy tasks.
// How a Node.js Program Works
// Main Thread:

// Initializes the program.
// Executes top-level code (e.g., require statements).
// Imports modules.
// Registers event callbacks.
// Starts the Event Loop.
// Event Loop:

// Continuously checks for pending tasks, executes them, and offloads heavy tasks to the Thread Pool.
// Thread Pool:

// By default, it has 4 threads.
// Handles heavy tasks like:
// File system operations.
// Cryptography.
// Compression.
// Visualization of Node.js Workflow
// mathematica
// Copy code
// Main Thread:
//     -> Initialize Program
//     -> Top-Level Code
//     -> Register Callbacks
//     -> Start Event Loop

// libuv:
//     - Event Loop: Manages non-blocking tasks.
//     - Thread Pool (4 threads by default):
//         * Thread #1: Heavy Task
//         * Thread #2: Heavy Task
//         * Thread #3: Heavy Task
//         * Thread #4: Heavy Task

// Offloaded Tasks: File System, Cryptography, Compression, Networking, etc.