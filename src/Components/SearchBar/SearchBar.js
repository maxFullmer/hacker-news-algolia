import React from 'react';
import './SearchBar.css';

export default function SearchBar() {
    return (
        <div className="search-background">
            <input type="text" placeholder="Search Hacker News..." />
        </div>
    )
}