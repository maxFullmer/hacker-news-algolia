import React from 'react';
import './FilterOptions.css';
import { connect } from 'react-redux';
import { trackFilterOption } from '../../redux/reducers/search.js';

const FilterOptions = (props) => {
    return (
        <div>
            <label htmlFor="filter">Filter by: </label>
            <select id="filter" name="filter"
                    onChange={(event) => {
                       props.trackFilterOption(event.target.value) 
                    }
                    }>
                <option value="addfilter">Add Filter...</option>
                <option value="title">Story Title</option>
                <option value="author">Author</option>
            </select>
        </div>
    )
}

const mapDispatchToProps = {
    trackFilterOption
}

// first argument is null since redux state does not need to be read for this component
export default connect(null,mapDispatchToProps)(FilterOptions);