const Purchase = class Purchase {
    constructor(event, ticket, numberOfTickets) {
        this.event = event;
        this.ticket = ticket;
        this.numberOfTickets = numberOfTickets;
    }
}
module.exports = Purchase;