import {getMovies} from "../actions/actions";

const moviesReducer = (state = {moviesList: []}, action) => {
    const {type, payload} = action;

    switch (type) {
        case getMovies:
            return {...state, moviesList: payload};
        default:
            console.error('error');
            return state;

    }
}

export {
    moviesReducer
}