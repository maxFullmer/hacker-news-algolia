import React from 'react';
import { connect } from 'react-redux';

const HackerNewsResults = (props) => {
        const { pending, hackerNewsResults} = props;

        if (pending) { return <div>Obtaining Hacker News Results...</div> };

        let mappedHackerNewsResults;

        if (hackerNewsResults) {
            mappedHackerNewsResults = hackerNewsResults.map((result, index) => {
            return (
                <ul key={index}>
                    <li>Title: <span>{(result.title) ? result.title : "N/A"}</span></li>
                    <li>URL: <span>{(result.url) ? result.url : "N/A"}</span></li>
                    <li>Author: <span>{(result.author) ? result.author : "N/A"}</span></li>
                    <li>Points: <span>{(result.points) ? result.points : "N/A"}</span></li>
                    <li>Story: <span>{(result.story_text) ? result.story_text : "N/A"}</span></li>
                    <li>Created: <span>{(result.created_at) ? result.created_at : "N/A"}</span></li>
                </ul>
            )
            })
        }        

        return <div>Results: <br />{mappedHackerNewsResults}</div>
}

const mapReduxStateToProps = (reduxState) => {
    return {
        hackerNewsResults: reduxState.hackerNews.hackerNewsResults,
        pending: reduxState.hackerNews.pending,
    }
}

export default connect(mapReduxStateToProps)(HackerNewsResults);