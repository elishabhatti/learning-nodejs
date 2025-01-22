import readline from "readline/promises";
// import fetch from "node-fetch";


const API_KEY = `9a09bff909d63bd02c984718e8395fe4`;
const BASE_URL = `https://api.openweathermap.org/data/2.5/weather`;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout, // Corrected to process.stdout
});

const getWeather = async (city) => {
  const url = `${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("City not found. Please check the city name");
    }
    const weatherData = await response.json();
    console.log(weatherData);

    console.log(`\nWeather Information:`);
    console.log(`City: ${weatherData.name}`);
    console.log(`Temperature: ${weatherData.main.temp} °C`);
    console.log(`Description: ${weatherData.weather[0].description}`);
    console.log(`Humidity: ${weatherData.main.humidity}%`);
    console.log(`Wind Speed: ${weatherData.wind.speed} m/s\n`);
  } catch (error) {
    console.log(`Error: ${error.message}`);
  }
};

const main = async () => {
  const city = await rl.question("Enter a city name to get its weather: "); // Added `await`
  await getWeather(city);
  rl.close();
};

main();
