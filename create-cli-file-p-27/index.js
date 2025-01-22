import readline from "readline";
import fs from "fs";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const fileCreation = () => {
  rl.question("Enter the Filename: ", (filename) => {
    rl.question("Enter you content for your file: ", (content) => {
      fs.writeFile(`${filename}.txt`, content, (error) => {
        if (error) {
          console.error(`Error While Writing the file: ${error.message}`);
        } else {
          console.log(`File ${filename}.txt created successfully!`);
        }
        rl.close();
      });
    });
  });
};

fileCreation();
