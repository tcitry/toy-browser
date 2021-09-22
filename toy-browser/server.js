const http = require("http");

http
  .createServer((request, response) => {
    let body = [];
    request
      .on("error", (err) => {
        console.log("error", err);
      })
      .on("data", (chunk) => {
        body.push(chunk);
      })
      .on("end", () => {
        body = Buffer.concat(body).toString();
        console.log("body:", body);
        response.writeHead(200, { "Content-Type": "text/html" });
        response.end(`<html>
    <head>
        <style>
            body div #myid {
                width: 100px;
                background-color: #ff5000;
            }
            body div img {
                width: 30px;
                background-color: #ff1111;
            }
        </style>
    </head>
    <body>
        <div>
            <img id="myid"/>
            <img />
        </div>
    </body>
</html>`);
      });
  })
  .listen(8000);

console.log("server started");
