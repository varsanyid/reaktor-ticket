'use strict';

const Event = require('../../model/Event');
const eventList = require('./mockEventList');
const eventController = require('../controller/eventController');

module.exports = (app, io) => {

    app.route('/event')
        .get((request, response) => {
            response.status(200);
            response.json(eventList);
        })
        .post((request, response) => {
            eventController.addEvent(request.body);
            io.emit('newEventAdded', request.body);
            response.status(200);
            response.json(request.body);
        })
        .delete((request, response) => {
            eventController.removeEvent(request.body);
            response.status(200);
            response.json(request.body);
        })
        .put((request, response) => {
            eventController.updateEvent(request.body);
            response.status(200);
            response.json(request.body);
        });
    app.get('/event/:snippet', (request, response) => {
        const result = eventController.getEventsBySearchSnippet(request.params.snippet);
        response.status(200);
        response.json(result);
    })

}