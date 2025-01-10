const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<h1>Welcome To Node.js</h1>");
    res.end();
  }
  if (req.url === "/source") {
    res.write("Welcome To Node.js Source Code");
    res.end();
  }
  if (req.url === "/contact") {
    res.setHeader("Content-Type", "text/plain");
    res.write("Contact To Node.js server");
    res.end();
  }
  if (req.url === "/about") {
    res.write("About To Node.js Hello");
    res.end();
  }
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Listerning on PORT ${PORT}`);
});
