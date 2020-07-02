const net = require("net");
var strftime = require("strftime");
var portNumber = process.argv[2];

const server = net.createServer(function (socket) {
  data = strftime("%Y-%m-%d %H:%M");

  socket.write(data + "\n");
  socket.end();
});

server.listen(portNumber);
