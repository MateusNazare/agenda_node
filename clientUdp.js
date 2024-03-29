var dgram = require("dgram");

const server = dgram.createSocket('udp4');

server.on('error', (err) => {
  console.log(`server error:\n${err.stack}`);
  server.close();
});

server.on('listening', () => {
  const address = server.address();
  console.log(`server listening ${address.address}:${address.port}`);
});

server.on('message', (data, info) => {
    console.log("---------------------------");
    console.log(data.toString());
    console.log("enviada de: " + info.address + " porta: " + info.port);
});

server.bind({
    address: 'localhost',
    port: 9999
});