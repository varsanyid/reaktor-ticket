import React from 'react';
import TicketAppContext from './TicketAppContext';

class AppContextProvider extends React.Component {
    
    state = {
        ticketsToBuy: [],
        addTicketToCart: (ticket) => {
            this.setState({
                ticketsToBuy: [...this.state.ticketsToBuy, ticket]
            });
        },
        removeTicketFromCart: (ticket) => {
            this.setState((prevState) => {
                // eslint-disable-next-line no-labels, no-unused-labels
               ticketsToBuy:  prevState.ticketsToBuy.filter(item => item !== ticket);
            });
        },
    }

    render() {
        return (
        <TicketAppContext.Provider value={this.state}>
            {this.props.children}
        </TicketAppContext.Provider>
        );
    }
}

export default AppContextProvider;