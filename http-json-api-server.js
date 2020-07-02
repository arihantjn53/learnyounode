const http = require("http");
const url = require("url");

const server = http.createServer(function (req, res) {
  req.on("error", function (err) {
    console.log(err);
  });

  res.writeHead(200, { "Content-Type": "application/json" });

  var myUrl = url.parse(req.url);

  if (myUrl.pathname == "api/parsetime") {
    // do something
    isoTime = myUrl.searchParams.get("iso");

    res.end();
  } else if (myUrl.pathname == "api/unixtime") {
    // do something
    res.end();
  }
});
server.listen(portNumber);
