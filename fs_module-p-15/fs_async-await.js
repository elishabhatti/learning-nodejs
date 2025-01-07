const { log } = require("console");
const fs = require("fs/promises");
const path = require("path");

const fileName = "asyncFile.txt";
const filePath1 = path.join(__dirname, fileName);

// fs.readdir(filePath)
//   .then((data) => console.log(data))
//   .catch((err) => console.error("Error While Reading File", err));

// const readFolder = async () => {
//   try {
//     const response = await fs.readdir(filePath1)
//     console.log(response);

//   } catch (error) {
//     console.error(error);
//   }
// };
// readFolder();

// const writeFolder = async () => {
//   try {
//     await fs.writeFile(filePath1, "This is the initial data", "utf-8");
//     console.log("File Created Successfully");
//   } catch (error) {
//     console.error(error);
//   }
// };
// writeFolder();

// const readFile = async () => {
//   try {
//     const data = await fs.readFile(filePath1, "utf-8");
//     console.log(data);
//   } catch (err) {
//     console.error(err);
//   }
// };
// readFile();

// const updateFile = async () => {
//   try {
//      await fs.appendFile(filePath1,"\nThis is the updated File", "utf-8");
//     console.log("File Updated successfully");
//   } catch (err) {
//     console.error(err);
//   }
// };
// updateFile();

const deleteFile = async () => {
  try {
     await fs.unlink(filePath1);
    console.log("File Deleted Successfully");
  } catch (err) {
    console.error(err);
  }
};
deleteFile();
