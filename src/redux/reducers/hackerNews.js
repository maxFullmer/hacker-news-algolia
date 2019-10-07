import axios from 'axios';

const GET_HACKER_NEWS_RESULTS = 'GET_HACKER_NEWS_RESULTS';

const initialState = {
    searchTermList: [],
    hackerNewsResults: null,
    pending: false
}

export default function hackerNews(state = initialState, action) {
    switch (action.type) {
        case GET_HACKER_NEWS_RESULTS + '_PENDING':
            return { ...state, pending: true }
        case GET_HACKER_NEWS_RESULTS + '_FULFILLED':
            return { ...state,
                hackerNewsResults: action.payload.hits,
                searchTermList: [...state.searchTermList, action.payload.query],
                pending: false,
                }
        default:
            return state
    }
}

// action creators

// api call
// 1) arguements are the redux state read by connected React components
export function getHackerNewsResults(searchTerm, filterOption) {
    // 2) set up RESTful api call with necessary header/body info
    let wholeQuery;

    if (filterOption === "title") {
        wholeQuery = `query=${searchTerm}&tags=story`
    }
    else if (filterOption === "author") {
        wholeQuery = `tags=story,author_${searchTerm}`
    }
    else {
        wholeQuery = `query=${searchTerm}`
    }
    
    /* 3) thanks to redux-promise-middleware, we can store a promise (async function) as a variable,
    which can be used as a payload */
    const data = function() {
        return axios.get(`http://hn.algolia.com/api/v1/search?${wholeQuery}`)
        .then(hackerNewsResults => {
            console.log(hackerNewsResults.data)
            return hackerNewsResults.data
        })
        .catch(err => console.log(err))
    } 

    return {
            payload: data,
            type: GET_HACKER_NEWS_RESULTS
        }
}