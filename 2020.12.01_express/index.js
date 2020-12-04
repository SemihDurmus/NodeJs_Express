const express = require("express");
const os = require("os");
const path = require("path");
//express().listen();

var app = express();
const port = 8000;
const host = "http://localhost";

const customPath = path.join(__dirname, "/testFolder");
console.log("Custom Path : ", customPath);

const wrongPath = `${__dirname}//testFolder/int`;
console.log("Normalized Path : ", path.normalize(wrongPath));

const customFile = "custom.png";
console.log("Custom file extension", path.extname(customFile));

//  Shows sprecs of the Server
// console.log("OS Type is ", os.type());
// console.log("Free memory is ", os.freemem() / (1024 * 1024 * 1024), "GB");

// app.get("/", (req, res) => {
//   console.log("req url", req.url);
//   console.log("req baseUrl", req.baseUrl);
//   console.log("req originalUrl", req.originalUrl);
//   console.log("req path", req.path);
//   console.log("req query", req.query);
//   const clientNumber = req.query.no;
//   res.send(`Your number is ${clientNumber}`);
// });

app.get("*", (req, res) => {
  res.send(`Server OS type is ${os.type()}`);
});

app.listen(port, () => {
  console.log(`I am listening on ${host}:${port}`);
});
