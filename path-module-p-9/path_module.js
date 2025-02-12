const path = require("path");

console.log(__dirname);
console.log(__filename);

// school folder/student/data.txt
const filePath = path.join("folder", "student", "data.txt");
console.log(filePath);

const parseData = path.parse(filePath);
const resolvePath = path.resolve(filePath);
const extname = path.extname(filePath);
const basename = path.basename(filePath);
const dirname = path.dirname(filePath);

console.log({
  resolvePath,
  extname,
  basename,
  dirname,
  parseData,
  seprator: path.sep,
});
