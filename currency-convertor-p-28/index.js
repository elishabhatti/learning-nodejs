import https from "https";
import readline, { createInterface } from "readline";
import chalk from "chalk";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const apiKey = "b08639af152f8a4945f9d9ab";
const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`;

const convertCurrency = (amount, rate) => {
  return (amount * rate).toFixed(2);
};

https
  .get(url, (response) => {
    let data = "";

    response.on("data", (chunk) => {
      data += chunk;
    });

    response.on("end", () => {
      try {
        const rates = JSON.parse(data).conversion_rates;
        rl.question("Enter the amount in USD: ", (amount) => {
          const numericAmount = parseFloat(amount);
          if (isNaN(numericAmount)) {
            console.log(chalk.red("Invalid amount. Please enter a number."));
            rl.close();
            return;
          }
          rl.question(
            "Enter the target currency (e.g., INR, EUR, NPR): ",
            (currency) => {
              const rate = rates[currency.toUpperCase()];
              if (rate) {
                console.log(
                  chalk.green(
                    `${numericAmount} USD is approximately ${convertCurrency(
                      numericAmount,
                      rate
                    )} ${currency.toUpperCase()}`
                  )
                );
              } else {
                console.log(chalk.red("Invalid currency code."));
              }
              rl.close();
            }
          );
        });
      } catch (error) {
        console.log(chalk.red("Error parsing response from the API."));
        rl.close();
      }
    });
  })
  .on("error", (err) => {
    console.log(chalk.red("Error connecting to the API:", err.message));
  });
