import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let attempt = 3;
const decrementAttemps = () => {
  attempt--;
};

const consoleLog = (answers) => {
  console.log(`${answers}`);
};

let numberGuess = Math.floor(Math.random() * 10) + 1;

const guessTheNumber = () => {
  rl.question(
    `Guess a number between 1 to 10 (Attempt left: ${attempt})`,
    chooseOption
  );
};
const chooseOption = (option) => {
  option = parseInt(option);

  if (attempt === 0) {
    consoleLog("Out of Attempts");
    rl.close();
    return;
  }
  if (option < numberGuess) {
    decrementAttemps();
    consoleLog("Too Low Try Again");
    guessTheNumber();
  } else if (option > numberGuess) {
    decrementAttemps();
    consoleLog("Too High Try Again");
    guessTheNumber();
  } else if (option === numberGuess) {
    consoleLog(`Correct! You Guessed the number ${numberGuess} `);
    rl.close();
  }
};

consoleLog("Welcome to the Guessing Game!");
guessTheNumber();
