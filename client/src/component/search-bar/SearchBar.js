import React from 'react';
import "./searchBarStyle.css";

class SearchBar extends React.Component {

    render() {
        return(
            <input className="searchBar" type="text" placeholder="Search for events" />
        )
    }
}

export default SearchBar;