import React from 'react';
import Event from '../event/Event';
import './eventContainer.css';

class EventListContainer extends React.Component {
        
    state = {
        response: ''
    };

    componentDidMount() {
        this.getEvents().then(res =>  {
            this.setState({ response: res })
        })
        .catch(err => console.log(err));
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
                this.state.response ? 
                this.state.response.events.map(event => <Event key={event.id} event={event} />)
                : undefined
            }    
        </ul>
        )
    }

}

export default EventListContainer;