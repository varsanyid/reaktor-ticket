import React from 'react';
import "./buttonStyle.css";
import TicketAppContext from '../../app-ctx-provider/TicketAppContext';

class PurchaseButton extends React.Component {

    render() {
        const ticket = this.props.ticket
        return (
            <TicketAppContext.Consumer>
               { (context) => <button onClick={() => context.addTicketToCart(ticket)}>Add</button> }
            </TicketAppContext.Consumer>
        )
    }
}

export default PurchaseButton;