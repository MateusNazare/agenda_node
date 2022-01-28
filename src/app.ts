import express from "express";
import dgram from "dgram";

import "./database";

import { router } from "./routes";

const server = dgram.createSocket("udp4");

server.on('listening', () => {
    const address = server.address();
    console.log(`server listening ${address.address}:${address.port}`);
});

server.connect(9999, 'localhost', () => {});

const app = express();
app.use(express.json());
app.use(router);


export { app, server };