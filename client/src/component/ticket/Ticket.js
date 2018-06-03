import React from 'react';
import PurchaseButton from '../purchase-button/PurchaseButton';

class Ticket extends React.Component {

    render() {
        const ticketData = this.props.data;
        return (
            <div>
                <div>{ticketData.price}</div>
                <div>{ticketData.currency}</div>
                <div>{ticketData.type}</div>
                <PurchaseButton ticket={ticketData} />
            </div>
        )
    }

}

export default Ticket;