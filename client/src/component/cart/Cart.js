import React from 'react';
import TicketAppContext from '../../app-ctx-provider/TicketAppContext';

class Cart extends React.Component {
    
    render() {
        return (
            <TicketAppContext.Consumer>
               {context =>  context.ticketsToBuy.map(ticket => <div> {ticket.eventId} </div>) }
            </TicketAppContext.Consumer>
        )
    }
}

export default Cart;