// impoert EventEmmiter class
const EventEmitter = require("events");

// create an instance
const emitter = new EventEmitter();

// 1. define an event listener (addListener)
// 2. Trigger (emit) the "greet" event

// emitter.on("greet", () => {
//   console.log("Hello World");
// });

// // greet()
// // hello World
// emitter.emit("greet");

// You can pass Arguments

emitter.on("greet", (args) => {
  console.log(`Hello ${args.name}! ${args.prof}`,);
});

emitter.emit("greet",{name: "Elisha",prof:"MERN Stack Developer"});
