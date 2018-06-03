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
             <div className="eventContainer">
                <div className="event" onClick={this.onClick}>
                    <div className="eventName">{event.name}</div>
                    <div className="eventLocation">{event.location}</div>
                    <div className="eventType">{event.type}</div>
                </div>
                { isTicketVisible ? <TicketListContainer tickets={event.tickets}/> : undefined }
            </div>
        )
    }
}

export default Event;