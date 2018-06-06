import React from 'react';
import TicketAppContext from '../../app-ctx-provider/TicketAppContext';
import "./cartStyle.css";

class Cart extends React.Component {
    
    calculateSumAmount(context) {
        const array = context.ticketsToBuy;
        return array.length > 1 ? array.reduce((a, b) => a.price + b.price) : array.length === 0 ? 0 : array[0].price; 
    }

    render() {
        return (
            <React.Fragment>
                <div className="cart">
                    <p>Items in cart:</p>
                <TicketAppContext.Consumer>
                    {
                        context => 
                        context.ticketsToBuy.map(ticket => 
                            <div key={ticket.eventId}> {ticket.price} {ticket.currency} </div>
                        ) 
                    }
                </TicketAppContext.Consumer>
                <TicketAppContext.Consumer>
                    { 
                        context => {
                            const totalAmount = this.calculateSumAmount(context);
                            return ( <p>{totalAmount} </p> )
                        }
                    }
                </TicketAppContext.Consumer>
                </div>
            </React.Fragment>
        )
    }
}

export default Cart;