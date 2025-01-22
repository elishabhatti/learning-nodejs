import https from "https";
import readline from "readline";
import chalk from "chalk";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Function to fetch a random joke from the API
const getJoke = () => {
  const url = "https://official-joke-api.appspot.com/random_joke";

  https.get(url, (response) => {
    let data = "";

    response.on("data", (chunk) => {
      data += chunk;
    });

    response.on("end", () => {
      try {
        const jokeData = JSON.parse(data);

        if (jokeData && jokeData.setup && jokeData.punchline) {
          console.log(chalk.green("\nHere's a joke for you:"));
          console.log(chalk.yellow(jokeData.setup));
          console.log(chalk.blue(jokeData.punchline));
        } else {
          console.log(chalk.bgRed("Couldn't fetch a joke. Please try again later."));
        }
      } catch (error) {
        console.log(chalk.bgRed("Error parsing joke data:", error.message));
      }
    });

    response.on("error", (err) => {
      console.log(chalk.bgRed(`Error while fetching joke: ${err.message}`));
      rl.close()
    });
  });
};

// Function to
getJoke()