const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();

app.get("/download", (req, res) => {
  const file = path.join(__dirname, "public", "example.txt");
  res.attachment(file);
  res.sendFile(file);
});

app.get("/", (req, res) => {
  fs.readFile("./pages/index.html", (err, data) => {
    if (err) {
      console.log(err);
      res.send(`<h1>Something went wrong</h1>`);
    } else {
      res.write(data);
      res.end();
    }
  });
});

app.listen(3000, () => {
  console.log(`Server is listening on port 3000`);
});
