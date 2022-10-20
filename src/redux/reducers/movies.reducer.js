import {getGenres, getMovies} from "../actions/actions";

const moviesReducer = (state = {movies: [], movie: null}, action) => {
    const {type, payload} = action;

    switch (type) {
        case getMovies:
            return {...state, movies: payload};

        case getGenres:
            const movie = state.movies.find(movie => movie.id === payload);
            return {...state, movie};

        default:
            console.error('error');
            return state;

    }
}
export {
    moviesReducer
}