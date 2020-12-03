const express = require("express");

//express().listen();

var app = express();
const port = 8000;
const host = "http://localhost";

app.get("/", (req, res) => {
  console.log("req url", req.url);
  console.log("req baseUrl", req.baseUrl);
  console.log("req originalUrl", req.originalUrl);
  res.send("Hello from express");
});

app.listen(port, () => {
  console.log(`I am listening on ${host}:${port}`);
});
