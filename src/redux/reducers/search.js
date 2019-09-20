const TRACK_SEARCH_INPUT ='TRACK_SERACH_INPUT';
const TRACK_FILTER_OPTION ='TRACK_FILTER_OPTION';

const initialState = {
    searchBarInput: "",
    filterOption: ""
}

export default function search(state = initialState, action) {
    switch (action.type) {
        case TRACK_SEARCH_INPUT:
            return { ...state, 
                searchBarInput: action.payload
            }
        case TRACK_FILTER_OPTION:
            return { ...state, 
                filterOption: action.payload
            }
        default:
            return state;
    }
}

// action creators

export const trackSearchInput = (searchInput) => {
    return {
        payload: searchInput,
        type: TRACK_SEARCH_INPUT
    }
}

export const trackFilterOption = (filterOption) => {
    return {
        payload: filterOption,
        type: TRACK_FILTER_OPTION
    }
}