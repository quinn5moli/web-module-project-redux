import { ADD_MOVIE, DELETE_MOVIE } from '../actions/movieActions.js';
import movies from './../data.js';

const initialState = {
    movies: movies,
    appTitle: "IMDB Movie Database"
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case DELETE_MOVIE:
            return {
                movies: state.movies.filter(item=>(action.payload !== item.id))
            }
        case ADD_MOVIE:
            const movieToAdd = {...action.payload, id: Math.floor(Math.random() *1000*action.payload.length)}
            return {
                ...state,
                movies: [...state.movies, movieToAdd]
            }
        default:
            return state;
    }
}

export default reducer;