import * as types from './types'
import * as config from '../../../config/API_KEYS'

function fetchTvShowRequest() {
    return {
        type: types.FETCH_TOP_10_TV_SHOW_REQUEST
    };
}

export function fetchTvShowSuccess(response) {
    return {
        type: types.FETCH_TOP_10_TV_SHOW_SUCCESS,
        payload: response
    }
}

function fetchTvShowFailure(error) {
    return {
        type: types.FETCH_TOP_10_TV_SHOW_FAILURE,
        payload: error
    }
}

export function fetchTvShow() {
    return async (dispatch) => {
        dispatch(fetchTvShowRequest());
        try {
            const url = `https://api.themoviedb.org/3/tv/popular?api_key=${config.API_KEY}&language=en-US&page=1`
            const response = await fetch(url).then((res) => res.json())
            dispatch(fetchTvShowSuccess(response))
        }
        catch (error) {
            dispatch(fetchTvShowFailure(error))
        }
    }
}

