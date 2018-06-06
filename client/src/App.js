import React, { Component } from 'react';
import AppContextProvider from './app-ctx-provider/AppContextProvider';
import EventListContainer from './component/event-list-container/EventListContainer';
import SearchBar from './component/search-bar/SearchBar';
import Cart from './component/cart/Cart';
import './App.css';

class App extends Component {

  render() {
    return (
      <AppContextProvider>
        <div className="App">
          <h1>Ticket Portal</h1>
          <Cart />
          <SearchBar />
          <h2>Upcoming events</h2>
          <EventListContainer />
        </div>
      </AppContextProvider>
    );
  }

}

export default App;
