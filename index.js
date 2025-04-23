const express = require("express");
const path = require("path");

const app = express();

app.get("/download", (req, res) => {
  const file = path.join(__dirname, "public", "example.txt");
  res.attachment(file);
  res.sendFile(file);
});

app.get("/", (req, res) => {
  res.send(`
            <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>NodeJs is awesome</title>
    <style>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      body {
        font-family: Arial, Helvetica, sans-serif;
        font-size: 16px;
      }
      .container {
        width: 50%;
        margin: 2rem auto;
        padding: 2rem;
        background: #dddeee;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <h1>Hello NodeJS, Your are awesome</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
        repudiandae dignissimos cupiditate repellendus tenetur veniam nihil nam
        sapiente at, beatae ea, labore non consequatur. Dolorem eaque asperiores
        nemo aliquam doloremque.
      </p>
    </div>
  </body>
</html>

        `);
});

app.listen(3000, () => {
  console.log(`Server is listening on port 3000`);
});
