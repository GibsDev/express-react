const path = require('path');
const express = require('express');
const app = express();
const { createServer } = require('http');
import { Server } from 'socket.io';
const port = 3000;

const httpServer = createServer(app);

const io = new Server(httpServer, {});

app.use(express.static(path.resolve(__dirname, './public')));

io.on("connection", socket => {
    socket.on('msg', payload => {
        console.log(payload);
    });
});

httpServer.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
    console.log(`http://localhost:${port}`);
});
