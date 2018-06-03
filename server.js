const express = require('express'),
    app = express(),
    port = process.env.PORT || 5000,
    bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const eventRoute = require('./api/route/eventRoute')(app);

app.listen(port);