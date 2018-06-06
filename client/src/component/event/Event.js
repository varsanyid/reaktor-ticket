import React from 'react';
import TicketListContainer from '../ticket-list-container/TicketListContainer';
import './eventStyle.css';

class Event extends React.Component {

    state = {
        isTicketVisible: false
    }

    onClick = () => {
        this.setState({ isTicketVisible: !this.state.isTicketVisible })
    }

    render() {
        const event = this.props.event
        const isTicketVisible = this.state.isTicketVisible
        return(
             <div className="event-container" onClick={this.onClick} >
                <div className="event-name">{event.name}</div>
                <div className="event-location">{event.location}</div>
                <div className="event-type">{event.type}</div>
                { isTicketVisible ? <TicketListContainer tickets={event.tickets}/> : undefined }
            </div>
        )
    }
}

export default Event;