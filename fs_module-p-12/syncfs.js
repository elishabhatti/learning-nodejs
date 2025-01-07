const fs = require("fs");
const path = require("path");

// create
const fileName = "text.txt";
const filePath = path.join(__dirname, fileName);

// const writeFile = fs.writeFileSync(
//   filePath,
//   "This is the initial Data",
//   "utf-8"
// );
// console.log(writeFile);

// read
// const readFile = fs.readFileSync(filePath, "utf-8");
// console.log(readFile.toString());
// console.log(readFile);

// update
// const appenFile = fs.appendFileSync(filePath,"\nThis is the Data to append");
// const readFile = fs.readFileSync(filePath, "utf-8");

// console.log(readFile);
// console.log(appenFile);

// delete
// const fileData = fs.unlinkSync(filePath);
// console.log(fileData);

// remane
// const newUpdatedFileName = "newTest.txt";
// const newFilePath = path.join(__dirname, newUpdatedFileName);
// const renameFile = fs.renameSync(filePath, newFilePath)
// console.log(renameFile);
