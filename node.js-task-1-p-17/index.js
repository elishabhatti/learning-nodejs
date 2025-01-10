const EventEmitter = require("events");
const trafficLight = new EventEmitter();

function trafficLightSystem() {
  let lights = ["red", "yellow", "green"];
  let timer = 0;

  const interval = setInterval(() => {
    timer++;

    if (timer <= 30) {
      trafficLight.emit("red", timer, lights[0]);
    } else if (timer > 30 && timer <= 35) {
      trafficLight.emit("yellow", timer, lights[1]);
    } else if (timer > 35 && timer <= 60) {
      trafficLight.emit("green", timer, lights[2]);
    }

    if (timer === 60) {
      clearInterval(interval);
    }
  }, 400);
}

trafficLight.on("red", (time, lightColor) => {
  console.log(`${time} seconds Stop the light is ${lightColor}`);
});
trafficLight.on("yellow", (time, lightColor) => {
  console.log(`${time} seconds Get Ready! the light is ${lightColor}`);
});
trafficLight.on("green", (time, lightColor) => {
  console.log(`${time} seconds GO! the light is ${lightColor}`);
});
trafficLightSystem();
