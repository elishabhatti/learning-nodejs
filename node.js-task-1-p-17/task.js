const EventEmitter = require("events");
const fs = require("fs");

// File to store event counts
const filePath = "eventCounts.json";

// Load existing event counts or initialize
let eventCounts = {};
if (fs.existsSync(filePath)) {
  eventCounts = JSON.parse(fs.readFileSync(filePath, "utf-8"));
} else {
  eventCounts = {
    "user-login": 0,
    "user-logout": 0,
    "user-purchase": 0,
    "profile-update": 0,
  };
}

// Create an instance
const emitter = new EventEmitter();

// Define event handlers
emitter.on("user-login", (username) => {
  eventCounts["user-login"]++;
  console.log(`${username} logged in!`);
  saveCounts();
});

emitter.on("user-purchase", (username, item) => {
  eventCounts["user-purchase"]++;
  console.log(`${username}: purchased ${item}!`);
  saveCounts();
});

emitter.on("profile-update", (username, email) => {
  eventCounts["profile-update"]++;
  console.log(`${username} changed Email: ${email}`);
  saveCounts();
});

emitter.on("user-logout", (username) => {
  eventCounts["user-logout"]++;
  console.log(`${username} logged out!`);
  saveCounts();
});

emitter.on("summary", () => {
  console.log(eventCounts);
});

// Save counts to file
function saveCounts() {
  fs.\, 2));
}

// Emit events
emitter.emit("user-login", "Elisha");
emitter.emit("user-purchase", "Elisha", "Laptop");
emitter.emit("profile-update", "Elisha", "elisha@gmail.com");
emitter.emit("user-logout", "Elisha");
emitter.emit("summary");
