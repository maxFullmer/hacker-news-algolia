import React from 'react';
import './App.css';
import SearchBar from './Components/SearchBar/SearchBar.js';
import SearchButton from './Components/SearchButton/SearchButton.js';
import FilterOptions from './Components/FilterOptions/FilterOptions.js';

function App() {
  return (
    <div>
      <main>
        <section id="search">
          <SearchBar />
          <SearchButton />
          <FilterOptions />
        </section>
      </main>
    </div>
  );
}

export default App;
