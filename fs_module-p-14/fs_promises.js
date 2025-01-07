const fs = require("fs/promises");
const path = require("path");

const fileName = "fsPromises.txt";
const filePath = path.join(__dirname, fileName);

// const file = __dirname

// fs.promises
//   .readdir(file)
//   .then((data) => console.log(data))
//   .catch((err) => console.error(err));

// const fileName1 = __dirname;
// fs.promises
//   .readdir(fileName1)
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

fs.writeFile(filePath, "This is the initial data", "utf-8")
  .then(console.log("File Created Successfully"))
  .catch((err) => console.error(err));

// fs.readFile(filePath, "utf-8")
//   .then((data) => console.log(data))
//   .catch((err) => console.error("Error reading file:", err));

// fs.appendFile(filePath, "\nThis is the updated data", "utf-8")
//   .then(console.log("File Updated Successfully"))
//   .catch((err) => console.error("Error While Updating:", err));

// fs.unlink(filePath)
//   .then(console.log("File Deleted Successfully"))
//   .catch((err) => console.error("Error While Deleting:", err));

