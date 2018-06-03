import React from 'react';
import Ticket from '../ticket/Ticket';
import './ticketListContainerStyle.css';

class TicketListContainer extends React.Component {
    
    render() {
      const tickets = this.props.tickets;
      return (
        <ul className="ticketContainer"> 
            { tickets.map(ticket => <Ticket key={ticket.type} data={ticket} />) }
        </ul>
        )
    }
}

export default TicketListContainer;