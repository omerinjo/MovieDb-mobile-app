import * as types from './types'
import * as config from '../../../config/API_KEYS'

function fetchMoviesRequest() {
    return {
        type: types.FETCH_TOP_10_MOVIES_REQUEST
    };
}

export function fetchMoviesSuccess(response) {
    return {
        type: types.FETCH_TOP_10_MOVIES_SUCCESS,
        payload: response
    }
}

function fetchMoviesFailure(error) {
    return {
        type: types.FETCH_TOP_10_MOVIES_FAILURE,
        payload: error
    }
}

export function fetchMovies() {
    return async (dispatch) => {
        dispatch(fetchMoviesRequest());
        try {
            const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${config.API_KEY}&language=en-US&page=1`
            const response = await fetch(url).then((res) => res.json())
            dispatch(fetchMoviesSuccess(response))
        }
        catch (error) {
            dispatch(fetchMoviesFailure(error))
        }
    }
}

