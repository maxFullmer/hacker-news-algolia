import { createStore, applyMiddleware, combineReducers } from 'redux';
import promise from 'redux-promise-middleware';
import search from './reducers/search.js';
import hackerNews from './reducers/hackerNews.js'

const rootReducer = combineReducers({
    search,
    hackerNews
})

export default createStore(rootReducer, applyMiddleware(promise));