import * as types from './types'
import * as config from '../../../config/API_KEYS'

function fetchSearchRequest() {
    return {
        type: types.FETCH_SEARCH_REQUEST
    };
}

function fetchSearchSuccess(response) {
    return {
        type: types.FETCH_SEARCH_SUCCESS,
        payload: response
    }
}

function fetchSearchFailure(error) {
    return {
        type: types.FETCH_SEARCH_FAILURE,
        payload: error
    }
}


export function fetchSearch(query,key) { 
    return async (dispatch) => {
        dispatch(fetchSearchRequest());
        try {
            const url =  key ==="Movies" ? `https://api.themoviedb.org/3/search/movie?api_key=${config.API_KEY}&query='${query}'&page=1`: `https://api.themoviedb.org/3/search/tv?api_key=${config.API_KEY}&language=en-US&query=${query}&page=1`
            const response = await fetch(url).then((res) => res.json())
            dispatch(fetchSearchSuccess(response))
        }
        catch (error) {
            dispatch(fetchSearchFailure(error))
        }
    }
}

function resetSearchOption(){
    return{
        type: types.RESET_SEARCH
    }
}

export function resetSearch() {
    return (dispatch) => {
        dispatch(resetSearchOption())
    }
}