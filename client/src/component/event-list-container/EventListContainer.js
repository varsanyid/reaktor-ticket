import React from 'react';
import Event from '../event/Event';
import './eventContainer.css';
import { subscribeToNewEvents } from '../../service/SocketEventFactory';

class EventListContainer extends React.Component {
        
    state = {
        eventList: ''
    }

    componentDidMount() {
        this.getEvents().then(response =>  {
            this.setState({ eventList: response.events })
        }).catch(err => console.log(err));
        subscribeToNewEvents((event) => {
            this.setState({
                eventList: [...this.state.eventList, event]
            })
        })
    }

    getEvents = async () => {
        const response = await fetch('/event');
        const body = await response.json();
        return body;
    }

    render() {
        return (
        <ul className="container">
            { 
                this.state.eventList ? 
                this.state.eventList.map(event => <Event key={event.id} event={event} />)
                : undefined
            }
        </ul>
        )
    }

}

export default EventListContainer;