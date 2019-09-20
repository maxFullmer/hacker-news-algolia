import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getHackerNewsResults } from './redux/reducers/hackerNews.js';
import SearchBar from './Components/SearchBar/SearchBar.js';
import SearchButton from './Components/SearchButton/SearchButton.js';
import FilterOptions from './Components/FilterOptions/FilterOptions.js';
import HackerNewsResults from './Components/HackerNewsResults/HackerNewsResults.js';

const App = (props) => {
  const { currentSearchTerm, filterOption, getHackerNewsResults, searchTermList } = props;
  console.log('redux state in App: ', props)
  return (
    <main>
      <section id="redux-state">Logged Search Terms: {searchTermList.map((term, index) => 
        <span key={index}>{term}, </span>)}
      </section>

      <form id="search-container" 
            onSubmit={(event) => {
                event.preventDefault();
                getHackerNewsResults(currentSearchTerm, filterOption);
            } }>
        <SearchBar />
        <SearchButton />
        <FilterOptions />
      </form>

      <section id="hn-results-container">
        <HackerNewsResults />
      </section>
    </main>
  );
}

const mapReduxStateToProps = (reduxState) => {
  return {
      currentSearchTerm: reduxState.search.searchBarInput,
      filterOption: reduxState.search.filterOption,
      searchTermList: reduxState.hackerNews.searchTermList
  }
}

const mapDispatchToProps = {
  getHackerNewsResults
}


export default connect(mapReduxStateToProps, mapDispatchToProps)(App);
