const crypto = require("crypto");

const randomValue = crypto.randomBytes(3).toString("hex").toUpperCase();
console.log(randomValue);

const hashValue1 = crypto
  .createHash("sha256")
  .update("Elisha Jameel")
  .digest("hex");
console.log(hashValue1);
