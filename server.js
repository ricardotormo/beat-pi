const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const app = express();
require('dotenv').config()
const osc = require('osc');

// Initialize a UDP Server
var udpPort = new osc.UDPPort({
  localAddress: "0.0.0.0",
  localPort: process.env.UDP_PORT || 5000,
  metadata: true
});

/**
 * Send message to Sonic PI
 *
 * @param {String} address
 * @param {String} message
 */
const sendUDPMessage = (address, message = []) => {

  // Build an array of integer from the comma seperated list of values
  const args = message.reduce(function (acc, value) {
    // Value must be an integer
    const result = parseInt(value);

    if (!result) return acc;

    // Push new integer value type that we plan to send
    acc.push({
      type: 'i',
      value: result,
    });

    return acc;
  }, []);
  console.log('Send message %s to %s', JSON.stringify(args), address);

  // Send accumulated args to address, Sonic Pi
  udpPort.send(
    {
      address, // That channel were sending to
      args,
    },
    '127.0.0.1',
    4560, // Port Sonic Pi listens to
  );
};

udpPort.open()

app.use(express.static('public'));
//initialize a simple http server
const server = http.createServer(app);

//initialize the WebSocket server instance
const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {

  //connection is up, let's add a simple simple event
  ws.on('message', (message) => {
    //const {type, beats} = JSON.parse(message);
    const { address, name, beats } = JSON.parse(message);

    sendUDPMessage(`/${address}/${name}`, beats);
  });

  // Send osc received message
  udpPort.on("message", function (message) {
    ws.send(JSON.stringify(message));
  });
});

//start our server
server.listen(process.env.PORT || 8999, () => {
  console.log(`Server started on port ${server.address().port} :)`);
});