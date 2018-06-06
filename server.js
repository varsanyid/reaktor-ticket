const express = require('express'),
    app = express(),
    port = process.env.PORT || 5000,
    bodyParser = require('body-parser'),
    server = require('http').createServer(app),
    io = require('socket.io')(server);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const eventRoute = require('./api/route/eventRoute')(app, io);

server.listen(port, () => console.log(`Listening on port ${port}`));