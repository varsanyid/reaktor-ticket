const eventList = require('../route/mockEventList')

module.exports = {

    addEvent: (event) => {
        eventList.events.push(event)
    },

    removeEvent: (event) => {
        const index = eventList.events.indexOf(event);
        eventList.events.splice(index, 1);
    },

    updateEvent: (event) => {
        const index = eventList.events.findIndex(element => element.id === event.id);
        eventList.events[index] = event;
    },

    getEventById: (id) => {
        const index = eventList.events.findIndex(element => element.id === id);
        return eventList.events[index];
    },

    getEventsBySearchSnippet: (snippet) => {
        return eventList.events.filter(element => element.name.includes(snippet));
    }

}