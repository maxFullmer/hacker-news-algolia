import React from 'react';

export default function FilterOptions() {
    return (
        <div>
            <label htmlFor="filter">Filter by: </label>
            <select id="filter" name="filter">
                <option value="title">Title</option>
                <option value="content">Content</option>
                <option value="author">Author</option>
            </select>
        </div>
    )
}