import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {moviesService} from "../../services";
import {getMovies} from "../../redux";
import {Movie} from "../moviesListCard/MoviesListCard";
import {moviesReducer} from "../../redux";

const Movies = () => {
    const {movies} = useSelector(state => state.moviesReducer);

    const dispatch = useDispatch();

    useEffect(() => {
        moviesService.getAll().then(({data}) => dispatch({type:getMovies, payload: data}))
    },[])
    return (
        <div>
            {
                movies.map(movie => <Movie key={movie.id} movie={movie}/>)
            }
        </div>
    );
};

export {Movies};