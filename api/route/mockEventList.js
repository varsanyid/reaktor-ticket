module.exports = {
    events: [
        {
            id: 1,
            name: "Sziget",
            date: "2018-08-03",
            location: "Budapest",
            type: "Festival",
            tickets: [
                {
                    price: 25,
                    currency: "GBP",
                    type: "Common",
                    eventId: 1
                },
                {
                    price: 40,
                    currency: "GBP",
                    type: "VIP",
                    eventId: 1
                }
            ],
            availableTickets: 500
        }
    ]
}