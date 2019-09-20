import React from 'react';
import './SearchBar.css';
import { connect } from 'react-redux';
import { trackSearchInput } from '../../redux/reducers/search.js';

const SearchBar = (props) => {
    
    return (
        <div className="search-background">
            <input type="text" placeholder="Search Hacker News..." 
            onChange={(event) => props.trackSearchInput(event.target.value)}/>
        </div>
    )
}

const mapDispatchtoProps = {
    trackSearchInput
}

// first argument is null since redux state does not need to be read for this component
export default connect(null, mapDispatchtoProps)(SearchBar);