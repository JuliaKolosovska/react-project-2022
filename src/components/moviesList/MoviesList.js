import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {MovieInfo} from "../movieInfo/MovieInfo";
import {moviesService} from "../../services";
import {getMovies} from "../../redux";
import {moviesReducer} from "../../redux";
import {useParams} from "react-router-dom";

const MoviesList = () => {

    const {movies} = useSelector(state => state.movie);

    const value = useParams();

    useEffect(() => {
        moviesService.getAll().then(({data}) => dispatch({type:getMovies, payload: data}))
    },[])

    return (
        <div>
            {
                movies.results?.map(movie => <MovieInfo key={movie.id} movie={movie}/>)
            }
        </div>
    )
}


export {MoviesList};