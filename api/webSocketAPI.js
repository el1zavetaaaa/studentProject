const express = require('express');
const ws = require('ws');

const wsServer = new ws.Server({port: 8080});
wsServer.on('connection', socket => {
    socket.on('message', message => {
        console.log(`Client has sent us a message ${message}`);
        socket.send("response");
    });
});