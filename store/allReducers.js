import { combineReducers } from 'redux'

import MoviesReducer from '../src/containers/movies/reducer'
import TvShowReducer from '../src/containers/tvShow/reducer'
import SearchReducer from '../src/containers/header/reducer'

const AllReducers = combineReducers({
    MoviesReducer: MoviesReducer,
    TvShowReducer: TvShowReducer,
    SearchReducer: SearchReducer
})

export default AllReducers