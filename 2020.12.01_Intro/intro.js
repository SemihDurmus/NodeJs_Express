//console.log("hello from main");

// asenkron
// console.log("first");
// setTimeout(() => console.log("second"), 1000);
// console.log("third");

const http = require("http");
//console.log("http", http);

//Global Objects __filename __dirname
console.log("filename", __filename);
//filename /Users/s/Drive_2020/1_CLARUSWAY_EU/Clarusway_Course_Projects/nodejs/class-notes/2020.12.01_Intro/intro.js
console.log("dirname", __dirname);
//dirname /Users/s/Drive_2020/1_CLARUSWAY_EU/Clarusway_Course_Projects/nodejs/class-notes/2020.12.01_Intro
http
  .createServer((request, response) => {
    //console.log("request url", request.url);
    if (request.url === "/") {
      response.end("Hi from homepage");
    } else {
      response.writeHead(404);
      response.end(http.STATUS_CODES[404]);
    }
  })
  .listen(5000);
//localhost:5000'de gelen isteklere yanit veriyor
