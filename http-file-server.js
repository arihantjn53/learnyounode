const fs = require("fs");
const http = require("http");

var portNumber = process.argv[2];
var file = process.argv[3];

const server = http.createServer(function (req, res) {
  var readStream = fs.createReadStream(file);
  readStream.on("open", function () {
    readStream.pipe(res);
  });

  readStream.on("error", function (err) {
    res.end(err);
  });
});

server.listen(portNumber);
