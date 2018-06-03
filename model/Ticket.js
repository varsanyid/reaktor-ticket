const Ticket = class Ticket {
    constructor(price, currency, type, eventId) {
        this.price = price;
        this.currency = currency;
        this.type = type;
        this.eventId = eventId;
    }
}
module.exports = Ticket;