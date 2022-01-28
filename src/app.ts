import express from "express";
import dgram from "dgram";
import net from "net";

import "./database";

import { router } from "./routes";

// ========= UDP ===========
const server = dgram.createSocket("udp4");

server.on('listening', () => {
    const address = server.address();
    console.log(`server listening ${address.address}:${address.port}`);
});

server.on('error', (err) => {
    console.log(`server error:\n${err.stack}`);
    server.close();
});

server.connect(9999, 'localhost', () => {});

// ========= TCP ===========
var serverTCP = new net.Socket();
serverTCP.connect(8888, '127.0.0.1');

serverTCP.on('data', function(data) {
    console.log("---------------------------");
    console.log(data.toString());
});

serverTCP.on('error', function(err) {
    console.log(`Error: ${err}`);
});

const app = express();
app.use(express.json());
app.use(router);


export { app, server, serverTCP };