import { readFile, writeFile } from "fs/promises"; // Use fs/promises for promise-based API
import { createServer } from "http";
import crypto from "crypto";
import path from "path";

const PORT = 3000;
const DATA_FILE = path.join("data", "links.json");

const serveFile = async (res, filePath, contentType) => {
  try {
    const data = await readFile(filePath);
    res.writeHead(200, { "Content-Type": contentType });
    res.end(data);
  } catch (error) {
    res.writeHead(404, { "Content-Type": contentType });
    res.end("404 page not found");
  }
};

const loadLinks = async () => {
  try {
    const data = await readFile(DATA_FILE, "utf-8");
    return data ? JSON.parse(data) : {}; // If file is empty, return an empty object
  } catch (error) {
    if (error.code === "ENOENT") {
      await writeFile(DATA_FILE, JSON.stringify({})); // Create the file if it doesn't exist
      return {}; // Return an empty object
    }
    throw error;
  }
};

const savedLinks = async (links) => {
  try {
    await writeFile(DATA_FILE, JSON.stringify(links)); // Write the updated links to the file
  } catch (error) {
    console.error("Error saving links:", error);
  }
};

const server = createServer(async (req, res) => {
  if (req.method === "GET") {
    if (req.url === "/") {
      return serveFile(res, path.join("public", "index.html"), "text/html");
    } else if (req.url === "/style.css") {
      return serveFile(res, path.join("public", "style.css"), "text/css");
    } else if (req.url === "/index.js") {
      return serveFile(
        res,
        path.join("public", "index.js"),
        "application/javascript"
      ); // Content type fixed: application/javascript
    } else if (req.url === "/links") {
      const links = await loadLinks();
      res.writeHead(200, { "Content-Type": "application/json" });
      return res.end(JSON.stringify(links));
    }
  }

  if (req.method === "POST" && req.url === "/shorten") {
    const links = await loadLinks();
    let body = "";

    req.on("data", (chunk) => (body += chunk));

    req.on("end", async () => {
      try {
        const { url, shortCode } = JSON.parse(body);
        if (!url) {
          res.writeHead(400, { "Content-Type": "text/plain" });
          return res.end("URL is required");
        }

        const finalShortCode =
          shortCode || crypto.randomBytes(4).toString("hex");
        if (links[finalShortCode]) {
          res.writeHead(400, { "Content-Type": "text/plain" });
          return res.end("Short code already exists. Please choose another!");
        }

        links[finalShortCode] = url;
        await savedLinks(links); // Save the updated links
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ success: true, shortCode: finalShortCode }));
      } catch (error) {
        console.error("Error processing request:", error);
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Internal Server Error");
      }
    });
  }
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
