import {getMovies} from "../actions/actions";

const moviesReducer = (state = {movies: []}, action) => {
    const {type, payload} = action;

    switch (type) {
        case getMovies:
            return {...state, movies: payload};
        default:
            console.error('error');
            return state;

    }
}

export {
    moviesReducer
}