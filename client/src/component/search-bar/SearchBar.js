import React from 'react';
import "./searchBarStyle.css";

class SearchBar extends React.Component {

    state = {
        searchResults: []
    }

    onChange = (event) => {
        const snippetLength = event.currentTarget.value.length;
        const snippet = event.currentTarget.value;
        if(snippetLength >= 3) {
            this.getSearchResults(snippet)
                .then(result => this.setState({
                    searchResults: result
                }))
                .catch(err => console.error(err));
        } else {
            this.setState({
                searchResults: []
            })
        }
    }

    getSearchResults = async (snippet) => {
        const response = await fetch('/event/' + snippet);
        return await response.json();
    }

    render() {
        return(
            <div className="bar-container">
                <form>
                    <h2>Search for your next event</h2>
                    <input className="search-bar" type="text" placeholder="Search events" onChange={this.onChange} />
                    <input className="search-submit" type="submit" value="Search" />
                </form>
                { this.state.searchResults.length > 0 ? this.state.searchResults.map(result => <p key={result.id}>{result.name}</p>) : null }
            </div>
        )
    }
}

export default SearchBar;