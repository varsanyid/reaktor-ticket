const event = class Event {
    constructor(name, date, location, type, tickets) {
        this.name = name;
        this.date = date;
        this.location = location;
        this.type = type;
        this.tickets = tickets;
    }
}
module.exports = event;